import { Request, Response } from 'express';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

const MOCK_HOSPITALS_FALLBACK = [
  {
    id: 'a1111111-1111-1111-1111-111111111111',
    name: 'AIIMS Bhubaneswar',
    type: 'Government',
    address: 'Sijua, Patrapada, Bhubaneswar, Odisha 751019',
    city: 'Bhubaneswar',
    district: 'Khordha',
    state: 'Odisha',
    pincode: '751019',
    phone: '0674-2476789',
    lat: 20.2285,
    lng: 85.7824,
    rating: 4.8,
    reviewCount: 3420,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Emergency Trauma', 'Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'General Medicine'],
    services: ['24x7 Emergency', 'ICU / CCU', 'Blood Bank', 'Dialysis Center', 'CT & MRI Scan', 'BSKY Empanelled'],
    beds: { icu: 45, oxygen: 120, general: 380 },
  },
  {
    id: 'a2222222-2222-2222-2222-222222222222',
    name: 'Capital Hospital (Post Graduate Institute)',
    type: 'Government',
    address: 'Unit 6, Ganga Nagar, Bhubaneswar, Odisha 751001',
    city: 'Bhubaneswar',
    district: 'Khordha',
    state: 'Odisha',
    pincode: '751001',
    phone: '0674-2391983',
    lat: 20.2662,
    lng: 85.8172,
    rating: 4.4,
    reviewCount: 2150,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['General Medicine', 'Maternal & Child Health', 'Orthopedics', 'General Surgery', 'Dialysis'],
    services: ['24x7 Emergency', 'Blood Bank', 'Free Niramaya Pharmacy', 'MAMATA Center', 'ICU'],
    beds: { icu: 28, oxygen: 85, general: 240 },
  },
  {
    id: 'a3333333-3333-3333-3333-333333333333',
    name: 'KIMS Hospital (Kalinga Institute of Medical Sciences)',
    type: 'Private',
    address: 'Kushabhadra Campus, KIIT University, Patia, Bhubaneswar 751024',
    city: 'Bhubaneswar',
    district: 'Khordha',
    state: 'Odisha',
    pincode: '751024',
    phone: '0674-7105300',
    lat: 20.3541,
    lng: 85.8193,
    rating: 4.7,
    reviewCount: 4890,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Super Specialty Cardiac', 'Neuro Surgery', 'Nephrology', 'Organ Transplant', 'Neonatal ICU'],
    services: ['24x7 Trauma Care', 'BSKY Smart Card Accepted', 'Air Ambulance Assist', 'Advanced Diagnostics'],
    beds: { icu: 60, oxygen: 180, general: 450 },
  },
  {
    id: 'a4444444-4444-4444-4444-444444444444',
    name: 'SCB Medical College & Hospital',
    type: 'Government',
    address: 'Manglabag, Cuttack, Odisha 753007',
    city: 'Cuttack',
    district: 'Cuttack',
    state: 'Odisha',
    pincode: '753007',
    phone: '0671-2414080',
    lat: 20.4686,
    lng: 85.8925,
    rating: 4.6,
    reviewCount: 5200,
    isVerified: true,
    isOpen24x7: true,
    specialties: ['Apex Tertiary Care', 'Cardiothoracic Surgery', 'Hepatology', 'Burn Unit', 'Bone Marrow Transplant'],
    services: ['24x7 Emergency', 'State Apex Referral Center', 'Free BSKY Packages', 'Regional Blood Bank'],
    beds: { icu: 95, oxygen: 310, general: 820 },
  },
];

// Haversine distance calculator in KM
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export class HospitalController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const { district, type, query, lat, lng } = req.query;

      let hospitals = MOCK_HOSPITALS_FALLBACK;

      if (isSupabaseConfigured()) {
        try {
          let dbQuery = supabase
            .from('hospitals')
            .select(`
              *,
              hospital_beds (
                icu_beds,
                oxygen_beds,
                general_beds
              )
            `);

          if (district && typeof district === 'string') {
            dbQuery = dbQuery.ilike('district', `%${district}%`);
          }
          if (type && typeof type === 'string' && type !== 'All') {
            dbQuery = dbQuery.eq('type', type);
          }
          if (query && typeof query === 'string') {
            dbQuery = dbQuery.or(`name.ilike.%${query}%,city.ilike.%${query}%,address.ilike.%${query}%`);
          }

          const { data, error } = await dbQuery;
          if (!error && data && data.length > 0) {
            hospitals = data.map((h: any) => ({
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
        } catch (dbErr) {
          console.warn('Database query error, using fallback:', dbErr);
        }
      }

      // If client coordinates are provided, compute distance and sort
      if (lat && lng) {
        const uLat = parseFloat(lat as string);
        const uLng = parseFloat(lng as string);
        if (!isNaN(uLat) && !isNaN(uLng)) {
          hospitals = hospitals.map((h) => ({
            ...h,
            distance: calculateDistance(uLat, uLng, h.lat, h.lng),
            coordinates: { lat: h.lat, lng: h.lng },
          })).sort((a: any, b: any) => (a.distance || 0) - (b.distance || 0));
        }
      }

      res.status(200).json({
        success: true,
        count: hospitals.length,
        data: hospitals,
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const hospital = MOCK_HOSPITALS_FALLBACK.find((h) => h.id === id) || MOCK_HOSPITALS_FALLBACK[0];

      res.status(200).json({
        success: true,
        data: hospital,
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }
}
