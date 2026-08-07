-- ==============================================================================
-- SWASTHYA SATHI AI — COMPREHENSIVE ODISHA SEED DATA (POSTGRESQL / SUPABASE)
-- ==============================================================================

-- 1. Seed Hospitals
INSERT INTO public.hospitals (id, name, type, address, city, district, state, pincode, phone, lat, lng, rating, review_count, is_verified, is_open_24x7, specialties, services)
VALUES
(
    'a1111111-1111-1111-1111-111111111111',
    'AIIMS Bhubaneswar',
    'Government',
    'Sijua, Patrapada, Bhubaneswar, Odisha 751019',
    'Bhubaneswar',
    'Khordha',
    'Odisha',
    '751019',
    '0674-2476789',
    20.2285,
    85.7824,
    4.8,
    3420,
    true,
    true,
    ARRAY['Emergency Trauma', 'Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'General Medicine'],
    ARRAY['24x7 Emergency', 'ICU / CCU', 'Blood Bank', 'Dialysis Center', 'CT & MRI Scan', 'BSKY Empanelled']
),
(
    'a2222222-2222-2222-2222-222222222222',
    'Capital Hospital (Post Graduate Institute)',
    'Government',
    'Unit 6, Ganga Nagar, Bhubaneswar, Odisha 751001',
    'Bhubaneswar',
    'Khordha',
    'Odisha',
    '751001',
    '0674-2391983',
    20.2662,
    85.8172,
    4.4,
    2150,
    true,
    true,
    ARRAY['General Medicine', 'Maternal & Child Health', 'Orthopedics', 'General Surgery', 'Dialysis'],
    ARRAY['24x7 Emergency', 'Blood Bank', 'Free Niramaya Pharmacy', 'MAMATA Center', 'ICU']
),
(
    'a3333333-3333-3333-3333-333333333333',
    'KIMS Hospital (Kalinga Institute of Medical Sciences)',
    'Private',
    'Kushabhadra Campus, KIIT University, Patia, Bhubaneswar 751024',
    'Bhubaneswar',
    'Khordha',
    'Odisha',
    '751024',
    '0674-7105300',
    20.3541,
    85.8193,
    4.7,
    4890,
    true,
    true,
    ARRAY['Super Specialty Cardiac', 'Neuro Surgery', 'Nephrology', 'Organ Transplant', 'Neonatal ICU'],
    ARRAY['24x7 Trauma Care', 'BSKY Smart Card Accepted', 'Air Ambulance Assist', 'Advanced Diagnostics']
),
(
    'a4444444-4444-4444-4444-444444444444',
    'SCB Medical College & Hospital',
    'Government',
    'Manglabag, Cuttack, Odisha 753007',
    'Cuttack',
    'Cuttack',
    'Odisha',
    '753007',
    '0671-2414080',
    20.4686,
    85.8925,
    4.6,
    5200,
    true,
    true,
    ARRAY['Apex Tertiary Care', 'Cardiothoracic Surgery', 'Hepatology', 'Burn Unit', 'Bone Marrow Transplant'],
    ARRAY['24x7 Emergency', 'State Apex Referral Center', 'Free BSKY Packages', 'Regional Blood Bank']
),
(
    'a5555555-5555-5555-5555-555555555555',
    'District Headquarters Hospital (DHH) Puri',
    'District Headquarters Hospital',
    'Grand Road, Near Gundicha Temple, Puri, Odisha 752001',
    'Puri',
    'Puri',
    'Odisha',
    '752001',
    '06752-222034',
    19.8135,
    85.8312,
    4.2,
    1450,
    true,
    true,
    ARRAY['General Medicine', 'Emergency Medicine', 'Pediatrics', 'Gynecology'],
    ARRAY['24x7 Emergency', 'Free Medicine Counter', 'Ambulance 108 Base', 'ICU']
),
(
    'a6666666-6666-6666-6666-666666666666',
    'MKCG Medical College & Hospital',
    'Government',
    'Medical Road, Brahmapur, Ganjam, Odisha 760004',
    'Berhampur',
    'Ganjam',
    'Odisha',
    '760004',
    '0680-2292746',
    19.3149,
    84.8023,
    4.5,
    3800,
    true,
    true,
    ARRAY['General Surgery', 'Cardiology', 'Vector Borne Disease Unit', 'Pediatrics', 'Radiology'],
    ARRAY['24x7 Emergency', 'BSKY Helpdesk', 'Niramaya Pharmacy', 'ICU / CCU', 'Blood Bank']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Seed Hospital Beds
INSERT INTO public.hospital_beds (hospital_id, icu_beds, oxygen_beds, general_beds)
VALUES
('a1111111-1111-1111-1111-111111111111', 45, 120, 380),
('a2222222-2222-2222-2222-222222222222', 28, 85, 240),
('a3333333-3333-3333-3333-333333333333', 60, 180, 450),
('a4444444-4444-4444-4444-444444444444', 95, 310, 820),
('a5555555-5555-5555-5555-555555555555', 16, 45, 150),
('a6666666-6666-6666-6666-666666666666', 40, 110, 360)
ON CONFLICT (hospital_id) DO NOTHING;

-- 3. Seed Diseases Guide
INSERT INTO public.diseases (name, native_name, category, severity, transmission, overview, symptoms, causes, treatments, prevention, dos, donts, when_to_see_doctor, faqs)
VALUES
(
    'Dengue Fever',
    'ଡେଙ୍ଗୁ ଜ୍ୱର',
    'Vector-Borne Disease',
    'High',
    'Female Aedes mosquito bite (daytime active)',
    'Dengue is an acute viral disease prevalent during and after monsoon in Odisha caused by the DENV flavivirus. Proper hydration and avoiding NSAIDs are critical for patient safety.',
    ARRAY['Sudden high fever (104°F)', 'Severe retro-orbital eye pain', 'Joint and muscle aches (Breakbone)', 'Petechial skin rash', 'Nausea and persistent fatigue'],
    ARRAY['Dengue Virus (DENV 1-4 serotypes)', 'Aedes aegypti breeding in clean standing water', 'Monsoon rain accumulation in containers, tires, and pots'],
    ARRAY['Oral Rehydration Therapy (ORS, coconut water)', 'Paracetamol 650mg for fever control', 'Regular platelet & hematocrit CBC monitoring', 'Hospitalization for IV fluid resuscitation if required'],
    ARRAY['Friday Dry Day cleaning of stored water', 'Use mosquito nets and DEET repellents', 'Wear full sleeve clothing', 'Avoid water accumulation around homes'],
    ARRAY['Drink 3-4 liters of water and ORS fluids daily', 'Take Paracetamol only for temperature control', 'Rest adequately and monitor CBC counts', 'Visit government CHC/DHH if fever exceeds 3 days'],
    ARRAY['DO NOT take Aspirin, Brufen, Combiflam, or Ibuprofen', 'DO NOT self-administer antibiotics', 'DO NOT ignore severe abdominal pain or bleeding gums'],
    ARRAY['Platelets below 50,000/μL', 'Continuous vomiting for >24 hours', 'Bleeding from gums or nose', 'Sudden cold, clammy skin or extreme drowsiness'],
    '[
        {"question": "Can Dengue spread directly from person to person?", "answer": "No, it spreads only through the bite of an infected Aedes mosquito."},
        {"question": "Does papaya leaf extract cure dengue?", "answer": "It is not a medical cure. Proper hydration, CBC monitoring, and hospital care are the primary scientific treatments."}
    ]'::jsonb
),
(
    'Malaria (P. falciparum / P. vivax)',
    'ମ୍ୟାଲେରିଆ',
    'Vector-Borne Disease',
    'High',
    'Female Anopheles mosquito bite (nighttime)',
    'Malaria is a life-threatening protozoan infection transmitted through Anopheles mosquito bites. In Odisha, DAMaN (Durgama Anchalare Malaria Nirakarana) provides free RDT testing and ACT treatment across high endemic districts.',
    ARRAY['High grade fever with severe chills and rigors', 'Profuse sweating upon fever subsiding', 'Severe headache and body ache', 'Enlarged spleen, anemia, and weakness'],
    ARRAY['Plasmodium falciparum and Plasmodium vivax parasites', 'Stagnant muddy water breeding pools in forest and rural terrain'],
    ARRAY['Artemisinin-based Combination Therapy (ACT)', 'Chloroquine / Primaquine as prescribed by medical officer', 'Free rapid diagnostic test (RDT) at nearest Sub-Center/ASHA'],
    ARRAY['Sleep under Long-Lasting Insecticidal Nets (LLIN)', 'Indoor Residual Spraying (IRS) in village homes', 'Clear village drainage channels'],
    ARRAY['Get blood tested immediately at nearest ASHA worker on fever onset', 'Complete the full 3-day ACT course without stopping early', 'Maintain adequate fluid intake'],
    ARRAY['DO NOT skip doses once fever decreases', 'DO NOT delay medical consultation when chills occur'],
    ARRAY['Altered mental state or confusion (Cerebral Malaria risk)', 'Deep jaundice or dark tea-colored urine', 'Breathing difficulty and persistent vomiting'],
    '[
        {"question": "Is Malaria testing free in Odisha?", "answer": "Yes, rapid diagnostic testing and complete ACT medication courses are 100% free across all Odisha government health centers and through ASHA workers."}
    ]'::jsonb
),
(
    'Scrub Typhus',
    'ସ୍କ୍ରବ୍ ଟାଇଫସ୍',
    'Infectious Disease',
    'Moderate',
    'Bite of larval trombiculid mites (chiggers)',
    'Scrub typhus is an acute mite-borne infectious disease caused by Orientia tsutsugamushi, common in rural agricultural belts of Odisha after handling vegetation and soil.',
    ARRAY['High fever with chills', 'Characteristic dark necrotic skin lesion (Eschar)', 'Severe headache and enlarged lymph nodes', 'Dry cough and body ache'],
    ARRAY['Orientia tsutsugamushi bacterium', 'Contact with bush/scrub vegetation containing larval mites'],
    ARRAY['Doxycycline or Azithromycin prescribed by doctor', 'Early clinical diagnosis before multi-organ involvement'],
    ARRAY['Wear boots and full protective clothing when working in fields', 'Apply mite repellent to clothing', 'Clear bushes around living areas'],
    ARRAY['Inspect skin for black cigarette-burn like eschar marks', 'Consult doctor early if high fever occurs after farming work'],
    ARRAY['DO NOT neglect unexplained fever after agricultural tasks', 'DO NOT self-medicate with unprescribed steroids'],
    ARRAY['Breathlessness, decreasing urine output, or bleeding spots on skin'],
    '[]'::jsonb
)
ON CONFLICT (name) DO NOTHING;

