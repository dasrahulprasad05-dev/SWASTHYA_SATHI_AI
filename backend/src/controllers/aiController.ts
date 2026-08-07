import { Request, Response } from 'express';
import { AIService } from '../services/aiService.js';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

export class AIController {
  static async handleChat(req: Request, res: Response): Promise<void> {
    try {
      const { message, language = 'en', chatId, userId, history = [] } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message text is required.' });
        return;
      }

      const triageResult = await AIService.generateHealthTriage(
        message,
        language as 'en' | 'hi' | 'or',
        history
      );

      // If Supabase is configured and chatId is provided, persist messages to database
      if (isSupabaseConfigured() && chatId) {
        try {
          // Save user message
          await supabase.from('messages').insert({
            chat_id: chatId,
            role: 'user',
            content: message,
          });

          // Save assistant message
          await supabase.from('messages').insert({
            chat_id: chatId,
            role: 'assistant',
            content: triageResult.content,
            metadata: {
              confidence: triageResult.confidence,
              recommendations: triageResult.recommendations,
              warnings: triageResult.warnings,
              sources: triageResult.sources,
              followUp: triageResult.followUp,
            },
          });
        } catch (dbErr) {
          console.warn('Database persist error (continuing with AI response):', dbErr);
        }
      }

      res.status(200).json({
        success: true,
        data: {
          id: `msg-${Date.now()}`,
          chatId: chatId || 'chat-default',
          content: triageResult.content,
          role: 'assistant',
          timestamp: new Date().toISOString(),
          metadata: {
            confidence: triageResult.confidence,
            recommendations: triageResult.recommendations,
            warnings: triageResult.warnings,
            sources: triageResult.sources,
            followUp: triageResult.followUp,
          },
        },
      });
    } catch (error: any) {
      console.error('AI chat endpoint error:', error);
      res.status(500).json({
        error: 'Failed to process AI triage query.',
        details: error?.message,
      });
    }
  }

  static async handleVoiceTranscribe(req: Request, res: Response): Promise<void> {
    try {
      const { transcript, language = 'or' } = req.body;

      if (!transcript) {
        res.status(400).json({ error: 'Audio transcript text is required.' });
        return;
      }

      const triageResult = await AIService.generateHealthTriage(
        transcript,
        language as 'en' | 'hi' | 'or'
      );

      res.status(200).json({
        success: true,
        data: triageResult,
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }
}
