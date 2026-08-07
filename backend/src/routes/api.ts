import { Router } from 'express';
import { AIController } from '../controllers/aiController.js';
import { HospitalController } from '../controllers/hospitalController.js';
import { DiseaseController } from '../controllers/diseaseController.js';
import { AdminController } from '../controllers/adminController.js';

const router = Router();

// ── Health Check ──
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Swasthya Sathi AI Backend',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ── AI Health Triage & Voice Endpoints ──
router.post('/ai/chat', AIController.handleChat);
router.post('/ai/voice-transcribe', AIController.handleVoiceTranscribe);

// ── Hospitals & Bed Availability Endpoints ──
router.get('/hospitals', HospitalController.getAll);
router.get('/hospitals/:id', HospitalController.getById);

// ── Disease, Medicine & Scheme Endpoints ──
router.get('/diseases', DiseaseController.getAllDiseases);
router.get('/diseases/:id', DiseaseController.getDiseaseById);
router.get('/medicines', DiseaseController.getAllMedicines);
router.get('/schemes', DiseaseController.getAllSchemes);

// ── Odisha Health Admin & Surveillance Endpoints ──
router.get('/admin/stats', AdminController.getStats);
router.get('/admin/surveillance', AdminController.getSurveillance);
router.get('/admin/trends', AdminController.getDiseaseTrends);
router.post('/admin/broadcast', AdminController.broadcastAlert);

export default router;
