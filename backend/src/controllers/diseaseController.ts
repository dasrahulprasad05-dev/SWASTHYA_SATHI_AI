import { Request, Response } from 'express';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

const MOCK_DISEASE_FALLBACK = {
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

export class DiseaseController {
  static async getAllDiseases(req: Request, res: Response): Promise<void> {
    try {
      let diseases = [MOCK_DISEASE_FALLBACK];

      if (isSupabaseConfigured()) {
        try {
          const { data, error } = await supabase.from('diseases').select('*');
          if (!error && data && data.length > 0) {
            diseases = data.map((d: any) => ({
              id: d.id,
              name: d.name,
              nativeName: d.native_name,
              category: d.category,
              severity: d.severity,
              transmission: d.transmission,
              overview: d.overview,
              symptoms: d.symptoms,
              causes: d.causes,
              treatments: d.treatments,
              prevention: d.prevention,
              dos: d.dos,
              donts: d.donts,
              whenToSeeDoctor: d.when_to_see_doctor,
              faqs: d.faqs,
            }));
          }
        } catch (dbErr) {
          console.warn('Supabase diseases fetch warning:', dbErr);
        }
      }

      res.status(200).json({ success: true, count: diseases.length, data: diseases });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getDiseaseById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.from('diseases').select('*').eq('id', id).single();
        if (!error && data) {
          res.status(200).json({ success: true, data });
          return;
        }
      }
      res.status(200).json({ success: true, data: MOCK_DISEASE_FALLBACK });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getAllMedicines(req: Request, res: Response): Promise<void> {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.from('medicines').select('*');
        if (!error && data) {
          res.status(200).json({ success: true, count: data.length, data });
          return;
        }
      }

      res.status(200).json({
        success: true,
        data: [
          {
            name: 'Paracetamol 650mg',
            genericName: 'Paracetamol',
            category: 'Antipyretic',
            uses: 'Fever and pain relief',
            niramayaAvailable: true,
            price: 0,
          },
          {
            name: 'ORS WHO Formula',
            genericName: 'Oral Rehydration Salts',
            category: 'Electrolyte',
            uses: 'Dehydration treatment',
            niramayaAvailable: true,
            price: 0,
          },
        ],
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getAllSchemes(req: Request, res: Response): Promise<void> {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.from('schemes').select('*');
        if (!error && data) {
          res.status(200).json({ success: true, count: data.length, data });
          return;
        }
      }

      res.status(200).json({
        success: true,
        data: [
          {
            title: 'Biju Swasthya Kalyan Yojana (BSKY)',
            coverage: '₹5 Lakh - ₹10 Lakh per family',
            helpline: '104 / 155369',
          },
          {
            title: 'MAMATA Scheme',
            coverage: '₹5,000 direct maternity support',
            helpline: '181',
          },
        ],
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }
}
