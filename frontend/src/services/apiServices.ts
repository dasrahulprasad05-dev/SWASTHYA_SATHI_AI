// ============================================
// Swasthya Sathi AI — API & Supabase Services
// ============================================

import api from '../lib/axios';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type {
  Chat,
  Message,
  Hospital,
  Disease,
  DashboardStats,
  AdminStats,
  ApiResponse,
  HospitalFilters,
} from '../types';
import {
  MOCK_CHATS,
  MOCK_MESSAGES,
  MOCK_HOSPITALS,
  MOCK_DISEASE,
  MOCK_DASHBOARD_STATS,
  MOCK_ADMIN_STATS,
} from '../constants';
import { diseasesData } from '../data/diseasesData';
import { ODISHA_HOSPITALS } from '../data/hospitalsData';

// ── Chat & AI Triage Service ──
export const chatService = {
  getChats: async (): Promise<Chat[]> => {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('chats')
          .select('*')
          .order('updated_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data.map((c: any) => ({
            id: c.id,
            title: c.title,
            preview: c.preview || '',
            timestamp: c.updated_at || c.created_at,
            isPinned: c.is_pinned ?? false,
            messageCount: c.message_count || 0,
            unread: false,
          }));
        }
      } catch (err) {
        console.warn('Supabase chats fetch error, fallback to local:', err);
      }
    }

    try {
      const res = await api.get<ApiResponse<Chat[]>>('/chat/history');
      return res.data.data;
    } catch {
      return MOCK_CHATS;
    }
  },

  getChatMessages: async (chatId: string): Promise<Message[]> => {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('chat_id', chatId)
          .order('created_at', { ascending: true });

        if (!error && data && data.length > 0) {
          return data.map((m: any) => ({
            id: m.id,
            chatId: m.chat_id,
            content: m.content,
            role: m.role,
            timestamp: m.created_at,
            metadata: m.metadata || {},
          }));
        }
      } catch (err) {
        console.warn('Supabase messages fetch error, fallback to local:', err);
      }
    }

    try {
      const res = await api.get<ApiResponse<Message[]>>(`/chat/${chatId}/messages`);
      return res.data.data;
    } catch {
      return MOCK_MESSAGES.filter((m) => m.chatId === chatId || chatId === '1');
    }
  },

  sendMessage: async (
    chatId: string,
    content: string,
    language: 'en' | 'hi' | 'or' = 'en'
  ): Promise<Message> => {
    // 1. Try Backend Groq AI Endpoint
    try {
      const res = await api.post<ApiResponse<Message>>('/ai/chat', {
        chatId,
        message: content,
        language,
      });
      if (res.data?.data) {
        return res.data.data;
      }
    } catch (err) {
      console.warn('Backend AI API unavailable:', err);
    }

    // 2. Safe Offline Fallback
    await new Promise((r) => setTimeout(r, 900));

    let fallbackContent = 'Our servers are currently experiencing high traffic or the AI service is unavailable. Please try again in a few moments. If you have a medical emergency, please contact a healthcare professional or dial 108 immediately.';
    let recommendations = ['Please try again later', 'Consult a doctor for immediate medical concerns'];
    let warnings = ['Service temporarily offline'];

    if (language === 'or') {
      fallbackContent = 'ଆମର ସର୍ଭରଗୁଡ଼ିକ ବର୍ତ୍ତମାନ ବ୍ୟସ୍ତ ଅଛନ୍ତି କିମ୍ବା AI ସେବା ଉପଲବ୍ଧ ନାହିଁ। ଦୟାକରି କିଛି ସମୟ ପରେ ଚେଷ୍ଟା କରନ୍ତୁ। ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତିରେ, ଦୟାକରି ୧୦୮ କୁ କଲ୍ କରନ୍ତୁ କିମ୍ବା ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ।';
      recommendations = ['ଦୟାକରି ପରେ ଚେଷ୍ଟା କରନ୍ତୁ', 'ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ'];
      warnings = ['ସେବା ସାମୟିକ ଭାବେ ବନ୍ଦ ଅଛି'];
    } else if (language === 'hi') {
      fallbackContent = 'हमारे सर्वर वर्तमान में व्यस्त हैं या एआई सेवा उपलब्ध नहीं है। कृपया कुछ क्षणों बाद फिर से प्रयास करें। आपात स्थिति में, कृपया 108 डायल करें या डॉक्टर से परामर्श लें।';
      recommendations = ['कृपया बाद में प्रयास करें', 'डॉक्टर से परामर्श लें'];
      warnings = ['सेवा अस्थायी रूप से ऑफ़लाइन है'];
    }

    return {
      id: Date.now().toString(),
      chatId,
      content: fallbackContent,
      role: 'assistant',
      timestamp: new Date().toISOString(),
      metadata: {
        recommendations,
        warnings,
        followUp: '',
        sources: ['System Alert'],
        confidence: 0.1,
      },
    };
  },

  deleteChat: async (chatId: string): Promise<boolean> => {
    if (isSupabaseConfigured()) {
      try {
        await supabase.from('chats').delete().eq('id', chatId);
      } catch (err) {
        console.warn('Supabase delete chat error:', err);
      }
    }
    return true;
  },
};

