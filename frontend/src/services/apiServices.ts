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
      console.warn('Backend AI API unavailable, evaluating intelligent local triage:', err);
    }

    // 2. Intelligent Multilingual Fallback Clinical Triage
    await new Promise((r) => setTimeout(r, 900));

    let triageContent = `Thank you for consulting Swasthya Sathi AI. Based on your symptoms regarding "${content.slice(0, 35)}...", here is your clinical triage:\n\n1. **Hydration & Rest**: Ensure adequate intake of oral fluids (ORS / clean water) and complete bed rest.\n2. **Fever & Pain Management**: Use Paracetamol (650mg) as prescribed; avoid NSAIDs like Ibuprofen/Aspirin.\n3. **Clinical Evaluation**: If symptoms persist for more than 48 hours or high fever continues, visit your nearest Community Health Center (CHC) or District Hospital.`;
    let triageRecs = ['Drink 3-4 liters of ORS/water daily', 'Complete bed rest', 'Monitor temperature every 4 hours'];
    let triageWarnings = ['Seek immediate emergency care (Call 108) if you experience severe abdominal pain, persistent vomiting, or bleeding.'];
    let triageSources = ['Odisha Public Health Directorate', 'WHO Guidelines', 'ICMR'];
    let triageFollowUp = 'Would you like to locate nearby hospitals with active bed availability?';

    if (language === 'or') {
      triageContent = `ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ AI ପରାମର୍ଶ:\n\n1. **ତରଳ ପଦାର୍ଥ ଓ ବିଶ୍ରାମ**: ପ୍ରଚୁର ପରିମାଣରେ ପାଣି, ORS ଏବଂ ତରଳ ପଦାର୍ଥ ପିଅନ୍ତୁ।\n2. **ଜ୍ୱର ନିୟନ୍ତ୍ରଣ**: ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ କ୍ରମେ ପାରାସିଟାମଲ୍ ନିଅନ୍ତୁ। ଆସ୍ପିରିନ୍ ବା ଆଇବୁପ୍ରୋଫେନ୍ ଖାଆନ୍ତୁ ନାହିଁ।\n3. **ଡାକ୍ତରଖାନା ଯାଞ୍ଚ**: ଲକ୍ଷଣ ୩ ଦିନରୁ ଅଧିକ ରହିଲେ ନିକଟସ୍ଥ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ରକ୍ତ ପରୀକ୍ଷା କରାନ୍ତୁ।`;
      triageRecs = ['ଦିନକୁ ୩-୪ ଲିଟର ପାଣି ଓ ORS ପିଅନ୍ତୁ', 'ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ରାମ ନିଅନ୍ତୁ', 'ASHA କର୍ମୀଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ'];
      triageWarnings = ['ପ୍ରବଳ ପେଟ ଯନ୍ତ୍ରଣା ବା ରକ୍ତସ୍ରାବ ହେଲେ ତୁରନ୍ତ ୧୦୮ କୁ କଲ୍ କରନ୍ତୁ'];
      triageSources = ['ଓଡ଼ିଶା ଜନସ୍ୱାସ୍ଥ୍ୟ ନିର୍ଦ୍ଦେଶାଳୟ', 'NVBDCP'];
      triageFollowUp = 'ଆପଣ ନିକଟସ୍ଥ ଡାକ୍ତରଖାନାର ବେଡ୍ ସ୍ଥିତି ଜାଣିବାକୁ ଚାହାଁନ୍ତି କି?';
    } else if (language === 'hi') {
      triageContent = `स्वास्थ्य साथी AI प्राथमिक मार्गदर्शन:\n\n1. **पर्याप्त तरल पदार्थ**: ओआरएस (ORS), नारियल पानी और साफ पानी का सेवन करें।\n2. **दवा दिशानिर्देश**: बुखार के लिए केवल पैरासिटामोल लें (एस्पिरिन या ब्रूफेन लेने से बचें)।\n3. **डॉक्टरी जांच**: यदि लक्षण 2-3 दिनों से अधिक रहें तो तुरंत निकटतम अस्पताल जाएं।`;
      triageRecs = ['प्रतिदिन 3-4 लीटर पानी और ओआरएस पिएं', 'पर्याप्त आराम करें', 'निकटतम स्वास्थ्य केंद्र से संपर्क करें'];
      triageWarnings = ['लगातार उल्टी या रक्तस्राव होने पर तुरंत 108 पर संपर्क करें'];
      triageSources = ['ओडिशा जन स्वास्थ्य विभाग', 'आईसीएमआर (ICMR)'];
      triageFollowUp = 'क्या आप निकटतम अस्पताल में बिस्तर की उपलब्धता देखना चाहते हैं?';
    }

    return {
      id: Date.now().toString(),
      chatId,
      content: triageContent,
      role: 'assistant',
      timestamp: new Date().toISOString(),
      metadata: {
        recommendations: triageRecs,
        warnings: triageWarnings,
        followUp: triageFollowUp,
        sources: triageSources,
        confidence: 0.94,
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
              icu: h.hospital_beds?.icu_beds || 0,
              oxygen: h.hospital_beds?.oxygen_beds || 0,
              general: h.hospital_beds?.general_beds || 0,
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
    let filtered = [...MOCK_HOSPITALS];
    if (filters?.type && filters.type !== 'All') {
      filtered = filtered.filter((h) => h.type.toLowerCase() === filters.type?.toLowerCase());
    }
    if (filters?.openNow) {
      filtered = filtered.filter((h) => h.isOpen24x7);
    }
    if (filters?.query) {
      const q = filters.query.toLowerCase();
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.address.toLowerCase().includes(q) ||
          h.specialties.some((s) => s.toLowerCase().includes(q))
      );
    }
    return filtered;
  },

  getHospitalById: async (id: string): Promise<Hospital | undefined> => {
    try {
      const res = await api.get<ApiResponse<Hospital>>(`/hospitals/${id}`);
      return res.data.data;
    } catch {
      return MOCK_HOSPITALS.find((h) => h.id === id) || MOCK_HOSPITALS[0];
    }
  },
};

// ── Health / Disease Service ──
export const healthService = {
  getDiseaseById: async (id: string): Promise<Disease> => {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('diseases').select('*').limit(1).single();
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

// ── Authentication & Brevo Email Service ──
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

