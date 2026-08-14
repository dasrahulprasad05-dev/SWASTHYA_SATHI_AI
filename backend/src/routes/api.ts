import { Router, Request, Response } from 'express';
import { AIController } from '../controllers/aiController.js';
import { HospitalController } from '../controllers/hospitalController.js';
import { DiseaseController } from '../controllers/diseaseController.js';
import { AdminController } from '../controllers/adminController.js';
import { AuthController } from '../controllers/authController.js';
import { FeedbackController } from '../controllers/feedbackController.js';
import { knowledgeBaseService } from '../services/knowledgeBaseService.js';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';

const router = Router();

// ── Health Check ──
router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'online',
    service: 'Swasthya Sathi AI Backend',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ── Auth & Password Management Endpoints (SendGrid Email Powered) — Public ──
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/verify-magic-link', AuthController.verifyMagicLink);
router.post('/auth/resend-verification', AuthController.resendVerification);
router.post('/auth/forgot-password', AuthController.forgotPassword);
router.post('/auth/reset-password', AuthController.resetPassword);
router.post('/auth/verify-otp', AuthController.verifyOTP);

// ── Citizen Feedback & Review Endpoints ──
router.post('/feedback', FeedbackController.submitFeedback);
router.get('/admin/feedbacks', authenticate, authorizeAdmin, FeedbackController.getFeedbacks);
router.patch('/admin/feedbacks/:id', authenticate, authorizeAdmin, FeedbackController.updateFeedbackStatus);

// ── Emergency & SOS Endpoints — Authenticated ──
router.post('/emergency/send-sos', authenticate, AuthController.sendEmergencySos);

// ── AI Health Triage & Voice Endpoints — Authenticated ──
router.post('/ai/chat', authenticate, AIController.handleChat);
router.post('/ai/voice-transcribe', authenticate, AIController.handleVoiceTranscribe);

// ── Hospitals & Bed Availability Endpoints — Public ──
router.get('/hospitals', HospitalController.getAll);
router.get('/hospitals/:id', HospitalController.getById);

// ── Disease, Medicine & Scheme Endpoints — Public ──
router.get('/diseases', DiseaseController.getAllDiseases);
router.get('/diseases/:id', DiseaseController.getDiseaseById);
router.get('/medicines', DiseaseController.getAllMedicines);
router.get('/schemes', DiseaseController.getAllSchemes);

// ── Odisha Health Admin & Surveillance Endpoints — Admin Only ──
router.get('/admin/stats', authenticate, authorizeAdmin, AdminController.getStats);
router.get('/admin/surveillance', authenticate, authorizeAdmin, AdminController.getSurveillance);
router.get('/admin/trends', authenticate, authorizeAdmin, AdminController.getDiseaseTrends);
router.post('/admin/broadcast', authenticate, authorizeAdmin, AdminController.broadcastAlert);

// ── RAG Knowledge Base Endpoints — Public ──
router.get('/knowledge/stats', async (_req: Request, res: Response) => {
  try {
    const stats = await knowledgeBaseService.getStats();
    res.json({ success: true, ...stats });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message });
  }
});

router.post('/knowledge/search', async (req: Request, res: Response) => {
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