// ── Hospital Service ──
export const hospitalService = {
  getHospitals: async (filters?: HospitalFilters): Promise<Hospital[]> => {
    // 1. Check Supabase
    if (isSupabaseConfigured()) {
      try {
        let query = supabase
          .from('hospitals')
          .select(`
            *,
            hospital_beds (
              icu_beds,
              oxygen_beds,
              general_beds
            )
          `);

        if (filters?.type && filters.type !== 'All') {
          query = query.eq('type', filters.type);
        }
        if (filters?.query) {
          query = query.ilike('name', `%${filters.query}%`);
        }

        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          return data.map((h: any) => ({
            id: h.id,
            name: h.name,
            type: h.type,
            address: h.address,
            city: h.city,
            district: h.district,
            state: h.state,
            pincode: h.pincode,
            phone: h.phone,
            lat: h.lat,
            lng: h.lng,
            coordinates: { lat: h.lat, lng: h.lng },
            rating: h.rating || 4.5,
            reviewCount: h.review_count || 100,
            isVerified: h.is_verified ?? true,
            isOpen24x7: h.is_open_24x7 ?? true,
            specialties: h.specialties || [],
            services: h.services || [],
            beds: {
              icu: (Array.isArray(h.hospital_beds) ? h.hospital_beds[0]?.icu_beds : h.hospital_beds?.icu_beds) || 0,
              oxygen: (Array.isArray(h.hospital_beds) ? h.hospital_beds[0]?.oxygen_beds : h.hospital_beds?.oxygen_beds) || 0,
              general: (Array.isArray(h.hospital_beds) ? h.hospital_beds[0]?.general_beds : h.hospital_beds?.general_beds) || 0,
            },
          }));
        }
      } catch (err) {
        console.warn('Supabase hospitals query error:', err);
      }
    }

    // 2. Try Backend API
    try {
      const res = await api.get<ApiResponse<Hospital[]>>('/hospitals', { params: filters });
      if (res.data?.data && res.data.data.length > 0) {
        return res.data.data;
      }
    } catch {
      // Continue to local mock
    }

    // 3. Local Mock Filtering
    let filtered = [...ODISHA_HOSPITALS];
    if (filters?.type && filters.type !== 'All') {
      filtered = filtered.filter((h) => h.type.toLowerCase() === filters.type?.toLowerCase());
    }
    if (filters?.openNow) {
      filtered = filtered.filter((h) => h.isOpen24x7);
    }
    if (filters?.query) {
      const q = filters.query.toLowerCase().trim();
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.address.toLowerCase().includes(q) ||
          (h.city && h.city.toLowerCase().includes(q)) ||
          (h.district && h.district.toLowerCase().includes(q)) ||
          (h.specialties && h.specialties.some((s) => s.toLowerCase().includes(q))) ||
          (h.services &&
            h.services.some((s) =>
              typeof s === 'string' ? s.toLowerCase().includes(q) : s.name.toLowerCase().includes(q)
            ))
      );
    }
    return filtered;
  },

  getHospitalById: async (id: string): Promise<Hospital | undefined> => {
    try {
      const res = await api.get<ApiResponse<Hospital>>(`/hospitals/${id}`);
      if (res.data?.data) return res.data.data;
    } catch {
      // Continue to local dataset
    }
    return (
      ODISHA_HOSPITALS.find((h) => h.id === id || h.id === `hosp-${id}`) ||
      MOCK_HOSPITALS.find((h) => h.id === id) ||
      ODISHA_HOSPITALS[0]
    );
  },
};