-- 4. Seed Essential Medicines
INSERT INTO public.medicines (name, generic_name, category, uses, dosage, side_effects, precautions, niramaya_available, price)
VALUES
(
    'Paracetamol 650mg',
    'Paracetamol / Acetaminophen',
    'Antipyretic & Analgesic',
    'Reduction of high fever and mild to moderate pain relief in viral fevers, dengue, and headache.',
    '1 tablet every 6-8 hours as needed (Max 4g/day for adults)',
    ARRAY['Mild nausea', 'Rare liver enzyme elevation with overdose'],
    ARRAY['Do not exceed maximum daily dosage', 'Avoid alcohol consumption', 'Consult doctor if liver condition exists'],
    true,
    0.00
),
(
    'ORS (Oral Rehydration Salts) WHO Formula',
    'Oral Electrolytes & Glucose',
    'Electrolyte Rehydrator',
    'Prevention and treatment of clinical dehydration from diarrhea, vomiting, fever, or heat exhaustion.',
    'Dissolve 1 full sachet in 1 Litre of clean drinking water; drink periodically.',
    ARRAY['None when prepared in correct proportions'],
    ARRAY['Do not mix with milk or boiling water', 'Use within 24 hours of preparation'],
    true,
    0.00
),
(
    'Azithromycin 500mg',
    'Azithromycin Dihydrate',
    'Macrolide Antibiotic',
    'Treatment of bacterial respiratory tract infections, ear infections, and scrub typhus under prescription.',
    '1 tablet daily 1 hour before or 2 hours after meals for 3-5 days',
    ARRAY['Diarrhea', 'Abdominal cramps', 'Mild nausea'],
    ARRAY['Complete the full prescribed course', 'Do not take with antacids containing aluminum or magnesium'],
    true,
    0.00
),
(
    'Cetirizine 10mg',
    'Cetirizine Hydrochloride',
    'Antihistamine',
    'Relief of allergy symptoms like runny nose, itching, insect bite reactions, and hives.',
    '1 tablet once daily at bedtime',
    ARRAY['Mild drowsiness', 'Dry mouth'],
    ARRAY['Avoid driving or operating machinery if experiencing drowsiness'],
    true,
    0.00
)
ON CONFLICT DO NOTHING;

