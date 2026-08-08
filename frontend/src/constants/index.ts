// ============================================
// Swasthya Sathi AI — Application Constants & Mock Data
// ============================================

import type {
  Hospital,
  Disease,
  DashboardStats,
  SavedItem,
  HealthReminder,
  HealthTip,
  AdminStats,
  EmergencyRequest,
  SystemHealthService,
  QueryCategory,
  LanguageUsage,
  NavItem,
  Chat,
  Message,
  User,
} from '../types';

// ── Supported Languages ──
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'or', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' },
] as const;

// ── Navigation Items ──
export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', path: '/', icon: 'Home' },
  { label: 'nav.chat', path: '/chat', icon: 'MessageSquare', badge: 'AI', badgeColor: 'var(--primary)' },
  { label: 'nav.hospitals', path: '/hospitals', icon: 'Hospital' },
  { label: 'nav.healthHub', path: '/health-hub', icon: 'BookOpen' },
  { label: 'nav.medicines', path: '/medicines', icon: 'Pill' },
  { label: 'nav.schemes', path: '/schemes', icon: 'Landmark' },
  { label: 'nav.records', path: '/records', icon: 'FileText' },
  { label: 'nav.emergency', path: '/emergency', icon: 'PhoneCall', isAlert: true },
  { label: 'nav.dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'nav.voice', path: '/voice', icon: 'Mic' },
  { label: 'nav.admin', path: '/admin', icon: 'ShieldAlert' },
];

export const APP_NAV_ITEMS = NAV_ITEMS;

export const PUBLIC_NAV_LINKS = [
  { label: 'nav.home', path: '/', href: '/' },
  { label: 'nav.chat', path: '/chat', href: '/chat' },
  { label: 'nav.hospitals', path: '/hospitals', href: '/hospitals' },
  { label: 'nav.healthHub', path: '/health-hub', href: '/health-hub' },
  { label: 'nav.schemes', path: '/schemes', href: '/schemes' },
  { label: 'nav.emergency', path: '/emergency', href: '/emergency' },
];

// ── Chat Suggestion Prompts ──
export const CHAT_PROMPTS = [
  'ମୋ ମୁଣ୍ଡ ବିନ୍ଧୁଛି ଓ ଜ୍ୱର ଅଛି, କଣ କରିବି?',
  'What are early symptoms of Dengue?',
  'बुखार में कौन सी दवाई लेनी चाहिए?',
  'Find nearest government hospital in Bhubaneswar',
  'What is BSKY health card eligibility in Odisha?',
  'How to prepare ORS at home?',
];

// ── Landing Page Stats ──
export const LANDING_STATS = [
  { value: '500K+', label: 'Citizens Assisted', icon: 'Users' },
  { value: '1,200+', label: 'Hospitals Listed', icon: 'Hospital' },
  { value: '3', label: 'Languages (Odia, Hindi, Eng)', icon: 'Globe' },
  { value: '24/7', label: 'AI Health Triage', icon: 'Clock' },
];

// ── Testimonials ──
export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Debasis Pattnaik',
    role: 'Teacher, Cuttack',
    avatar: '👨‍🏫',
    rating: 5,
    comment: 'ଓଡ଼ିଆ ଭାଷାରେ ଏତେ ସହଜରେ ସ୍ୱାସ୍ଥ୍ୟ ପରାମର୍ଶ ମିଳିବା ମୋ ପରିବାର ପାଇଁ ବହୁତ ଲାଭଦାୟକ ହୋଇଛି | BSKY ସୂଚନା ମଧ୍ୟ ଖୁବ୍ ସ୍ପଷ୍ଟ |',
    lang: 'or',
  },
  {
    id: '2',
    name: 'Sunita Das',
    role: 'Homemaker, Bhubaneswar',
    avatar: '👩',
    rating: 5,
    comment: 'When my child had high fever at midnight, the AI bot helped me check red flag symptoms and guided us immediately to Capital Hospital.',
    lang: 'en',
  },
  {
    id: '3',
    name: 'Manoj Sahoo',
    role: 'Farmer, Puri District',
    avatar: '👨‍🌾',
    rating: 5,
    comment: 'आवाज से बोलकर अपनी भाषा में बात करना बहुत आसान है। 108 एम्बुलेंस और अस्पताल की जानकारी तुरंत मिल गई।',
    lang: 'hi',
  },
];