// ── Health / Disease Service ──
export const healthService = {
  getDiseaseById: async (id: string): Promise<Disease> => {
    // 1. Check local rich 110+ dataset first
    const found = diseasesData.find(
      (d) =>
        d.id === id ||
        d.id === `dis-${id}` ||
        (id === '1' && d.id === 'dengue-fever') ||
        (id === '2' && d.id === 'malaria-falciparum') ||
        (id === '3' && d.id.includes('chikungunya')) ||
        (id === '4' && d.id === 'cholera-diarrhea')
    );

    if (found) {
      return {
        id: found.id,
        name: found.en.name,
        nativeName: found.or.nativeName || found.or.name,
        category: found.category,
        severity: found.severity,
        transmission: found.transmission,
        overview: found.en.overview,
        symptoms: found.en.symptoms,
        causes: found.en.causes,
        treatments: found.en.treatments,
        prevention: found.en.prevention,
        dos: found.en.dos,
        donts: found.en.donts,
        whenToSeeDoctor: found.en.whenToSeeDoctor,
        faqs: found.en.faqs,
        en: found.en,
        or: found.or,
      };
    }

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('diseases').select('*').eq('id', id).single();
        if (!error && data) {
          return {
            id: data.id,
            name: data.name,
            nativeName: data.native_name,
            category: data.category,
            severity: data.severity,
            transmission: data.transmission,
            overview: data.overview,
            symptoms: data.symptoms,
            causes: data.causes,
            treatments: data.treatments,
            prevention: data.prevention,
            dos: data.dos,
            donts: data.donts,
            whenToSeeDoctor: data.when_to_see_doctor,
            faqs: data.faqs,
          };
        }
      } catch (err) {
        console.warn('Supabase disease fetch error:', err);
      }
    }

    try {
      const res = await api.get<ApiResponse<Disease>>(`/diseases/${id}`);
      return res.data.data;
    } catch {
      return MOCK_DISEASE;
    }
  },

  searchDiseases: async (query: string): Promise<Disease[]> => {
    const q = query.toLowerCase();
    const localMatches = diseasesData.filter(
      (d) =>
        d.en.name.toLowerCase().includes(q) ||
        d.or.name.includes(q) ||
        (d.or.nativeName && d.or.nativeName.includes(q)) ||
        d.en.overview.toLowerCase().includes(q) ||
        d.or.overview.includes(q) ||
        d.category.toLowerCase().includes(q)
    );

    if (localMatches.length > 0) {
      return localMatches.map((d) => ({
        id: d.id,
        name: d.en.name,
        nativeName: d.or.nativeName || d.or.name,
        category: d.category,
        severity: d.severity,
        transmission: d.transmission,
        overview: d.en.overview,
        symptoms: d.en.symptoms,
        causes: d.en.causes,
        treatments: d.en.treatments,
        prevention: d.en.prevention,
        dos: d.en.dos,
        donts: d.en.donts,
        whenToSeeDoctor: d.en.whenToSeeDoctor,
        faqs: d.en.faqs,
        en: d.en,
        or: d.or,
      }));
    }

    try {
      const res = await api.get<ApiResponse<Disease[]>>('/diseases', { params: { query } });
      return res.data.data;
    } catch {
      return [MOCK_DISEASE];
    }
  },
};

// ── Dashboard Service ──
export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    try {
      const res = await api.get<ApiResponse<DashboardStats>>('/dashboard/stats');
      return res.data.data;
    } catch {
      return MOCK_DASHBOARD_STATS;
    }
  },
};

// ── Admin Service ──
export const adminService = {
  getAdminStats: async (): Promise<AdminStats> => {
    try {
      const res = await api.get<ApiResponse<AdminStats>>('/admin/stats');
      return res.data.data;
    } catch {
      return MOCK_ADMIN_STATS;
    }
  },

  getSurveillance: async () => {
    try {
      const res = await api.get('/admin/surveillance');
      return res.data?.data || [];
    } catch {
      return [
        { district: 'Khordha (BBSR)', activeCases: 412, epidemicRisk: 'High', bedOccupancy: '84%', calls24h: 89 },
        { district: 'Cuttack', activeCases: 278, epidemicRisk: 'High', bedOccupancy: '79%', calls24h: 62 },
        { district: 'Ganjam', activeCases: 145, epidemicRisk: 'Moderate', bedOccupancy: '61%', calls24h: 34 },
      ];
    }
  },

  broadcastAlert: async (data: { district: string; alertType: string; message: string; testEmail?: string }) => {
    try {
      const res = await api.post('/admin/broadcast', data);
      return res.data;
    } catch {
      return { success: true, message: 'Broadcast queued locally.' };
    }
  },
};

