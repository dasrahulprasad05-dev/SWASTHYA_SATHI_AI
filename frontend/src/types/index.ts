// ============================================
// Swasthya Sathi AI — TypeScript Interfaces
// ============================================

// ── User & Auth ──
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  location?: string;
  language: 'en' | 'hi' | 'or';
  role: 'user' | 'admin' | 'super_admin';
  isVerified: boolean;
  memberSince: string;
  accountType: 'Free' | 'Premium';
  healthProfile?: HealthProfile;
  createdAt: string;
  updatedAt: string;
}

export interface HealthProfile {
  bmi?: number;
  weight?: number;
  height?: number;
  bloodGroup?: string;
  allergies?: string[];
  conditions?: string[];
  lastUpdated?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  language: string;
}

// ── Chat ──
export interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  preview?: string;
  timestamp: string;
  isPinned?: boolean;
  messageCount: number;
  language?: 'en' | 'hi' | 'or';
}

export interface Message {
  id: string;
  chatId: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  diagnosis?: string;
  recommendations?: string[];
  warnings?: string[];
  followUp?: string;
  sources?: string[];
  confidence?: number;
}

export interface ChatGroup {
  label: string;
  chats: Chat[];
}

// ── Hospital ──
export interface Hospital {
  id: string;
  name: string;
  type: 'Government' | 'Private' | 'NGO' | 'Clinic';
  address: string;
  city?: string;
  state?: string;
  pincode?: string;
  phone: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount?: number;
  distance?: number;
  isVerified: boolean;
  isOpen24x7: boolean;
  services?: string[] | HospitalService[];
  specialties: string[];
  images?: string[];
  timings?: HospitalTiming[];
  beds?: {
    icu: number;
    oxygen: number;
    general: number;
  };
}

export interface HospitalService {
  name: string;
  icon: string;
  available: boolean;
}

export interface HospitalTiming {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
}

export type HospitalFilterType = 'specialty' | 'type' | 'distance' | 'openNow';

export interface HospitalFilters {
  specialty?: string;
  type?: 'All' | 'Government' | 'Private' | string;
  distance?: number;
  openNow?: boolean;
  query?: string;
}

// ── Disease / Health ──
export interface Disease {
  id: string;
  name: string;
  nativeName?: string;
  description?: string;
  overview: string;
  category: string;
  severity: 'Emergency' | 'High' | 'Moderate' | 'Mild';
  transmission?: string;
  commonIn?: string;
  isContagious?: boolean;
  illustration?: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  prevention: string[];
  preventions?: string[];
  spreadSteps?: SpreadStep[];
  dos: string[];
  donts: string[];
  doAndDonts?: {
    dos: string[];
    donts: string[];
  };
  whenToSeeDoctor?: string[];
  faqs: FAQ[];
  isVerified?: boolean;
}

export interface Symptom {
  name: string;
  icon: string;
  color: string;
}

export interface SpreadStep {
  title: string;
  description: string;
  illustration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  category: string;
  dosage: string;
  sideEffects?: string[];
  interactions?: string[];
  precautions?: string[];
  image?: string;
}

export interface HealthTip {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  source: string;
}

// ── Government Schemes ──
export interface GovernmentScheme {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  category: string;
  state: 'Odisha' | 'Central' | 'Both';
  applicationUrl?: string;
  deadline?: string;
  documents: string[];
  image?: string;
}

// ── Dashboard ──
export interface DashboardStats {
  totalChats: number;
  healthInsights?: number;
  savedItems: number;
  reminders: HealthReminder[];
  activeReminders: number;
  healthScore: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'chat' | 'hospital_search' | 'scheme_view' | 'reminder';
}

export interface SavedItem {
  id: string;
  title: string;
  type: 'health_tip' | 'hospital' | 'medicine' | 'scheme';
  thumbnail?: string;
  savedAt: string;
}

export interface HealthReminder {
  id: string;
  title: string;
  time: string;
  type: string;
  frequency: string;
  icon?: string;
  isCompleted: boolean;
}

// ── Notifications ──
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  isRead: boolean;
  createdAt: string;
}

// ── Admin ──
export interface AdminStats {
  totalUsers: number;
  totalChats: number;
  aiQueriesToday: number;
  hospitalsListed: number;
  emergencyRequests: number;
  satisfactionScore: number;
  trends: {
    users: number;
    chats: number;
    queries: number;
    hospitals: number;
    emergency: number;
    satisfaction: number;
  };
}

export interface EmergencyRequest {
  id: string;
  title: string;
  location: string;
  severity: 'High' | 'Medium' | 'Low';
  timeAgo: string;
  status: 'Active' | 'Resolved' | 'Pending';
}

export interface SystemHealthService {
  name: string;
  status: 'Operational' | 'Degraded' | 'Down';
}

export interface QueryCategory {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export interface LanguageUsage {
  language: string;
  percentage: number;
  color: string;
}

// ── Voice ──
export type VoiceState = 'idle' | 'listening' | 'processing' | 'responding';

export interface VoiceTranscript {
  role: 'user' | 'assistant';
  text: string;
  translation?: string;
  language: string;
  timestamp: string;
}

// ── Navigation ──
export interface NavItem {
  label: string;
  path: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
  isAlert?: boolean;
}

// ── API Response ──
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ── Theme ──
export type Theme = 'light' | 'dark';
export type Language = 'en' | 'hi' | 'or';
