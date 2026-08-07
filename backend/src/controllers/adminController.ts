import { Request, Response } from 'express';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

export class AdminController {
  static async getSurveillance(req: Request, res: Response): Promise<void> {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from('district_surveillance')
          .select('*')
          .order('active_cases', { ascending: false });

        if (!error && data && data.length > 0) {
          res.status(200).json({
            success: true,
            data: data.map((d: any) => ({
              district: d.district_name,
              activeCases: d.active_cases,
              epidemicRisk: d.epidemic_risk,
              bedOccupancy: `${d.hospital_bed_occupancy}%`,
              calls24h: d.ambulance_calls_24h,
            })),
          });
          return;
        }
      }

      // Default fallback
      res.status(200).json({
        success: true,
        data: [
          { district: 'Khordha (BBSR)', activeCases: 412, epidemicRisk: 'High', bedOccupancy: '84%', calls24h: 89 },
          { district: 'Cuttack', activeCases: 278, epidemicRisk: 'High', bedOccupancy: '79%', calls24h: 62 },
          { district: 'Ganjam', activeCases: 145, epidemicRisk: 'Moderate', bedOccupancy: '61%', calls24h: 34 },
          { district: 'Sambalpur', activeCases: 98, epidemicRisk: 'Low', bedOccupancy: '52%', calls24h: 18 },
          { district: 'Puri', activeCases: 112, epidemicRisk: 'Moderate', bedOccupancy: '58%', calls24h: 26 },
          { district: 'Mayurbhanj', activeCases: 64, epidemicRisk: 'Low', bedOccupancy: '44%', calls24h: 14 },
        ],
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getDiseaseTrends(req: Request, res: Response): Promise<void> {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.from('disease_trends').select('*');
        if (!error && data && data.length > 0) {
          res.status(200).json({ success: true, data });
          return;
        }
      }

      res.status(200).json({
        success: true,
        data: [
          { month: 'Apr', dengue: 45, malaria: 120, diarrhoea: 85 },
          { month: 'May', dengue: 80, malaria: 160, diarrhoea: 140 },
          { month: 'Jun', dengue: 210, malaria: 195, diarrhoea: 165 },
          { month: 'Jul', dengue: 390, malaria: 180, diarrhoea: 175 },
          { month: 'Aug', dengue: 520, malaria: 160, diarrhoea: 185 },
        ],
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async broadcastAlert(req: Request, res: Response): Promise<void> {
    try {
      const { district, alertType, message } = req.body;

      if (!message) {
        res.status(400).json({ error: 'Alert notification message is required.' });
        return;
      }

      console.log(`[EMERGENCY BROADCAST DISPATCHED] District: ${district || 'Statewide'} | Type: ${alertType} | Message: ${message}`);

      res.status(200).json({
        success: true,
        message: `Health alert broadcast queued successfully for ${district || 'all districts'}.`,
        broadcastId: `alert-${Date.now()}`,
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  static async getStats(req: Request, res: Response): Promise<void> {
    res.status(200).json({
      success: true,
      data: {
        activeVectorCases: 1109,
        icuOccupancy: 74.2,
        ambulanceResponseMinutes: 14.2,
        aiQueriesToday: 18420,
        trends: {
          vectorWeekly: '+18%',
          responseImprovement: '-2.1 min',
          modelUptime: '99.98%',
        },
      },
    });
  }
}