// ── Authentication & SendGrid Email Service ──
export const authService = {
  login: async (credentials: { email: string; password: string; adminPortal?: boolean }) => {
    try {
      const res = await api.post('/auth/login', credentials);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Login failed. Please check your credentials.');
    }
  },

  register: async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    district?: string;
    language?: string;
    role?: 'citizen' | 'health_officer' | 'admin';
    adminAccessKey?: string;
    designation?: string;
  }) => {
    try {
      const res = await api.post('/auth/register', data);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Registration failed.');
    }
  },

  forgotPassword: async (email: string) => {
    try {
      const res = await api.post('/auth/forgot-password', { email });
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to request password reset OTP.');
    }
  },

  resetPassword: async (data: { email: string; otp: string; newPassword: string }) => {
    try {
      const res = await api.post('/auth/reset-password', data);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Invalid OTP or failed to reset password.');
    }
  },

  verifyOTP: async (email: string, otp: string) => {
    try {
      const res = await api.post('/auth/verify-otp', { email, otp });
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Invalid verification OTP code.');
    }
  },

  verifyMagicLink: async (data: { email: string; token?: string; otp?: string }) => {
    try {
      const res = await api.post('/auth/verify-magic-link', data);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Invalid or expired verification link.');
    }
  },

  resendVerification: async (email: string) => {
    try {
      const res = await api.post('/auth/resend-verification', { email });
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to resend verification email.');
    }
  },
};

// ── Citizen Feedback & Review Service ──
export const feedbackService = {
  submitFeedback: async (data: {
    name: string;
    email: string;
    category: string;
    rating: number;
    message: string;
    userId?: string;
  }) => {
    try {
      const res = await api.post('/feedback', data);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to submit feedback.');
    }
  },

  getFeedbacks: async (params?: { status?: string; category?: string; query?: string }) => {
    try {
      const res = await api.get('/admin/feedbacks', { params });
      return res.data;
    } catch (err: any) {
      // Fallback data if offline
      return {
        success: true,
        stats: { total: 3, avgRating: 4.7, pending: 2, resolved: 1 },
        data: [
          {
            id: 'fb-101',
            name: 'Priyanka Mohanty',
            email: 'priyanka.m@gmail.com',
            category: 'Hospital Services',
            rating: 5,
            message: 'The real-time ICU bed tracking for Capital Hospital Bhubaneswar was very accurate and helped my family quickly during an emergency.',
            status: 'reviewed',
            adminNotes: 'Verified bed tracking accuracy.',
            createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
          },
          {
            id: 'fb-102',
            name: 'Subrat Patnaik',
            email: 'subrat.p@odisha.nic.in',
            category: 'AI Accuracy',
            rating: 4,
            message: 'AI Symptom checker diagnosed early dengue symptoms in Odia language perfectly. Please add more regional Odia terms for seasonal fever.',
            status: 'pending',
            createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
          },
          {
            id: 'fb-103',
            name: 'Ananya Das',
            email: 'ananya.das@live.com',
            category: 'Feature Request',
            rating: 5,
            message: 'Would love to see ABHA Card QR scanner directly on mobile for faster prescription record upload.',
            status: 'pending',
            createdAt: new Date(Date.now() - 24 * 3600000).toISOString(),
          },
        ],
      };
    }
  },

  updateStatus: async (id: string, data: { status?: string; adminNotes?: string }) => {
    try {
      const res = await api.patch(`/admin/feedbacks/${id}`, data);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update feedback status.');
    }
  },
};

// ── Emergency & SOS Service ──
export const emergencyService = {
  sendSOS: async (data: { email: string; name?: string; location?: string; emergencyType?: string }) => {
    try {
      const res = await api.post('/emergency/send-sos', data);
      return res.data;
    } catch {
      return { success: true, message: 'SOS dispatched locally.' };
    }
  },
};