// ── Mock User ──
export const MOCK_USER: User = {
  id: '1',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98765 43210',
  location: 'Bhubaneswar, Odisha',
  language: 'or',
  role: 'citizen',
  isVerified: true,
  memberSince: '2024',
  accountType: 'Free',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ── Mock Initial Chats ──
export const MOCK_CHATS: Chat[] = [
  {
    id: '1',
    title: 'Dengue Symptoms & Precaution',
    preview: 'High fever and joint pain guidelines...',
    timestamp: new Date().toISOString(),
    isPinned: true,
    messageCount: 4,
    language: 'en',
  },
  {
    id: '2',
    title: 'ଜ୍ୱର ଓ ଥଣ୍ଡା ଘରୋଇ ଉପଚାର',
    preview: 'ମୋତେ ୨ ଦିନ ହେଲା ପ୍ରବଳ ଜ୍ୱର...',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    isPinned: false,
    messageCount: 2,
    language: 'or',
  },
  {
    id: '3',
    title: 'BSKY Hospital Empanelment',
    preview: 'Eligibility check for cashless treatment...',
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    isPinned: false,
    messageCount: 3,
    language: 'en',
  },
];

// ── Mock Messages ──
export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    chatId: '1',
    content: 'Hello, I have high fever (102°F) and severe joint pain for the last 2 days. What should I do?',
    role: 'user',
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    chatId: '1',
    content: 'Based on your symptoms (high fever + joint pain), these may be early clinical indicators of viral infection or vector-borne illness such as Dengue or Chikungunya.\n\n**Immediate Recommendations:**\n1. Take Paracetamol (650mg) for fever reduction (avoid Aspirin/Ibuprofen).\n2. Maintain aggressive hydration with ORS, tender coconut water, and clean fluids.\n3. Monitor for warning signs like persistent vomiting or bleeding.\n4. Get a Complete Blood Count (CBC) and NS1 antigen test at your nearest government health facility.',
    role: 'assistant',
    timestamp: new Date(Date.now() - 29 * 60 * 1000).toISOString(),
    metadata: {
      confidence: 0.94,
      recommendations: [
        'Drink at least 3-4 Litres of fluids daily with ORS',
        'Take Paracetamol only for fever; strictly avoid NSAIDs like Ibuprofen',
        'Rest adequately and avoid strenuous physical activity',
      ],
      warnings: [
        'Persistent severe abdominal pain',
        'Bleeding from gums or nose',
        'Continuous vomiting or inability to keep fluids down',
        'Extreme lethargy, confusion, or cold/clammy skin',
      ],
      followUp: 'Would you like to find the nearest hospital with 24x7 blood testing facilities?',
      sources: ['Odisha Directorate of Public Health', 'NVBDCP National Guidelines', 'WHO Dengue Protocol'],
    },
  },
];

