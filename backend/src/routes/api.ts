import { Router } from 'express';
import { AIController } from '../controllers/aiController.js';
import { HospitalController } from '../controllers/hospitalController.js';
import { DiseaseController } from '../controllers/diseaseController.js';
import { AdminController } from '../controllers/adminController.js';
import { AuthController } from '../controllers/authController.js';

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

// ── Auth & Password Management Endpoints (Brevo Email Powered) ──
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/forgot-password', AuthController.forgotPassword);
router.post('/auth/reset-password', AuthController.resetPassword);
router.post('/auth/verify-otp', AuthController.verifyOTP);

// ── Emergency & SOS Endpoints ──
router.post('/emergency/send-sos', AuthController.sendEmergencySos);

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

// ── RAG Knowledge Base Endpoints ──
import { knowledgeBaseService } from '../services/knowledgeBaseService.js';

router.get('/knowledge/stats', async (_req, res) => {
  try {
    const stats = await knowledgeBaseService.getStats();
    res.json({ success: true, ...stats });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message });
  }
});

router.post('/knowledge/search', async (req, res) => {
  try {
    const { query, topK = 5, category } = req.body;
    if (!query) return res.status(400).json({ success: false, error: 'Query is required' });
    const results = await knowledgeBaseService.search(query, topK, category);
    res.json({ success: true, results: results.map(r => ({ ...r.chunk, score: r.score })) });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message });
  }
});

export default router;