-- 5. Seed Government Health Schemes
INSERT INTO public.schemes (title, native_title, description, coverage, eligibility, benefits, documents_required, application_process, official_portal, helpline)
VALUES
(
    'Biju Swasthya Kalyan Yojana (BSKY) / BSKY Naveen Card',
    'ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନା (BSKY)',
    'Flagship universal health assurance scheme of Government of Odisha providing cashless medical treatment up to secondary and tertiary levels.',
    '₹5 Lakh per family annually, and up to ₹10 Lakh for female family members',
    ARRAY['All rural and urban families possessing BSKY Smart Card or Ration Card in Odisha', 'Families with annual income below prescribed rural/urban thresholds'],
    ARRAY['100% cashless hospitalization at 800+ empanelled government and private premier hospitals across India', 'Covers medicines, diagnostics, ICU charges, surgeries, and post-op care', 'No need for prior paper authorizations for emergencies'],
    ARRAY['BSKY Smart Health Card or NFSA/SFSS Ration Card', 'Aadhaar Card of patient and family head', 'Doctor referral note for tertiary specialty hospitals'],
    'Present the BSKY Card or Aadhaar at the Swasthya Mitra Helpdesk situated at any empanelled hospital.',
    'https://bsky.odisha.gov.in',
    '104 / 155369'
),
(
    'MAMATA Scheme',
    'ମମତା ଯୋଜନା',
    'Conditional cash transfer maternity benefit scheme by Women & Child Development Department, Govt of Odisha to reduce maternal and infant mortality.',
    '₹5,000 direct bank transfer in multiple installments',
    ARRAY['All pregnant women of age 19 years or above in Odisha (except government employees)', 'Applicable for first two live births'],
    ARRAY['Direct cash transfer into pregnant mother bank account', 'Promotes institutional delivery, antenatal checkups (ANC), and full child immunization'],
    ARRAY['MCP Card (Mother & Child Protection Card)', 'Aadhaar Card of pregnant woman', 'Active Savings Bank Account with Aadhaar linking'],
    'Register pregnancy at nearest Anganwadi Center (AWC) within 4 months of conception.',
    'https://wcd.odisha.gov.in/schemes/mamata',
    '181 (Women Helpline)'
),
(
    'Niramaya Scheme (Free Medicine for All)',
    'ନିରାମୟ ଯୋଜନା',
    'Universal free medicine distribution scheme providing over 570+ essential medicines, surgical consumables, and anti-cancer drugs across all government hospitals.',
    '100% Free Medicines and Surgical Consumables',
    ARRAY['All citizens seeking OPD or IPD treatment at any Government Hospital (DHH, SDH, CHC, PHC, Medical Colleges) in Odisha'],
    ARRAY['Free generic drugs stamped with "Odisha Govt Supply - Not for Sale"', 'Available 24x7 at dedicated Niramaya counters in hospitals'],
    ARRAY['Doctor Prescription from government health facility'],
    'Show the OPD ticket/prescription at the Niramaya counter inside the hospital premises.',
    'https://health.odisha.gov.in',
    '104'
)
ON CONFLICT (title) DO NOTHING;