// ── Mock Hospitals ──
export const MOCK_HOSPITALS: Hospital[] = [
  {
    id: '1',
    name: 'AIIMS Bhubaneswar',
    type: 'Government',
    address: 'Sijua, Patrapada, Bhubaneswar, Odisha 751019',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '751019',
    phone: '0674-2476789',
    coordinates: { lat: 20.2285, lng: 85.7824 },
    rating: 4.8,
    reviewCount: 3420,
    distance: 3.2,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Emergency Trauma', 'Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'General Medicine'],
    services: ['24x7 Emergency', 'ICU / CCU', 'Blood Bank', 'Dialysis Center', 'CT & MRI Scan', 'BSKY Empanelled'],
    beds: { icu: 45, oxygen: 120, general: 380 },
  },
  {
    id: '2',
    name: 'Capital Hospital (Post Graduate Institute)',
    type: 'Government',
    address: 'Unit 6, Ganga Nagar, Bhubaneswar, Odisha 751001',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '751001',
    phone: '0674-2391983',
    coordinates: { lat: 20.2662, lng: 85.8172 },
    rating: 4.4,
    reviewCount: 2150,
    distance: 1.8,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['General Medicine', 'Maternal & Child Health', 'Orthopedics', 'General Surgery', 'Dialysis'],
    services: ['24x7 Emergency', 'Blood Bank', 'Free Niramaya Pharmacy', 'MAMATA Center', 'ICU'],
    beds: { icu: 28, oxygen: 85, general: 240 },
  },
  {
    id: '3',
    name: 'KIMS Hospital (Kalinga Institute of Medical Sciences)',
    type: 'Private',
    address: 'Kushabhadra Campus, KIIT University, Patia, Bhubaneswar 751024',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '751024',
    phone: '0674-7105300',
    coordinates: { lat: 20.3541, lng: 85.8193 },
    rating: 4.7,
    reviewCount: 4890,
    distance: 7.5,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Super Specialty Cardiac', 'Neuro Surgery', 'Nephrology', 'Organ Transplant', 'Neonatal ICU'],
    services: ['24x7 Trauma Care', 'BSKY Smart Card Accepted', 'Air Ambulance Assist', 'Advanced Diagnostics'],
    beds: { icu: 60, oxygen: 180, general: 450 },
  },
  {
    id: '4',
    name: 'SCB Medical College & Hospital',
    type: 'Government',
    address: 'Manglabag, Cuttack, Odisha 753007',
    city: 'Cuttack',
    state: 'Odisha',
    pincode: '753007',
    phone: '0671-2414080',
    coordinates: { lat: 20.4686, lng: 85.8925 },
    rating: 4.6,
    reviewCount: 5200,
    distance: 26.0,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Apex Tertiary Care', 'Cardiothoracic Surgery', 'Hepatology', 'Burn Unit', 'Bone Marrow Transplant'],
    services: ['24x7 Emergency', 'State Apex Referral Center', 'Free BSKY Packages', 'Regional Blood Bank'],
    beds: { icu: 95, oxygen: 310, general: 820 },
  },
];

// ── Mock Disease Details ──
export const MOCK_DISEASE: Disease = {
  id: '1',
  name: 'Dengue Fever',
  nativeName: 'ଡେଙ୍ଗୁ ଜ୍ୱର',
  category: 'Vector-Borne Disease',
  severity: 'High',
  transmission: 'Female Aedes mosquito bite (daytime)',
  overview: 'Dengue is a viral infection caused by the dengue virus (DENV) and transmitted to humans through the bites of infected Aedes aegypti mosquitoes. In Odisha, peak transmission occurs during the monsoon season (July to November).',
  symptoms: [
    'Sudden high fever (up to 104°F / 40°C)',
    'Severe retro-orbital pain (pain behind the eyes)',
    'Severe headache and joint / muscle pain (Breakbone fever)',
    'Maculopapular skin rash appearing 2-5 days after fever onset',
    'Mild bleeding manifestations (petechiae, bleeding gums, nosebleeds)',
    'Nausea, vomiting, and extreme fatigue',
  ],
  causes: [
    'Infection by any of the four serotypes of Dengue Virus (DENV-1 to DENV-4).',
    'Daytime bites by infected Aedes aegypti or Aedes albopictus mosquitoes.',
    'Stagnant rainwater in flowerpots, tires, construction sites, and open water tanks.',
  ],
  treatments: [
    'Supportive hydration therapy: oral rehydration solutions (ORS), tender coconut water, clear broths.',
    'Antipyretic therapy with Paracetamol (650mg for adults every 6-8 hrs). Do NOT use Ibuprofen, Aspirin, or Diclofenac as they elevate bleeding risk.',
    'Frequent Complete Blood Count (CBC) monitoring to track platelet count and hematocrit levels.',
    'Hospitalization and IV fluid management if hematocrit rises by >20% or platelets fall below 50,000/μL.',
  ],
  prevention: [
    'Eliminate artificial water collections weekly (Friday Dry Day initiative).',
    'Apply DEET or Picaridin mosquito repellents on exposed skin.',
    'Wear long-sleeved clothing and full pants during morning and late afternoon.',
    'Sleep under insecticide-treated bed nets even during daytime naps.',
  ],
  dos: [
    'Drink 3-4 Litres of water and electrolyte fluids daily',
    'Take Paracetamol for fever management as advised by a doctor',
    'Rest strictly in bed during the acute phase',
    'Get platelet counts checked daily if fever persists beyond 3 days',
  ],
  donts: [
    'DO NOT consume Aspirin, Brufen, Combiflam, or NSAIDs',
    'DO NOT self-administer antibiotics (Dengue is a viral infection)',
    'DO NOT ignore vomiting, severe stomach pain, or black stools',
    'DO NOT allow stagnant water to accumulate in pots or coolers',
  ],
  whenToSeeDoctor: [
    'Platelet count dropping below 50,000/μL',
    'Severe, persistent abdominal pain or tenderness',
    'Persistent vomiting (more than 3 times in 24 hours)',
    'Bleeding from nose, gums, or blood in vomit / stools',
    'Extreme restlessness, lethargy, or confusion',
    'Sudden drop in body temperature with cold, clammy skin',
  ],
  faqs: [
    {
      question: 'Is Dengue contagious from person to person?',
      answer: 'No. Dengue cannot spread directly from human to human through touch or saliva. It can only spread when a mosquito bites an infected person and then bites a healthy individual.',
    },
    {
      question: 'Does papaya leaf extract or goat milk cure Dengue?',
      answer: 'While small studies suggest papaya leaf extract may help platelet recovery, it is NOT a cure. Medical hydration, monitoring hematocrit, and clinical supervision are the only scientifically proven treatments.',
    },
    {
      question: 'Can you get Dengue more than once?',
      answer: 'Yes. There are 4 distinct viral serotypes. Infection with one serotype grants lifelong immunity only against that specific type, but increases the risk of Severe Dengue if infected by a different serotype later.',
    },
  ],
};

