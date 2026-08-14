import type { Request, Response } from 'express';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';
import { EmailService } from '../services/emailService.js';
import type { AuthenticatedRequest } from '../middleware/authMiddleware.js';

export interface FeedbackItem {
  id: string;
  userId?: string;
  name: string;
  email: string;
  category: 'General' | 'Bug Report' | 'Feature Request' | 'Hospital Services' | 'AI Accuracy' | 'Emergency 108';
  rating: number;
  message: string;
  status: 'pending' | 'reviewed' | 'resolved';
  adminNotes?: string;
  createdAt: string;
}

// In-memory fallback for local development if Supabase is unavailable
const fallbackFeedbacks: FeedbackItem[] = [
  {
    id: 'fb-101',
    name: 'Priyanka Mohanty',
    email: 'priyanka.m@gmail.com',
    category: 'Hospital Services',
    rating: 5,
    message: 'The real-time ICU bed tracking for Capital Hospital Bhubaneswar was very accurate and helped my family quickly during an emergency.',
    status: 'reviewed',
    adminNotes: 'Verified bed tracking accuracy.',
    createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: 'fb-102',
    name: 'Subrat Patnaik',
    email: 'subrat.p@odisha.nic.in',
    category: 'AI Accuracy',
    rating: 4,
    message: 'AI Symptom checker diagnosed early dengue symptoms in Odia language perfectly. Please add more regional Odia terms for seasonal fever.',
    status: 'pending',
    createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    id: 'fb-103',
    name: 'Ananya Das',
    email: 'ananya.das@live.com',
    category: 'Feature Request',
    rating: 5,
    message: 'Would love to see ABHA Card QR scanner directly on mobile for faster prescription record upload.',
    status: 'pending',
    createdAt: new Date(Date.now() - 24 * 3600000).toISOString(),
  },
];

export class FeedbackController {
  /**
   * Submit citizen feedback & send SendGrid notifications
   */
  static async submitFeedback(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, category = 'General', rating = 5, message, userId } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({ error: 'Name, email, and feedback message are required.' });
        return;
      }

      const parsedRating = Math.max(1, Math.min(5, Number(rating) || 5));
      const feedbackId = `fb-${Date.now()}`;
      const now = new Date().toISOString();

      let savedFeedback: FeedbackItem = {
        id: feedbackId,
        userId: userId || undefined,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        category,
        rating: parsedRating,
        message: message.trim(),
        status: 'pending',
        createdAt: now,
      };

      // Try saving to Supabase
      if (isSupabaseConfigured()) {
        try {
          const { data, error } = await supabase
            .from('feedbacks')
            .insert({
              name: savedFeedback.name,
              email: savedFeedback.email,
              category: savedFeedback.category,
              rating: savedFeedback.rating,
              message: savedFeedback.message,
              status: 'pending',
            })
            .select()
            .single();

          if (!error && data) {
            savedFeedback = {
              id: data.id,
              userId: data.user_id,
              name: data.name,
              email: data.email,
              category: data.category,
              rating: data.rating,
              message: data.message,
              status: data.status,
              adminNotes: data.admin_notes,
              createdAt: data.created_at,
            };
          }
        } catch (dbErr) {
          console.warn('Supabase feedback insert note (using fallback store):', dbErr);
        }
      }

      // Add to local fallback array (at start)
      fallbackFeedbacks.unshift(savedFeedback);

      // 1. Dispatch SendGrid Email Alert to Admin (rahulprasaddas37@gmail.com)
      EmailService.sendFeedbackAdminNotificationEmail(savedFeedback).catch((err) =>
        console.error('Failed to notify admin of feedback:', err)
      );

      // 2. Dispatch SendGrid Receipt Email to User
      EmailService.sendFeedbackReceiptEmail(savedFeedback.email, savedFeedback.name, savedFeedback.category).catch((err) =>
        console.error('Failed to send feedback receipt to user:', err)
      );

      res.status(201).json({
        success: true,
        message: 'Thank you! Your feedback has been received and our medical administration team has been notified.',
        data: savedFeedback,
      });
    } catch (error: any) {
      console.error('Feedback submission error:', error);
      res.status(500).json({ error: 'Failed to submit feedback.', details: error?.message });
    }
  }

  /**
   * Admin: Get all citizen feedbacks with statistics & filtering
   */
  static async getFeedbacks(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const { status, category, query } = req.query;

      let feedbacks = [...fallbackFeedbacks];

      if (isSupabaseConfigured()) {
        try {
          let dbQuery = supabase
            .from('feedbacks')
            .select('*')
            .order('created_at', { ascending: false });

          if (status && status !== 'all') {
            dbQuery = dbQuery.eq('status', status);
          }
          if (category && category !== 'all') {
            dbQuery = dbQuery.eq('category', category);
          }

          const { data, error } = await dbQuery;
          if (!error && data && data.length > 0) {
            feedbacks = data.map((d: any) => ({
              id: d.id,
              userId: d.user_id,
              name: d.name,
              email: d.email,
              category: d.category,
              rating: d.rating,
              message: d.message,
              status: d.status,
              adminNotes: d.admin_notes,
              createdAt: d.created_at,
            }));
          }
        } catch (dbErr) {
          console.warn('Supabase feedbacks query error:', dbErr);
        }
      }

      // Filter in-memory if query provided
      if (query && typeof query === 'string') {
        const q = query.toLowerCase();
        feedbacks = feedbacks.filter(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.email.toLowerCase().includes(q) ||
            f.message.toLowerCase().includes(q) ||
            f.category.toLowerCase().includes(q)
        );
      }

      const totalFeedbacks = feedbacks.length;
      const avgRating = totalFeedbacks > 0
        ? Number((feedbacks.reduce((acc, f) => acc + f.rating, 0) / totalFeedbacks).toFixed(1))
        : 5.0;
      const pendingCount = feedbacks.filter((f) => f.status === 'pending').length;
      const resolvedCount = feedbacks.filter((f) => f.status === 'resolved').length;

      res.status(200).json({
        success: true,
        stats: {
          total: totalFeedbacks,
          avgRating,
          pending: pendingCount,
          resolved: resolvedCount,
        },
        data: feedbacks,
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to fetch feedbacks.', details: error?.message });
    }
  }

  /**
   * Admin: Update feedback status and add administrator resolution notes
   */
  static async updateFeedbackStatus(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { status, adminNotes } = req.body;

      if (!status && !adminNotes) {
        res.status(400).json({ error: 'Status or adminNotes is required.' });
        return;
      }

      let updated = false;

      // Update in Supabase
      if (isSupabaseConfigured()) {
        try {
          const updatePayload: any = {};
          if (status) updatePayload.status = status;
          if (adminNotes !== undefined) updatePayload.admin_notes = adminNotes;

          const { error } = await supabase
            .from('feedbacks')
            .update(updatePayload)
            .eq('id', id);

          if (!error) updated = true;
        } catch (dbErr) {
          console.warn('Supabase feedback update error:', dbErr);
        }
      }

      // Update fallback item
      const item = fallbackFeedbacks.find((f) => f.id === id);
      if (item) {
        if (status) item.status = status;
        if (adminNotes !== undefined) item.adminNotes = adminNotes;
        updated = true;
      }

      if (!updated && !item) {
        res.status(404).json({ error: 'Feedback not found.' });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'Feedback updated successfully.',
        data: item,
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to update feedback.', details: error?.message });
    }
  }
}
