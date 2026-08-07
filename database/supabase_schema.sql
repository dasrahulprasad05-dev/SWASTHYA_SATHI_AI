-- ==============================================================================
-- SWASTHYA SATHI AI — SUPABASE POSTGRESQL DATABASE SCHEMA
-- ==============================================================================

-- 1. Enable Required PostgreSQL Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. User Profiles Table (Linked to Supabase Auth)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    phone TEXT,
    location TEXT DEFAULT 'Odisha, India',
    language TEXT DEFAULT 'or' CHECK (language IN ('en', 'hi', 'or')),
    role TEXT DEFAULT 'citizen' CHECK (role IN ('citizen', 'doctor', 'health_worker', 'admin')),
    abha_id TEXT,
    emergency_contacts JSONB DEFAULT '[]'::jsonb,
    is_verified BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 3. AI Health Chats & Multi-turn Message History
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.chats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL DEFAULT 'New Health Consultation',
    preview TEXT,
    language TEXT DEFAULT 'en' CHECK (language IN ('en', 'hi', 'or')),
    is_pinned BOOLEAN DEFAULT false,
    message_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id UUID NOT NULL REFERENCES public.chats(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb, -- { confidence, recommendations: [], warnings: [], sources: [], followUp }
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 4. Hospitals & Live Bed Tracking
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.hospitals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Government', 'Private', 'Community Health Center', 'District Headquarters Hospital')),
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    district TEXT NOT NULL,
    state TEXT DEFAULT 'Odisha',
    pincode TEXT,
    phone TEXT NOT NULL,
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL,
    rating NUMERIC(2,1) DEFAULT 4.5,
    review_count INT DEFAULT 100,
    is_verified BOOLEAN DEFAULT true,
    is_open_24x7 BOOLEAN DEFAULT true,
    specialties TEXT[] DEFAULT '{}',
    services TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.hospital_beds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID NOT NULL REFERENCES public.hospitals(id) ON DELETE CASCADE UNIQUE,
    icu_beds INT DEFAULT 0,
    oxygen_beds INT DEFAULT 0,
    general_beds INT DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 5. Disease Information & Clinical Guides
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.diseases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    native_name TEXT,
    category TEXT NOT NULL, -- e.g. 'Vector-Borne Disease', 'Water-Borne Disease', 'Seasonal'
    severity TEXT NOT NULL CHECK (severity IN ('Low', 'Moderate', 'High', 'Critical')),
    transmission TEXT,
    overview TEXT NOT NULL,
    symptoms TEXT[] DEFAULT '{}',
    causes TEXT[] DEFAULT '{}',
    treatments TEXT[] DEFAULT '{}',
    prevention TEXT[] DEFAULT '{}',
    dos TEXT[] DEFAULT '{}',
    donts TEXT[] DEFAULT '{}',
    when_to_see_doctor TEXT[] DEFAULT '{}',
    faqs JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 6. Medicine Guide & Generic Alternatives
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.medicines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    generic_name TEXT NOT NULL,
    category TEXT NOT NULL,
    uses TEXT NOT NULL,
    dosage TEXT,
    side_effects TEXT[] DEFAULT '{}',
    precautions TEXT[] DEFAULT '{}',
    niramaya_available BOOLEAN DEFAULT true,
    price NUMERIC(8,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 7. Government Health Schemes
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.schemes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL UNIQUE,
    native_title TEXT,
    description TEXT NOT NULL,
    coverage TEXT NOT NULL,
    eligibility TEXT[] DEFAULT '{}',
    benefits TEXT[] DEFAULT '{}',
    documents_required TEXT[] DEFAULT '{}',
    application_process TEXT NOT NULL,
    official_portal TEXT,
    helpline TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 8. Digital Health Records (ABHA Locker)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.health_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Prescription', 'Lab Report', 'Vaccination', 'Discharge Summary', 'Other')),
    doctor_name TEXT,
    hospital_name TEXT,
    file_url TEXT,
    record_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 9. Health Reminders & Medication Schedule
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.reminders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    time TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('medication', 'hydration', 'vitals', 'appointment', 'general')),
    frequency TEXT DEFAULT 'Daily',
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 10. Emergency Requests (108 SOS Dispatch)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.emergency_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    severity TEXT NOT NULL CHECK (severity IN ('High', 'Medium', 'Low')),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Dispatched', 'Pending', 'Resolved')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- 11. Public Health Surveillance & Disease Trends (Odisha Admin)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.district_surveillance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    district_name TEXT NOT NULL UNIQUE,
    active_cases INT DEFAULT 0,
    epidemic_risk TEXT DEFAULT 'Low' CHECK (epidemic_risk IN ('Low', 'Moderate', 'High', 'Severe')),
    hospital_bed_occupancy INT DEFAULT 50,
    ambulance_calls_24h INT DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.disease_trends (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    month TEXT NOT NULL,
    year INT NOT NULL,
    dengue_cases INT DEFAULT 0,
    malaria_cases INT DEFAULT 0,
    diarrhoea_cases INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(month, year)
);

-- ==============================================================================
-- 12. Row Level Security (RLS) Policies
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hospital_beds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diseases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medicines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.district_surveillance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.disease_trends ENABLE ROW LEVEL SECURITY;

-- 12.1 Public Read Tables (Hospitals, Diseases, Medicines, Schemes, Surveillance, Trends)
CREATE POLICY "Public can view hospitals" ON public.hospitals FOR SELECT USING (true);
CREATE POLICY "Public can view hospital beds" ON public.hospital_beds FOR SELECT USING (true);
CREATE POLICY "Public can view diseases" ON public.diseases FOR SELECT USING (true);
CREATE POLICY "Public can view medicines" ON public.medicines FOR SELECT USING (true);
CREATE POLICY "Public can view schemes" ON public.schemes FOR SELECT USING (true);
CREATE POLICY "Public can view district surveillance" ON public.district_surveillance FOR SELECT USING (true);
CREATE POLICY "Public can view disease trends" ON public.disease_trends FOR SELECT USING (true);

-- 12.2 User Profile Isolation
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- 12.3 Chats & Messages Isolation
CREATE POLICY "Users can view own chats" ON public.chats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own chats" ON public.chats FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own chats" ON public.chats FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own chats" ON public.chats FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view messages of own chats" ON public.messages FOR SELECT 
    USING (EXISTS (SELECT 1 FROM public.chats WHERE chats.id = messages.chat_id AND chats.user_id = auth.uid()));
CREATE POLICY "Users can insert messages into own chats" ON public.messages FOR INSERT 
    WITH CHECK (EXISTS (SELECT 1 FROM public.chats WHERE chats.id = messages.chat_id AND chats.user_id = auth.uid()));

-- 12.4 Health Records & Reminders Isolation
CREATE POLICY "Users can manage own health records" ON public.health_records FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own reminders" ON public.reminders FOR ALL USING (auth.uid() = user_id);

-- 12.5 Emergency Requests (Anyone can create SOS, Admins/Auth can view)
CREATE POLICY "Anyone can create emergency request" ON public.emergency_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can view emergency requests" ON public.emergency_requests FOR SELECT USING (true);

-- ==============================================================================
-- 13. Automatic Trigger for New User Profile on Supabase Signup
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, phone, location, language, role)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'name', 'Citizen User'),
    new.email,
    new.phone,
    'Odisha, India',
    'or',
    'citizen'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