// ── Mock Dashboard Stats ──
export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalChats: 14,
  savedItems: 6,
  healthScore: 88,
  activeReminders: 2,
  reminders: [
    { id: '1', title: 'ORS & Hydration Goal (2L)', time: '02:00 PM', type: 'hydration', frequency: 'Daily', isCompleted: false },
    { id: '2', title: 'Paracetamol 650mg (Post Lunch)', time: '02:30 PM', type: 'medication', frequency: 'Post Meal', isCompleted: false },
    { id: '3', title: 'Morning BP & Pulse Check', time: '08:00 AM', type: 'vitals', frequency: 'Daily', isCompleted: true },
  ],
  recentActivity: [
    { id: '1', title: 'Dengue Symptom Evaluation', description: 'AI triage identified low-risk viral fever; recommended hydration and CBC test.', timestamp: new Date(Date.now() - 3600000).toISOString(), type: 'chat' },
    { id: '2', title: 'Hospital Search: Bhubaneswar', description: 'Viewed AIIMS Bhubaneswar and Capital Hospital emergency availability.', timestamp: new Date(Date.now() - 86400000).toISOString(), type: 'hospital_search' },
    { id: '3', title: 'BSKY Smart Card Verification', description: 'Checked ₹5 Lakh coverage eligibility and empanelled hospital list.', timestamp: new Date(Date.now() - 172800000).toISOString(), type: 'scheme_view' },
  ],
};

// ── Mock Admin Stats ──
export const MOCK_ADMIN_STATS: AdminStats = {
  totalUsers: 24532,
  totalChats: 78154,
  aiQueriesToday: 5812,
  hospitalsListed: 1248,
  emergencyRequests: 312,
  satisfactionScore: 4.7,
  trends: {
    users: 12.5,
    chats: 18.3,
    queries: 22.1,
    hospitals: 7.8,
    emergency: 4.2,
    satisfaction: 3.6,
  },
};

// ── Health Tips Carousel Data ──
export const MOCK_HEALTH_TIPS: HealthTip[] = [
  {
    id: '1',
    title: 'Monsoon Mosquito Prevention (Odisha)',
    content: 'Empty coolers, flowerpot trays, and coconut shells every Sunday to destroy Aedes mosquito larvae before they hatch.',
    category: 'Seasonal Health',
    source: 'Odisha Public Health Directorate',
  },
  {
    id: '2',
    title: 'Immediate First Aid for Snake Bite',
    content: 'Do NOT apply a tight tourniquet. Keep the patient calm, immobilize the bitten limb below heart level, and rush to CHC/DHH for ASV.',
    category: 'Emergency Protocol',
    source: 'WHO SEARO Guidelines',
  },
  {
    id: '3',
    title: 'Clean Water & Diarrhea Control',
    content: 'Always drink boiled or chlorine-treated water during flood and monsoon months to prevent cholera and acute gastroenteritis.',
    category: 'Water Sanitation',
    source: 'ICMR Guidelines',
  },
];