-- 6. Seed Odisha District Health Surveillance
INSERT INTO public.district_surveillance (district_name, active_cases, epidemic_risk, hospital_bed_occupancy, ambulance_calls_24h)
VALUES
('Khordha (BBSR)', 412, 'High', 84, 89),
('Cuttack', 278, 'High', 79, 62),
('Ganjam', 145, 'Moderate', 61, 34),
('Sambalpur', 98, 'Low', 52, 18),
('Puri', 112, 'Moderate', 58, 26),
('Mayurbhanj', 64, 'Low', 44, 14),
('Sundargarh (Rourkela)', 180, 'Moderate', 68, 41),
('Balasore', 120, 'Moderate', 55, 22),
('Koraput', 85, 'Low', 48, 19)
ON CONFLICT (district_name) DO UPDATE SET
    active_cases = EXCLUDED.active_cases,
    epidemic_risk = EXCLUDED.epidemic_risk,
    hospital_bed_occupancy = EXCLUDED.hospital_bed_occupancy,
    ambulance_calls_24h = EXCLUDED.ambulance_calls_24h;

-- 7. Seed Disease Trends (Outbreak curves)
INSERT INTO public.disease_trends (month, year, dengue_cases, malaria_cases, diarrhoea_cases)
VALUES
('Apr', 2026, 45, 120, 85),
('May', 2026, 80, 160, 140),
('Jun', 2026, 210, 195, 165),
('Jul', 2026, 390, 180, 175),
('Aug', 2026, 520, 160, 185)
ON CONFLICT (month, year) DO UPDATE SET
    dengue_cases = EXCLUDED.dengue_cases,
    malaria_cases = EXCLUDED.malaria_cases,
    diarrhoea_cases = EXCLUDED.diarrhoea_cases;
