import { Request, Response } from 'express';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { EmailService } from '../services/emailService.js';
import { supabase, supabaseAdmin, isSupabaseConfigured } from '../config/supabase.js';

const JWT_SECRET = process.env.JWT_SECRET || 'swasthya_sathi_super_secret_jwt_key_2026';

// In-memory OTP storage for password resets & verification (with 15 min TTL)
// NOTE: Not shared across instances — not suitable for multi-server deployments.
// For production with load balancers, migrate to Redis or database-backed storage.
interface OtpRecord {
  email: string;
  code: string;
  type: 'verification' | 'password_reset';
  expiresAt: number;
  attempts: number;       // Bug 5: track failed verification attempts
  lockedUntil: number;    // Bug 5: lockout timestamp after too many failures
  data?: any;
}

const otpStore = new Map<string, OtpRecord>();

const MAX_OTP_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// Bug 17: Use crypto.randomInt() instead of Math.random() for secure OTP generation
function generateOtp(): string {
  return crypto.randomInt(100000, 1000000).toString();
}

// Bug 9: Periodic cleanup of expired OTP records to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of otpStore.entries()) {
    if (now > record.expiresAt + LOCKOUT_DURATION_MS) {
      otpStore.delete(key);
    }
  }
}, 5 * 60 * 1000); // Run every 5 minutes

const ADMIN_SECRET_KEY = process.env.ODISHA_HEALTH_ADMIN_KEY || 'ODISHA_HEALTH_2026';

export class AuthController {
  /**
   * Citizen & Admin User Registration
   */
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, phone, district, language = 'en', role = 'citizen', adminAccessKey, designation } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required.' });
        return;
      }

      // If registering as admin or health officer, validate the secret administrative key
      if (role === 'admin' || role === 'health_officer') {
        if (!adminAccessKey || adminAccessKey !== ADMIN_SECRET_KEY) {
          res.status(403).json({ error: 'Invalid Odisha Health Administrative Access Key.' });
          return;
        }
      }

      let userId = `usr-${Date.now()}`;

      // If Supabase is configured, create Supabase Auth user
      if (isSupabaseConfigured()) {
        try {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                name,
                phone,
                district,
                language,
                role,
                designation: designation || (role === 'admin' ? 'Health Administrator' : 'Citizen'),
              },
            },
          });

          if (!error && data.user) {
            userId = data.user.id;
          }
        } catch (dbErr) {
          console.warn('Supabase auth signup warning (continuing with local registration):', dbErr);
        }
      }

      // Generate verification OTP and dispatch Twilio SendGrid email
      const otp = generateOtp();
      otpStore.set(email.toLowerCase(), {
        email: email.toLowerCase(),
        code: otp,
        type: 'verification',
        expiresAt: Date.now() + 15 * 60 * 1000,
        attempts: 0,
        lockedUntil: 0,
        data: { name, email, role, district, phone },
      });

      // Dispatch Twilio SendGrid verification email in background
      EmailService.sendVerificationEmail(email, name, otp).catch((err) =>
        console.error('Failed to send verification email:', err)
      );

      res.status(201).json({
        success: true,
        message: 'Account registered successfully. A verification code has been dispatched to your email.',
        data: {
          user: {
            id: userId,
            name,
            email,
            phone: phone || '',
            district: district || 'Khordha',
            language,
            role,
            designation: designation || (role === 'admin' ? 'Health Administrator' : 'Citizen'),
          },
          verificationRequired: true,
        },
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed.', details: error?.message });
    }
  }

  /**
   * User Login (Citizen & Admin)
   * Bug 2 Fix: No longer falls through to mock user — rejects invalid credentials.
   */
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required.' });
        return;
      }

      // Bug 2 Fix: Supabase MUST be configured for login to work
      if (!isSupabaseConfigured()) {
        res.status(503).json({ error: 'Authentication service is not configured. Please contact the administrator.' });
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // Bug 2 Fix: If Supabase returns an error, REJECT the login
      if (error || !data.user) {
        res.status(401).json({ error: 'Invalid email or password.' });
        return;
      }

      const user = {
        id: data.user.id,
        name: data.user.user_metadata?.name || email.split('@')[0],
        email: data.user.email || email,
        phone: data.user.user_metadata?.phone || '',
        district: data.user.user_metadata?.district || 'Khordha',
        language: data.user.user_metadata?.language || 'en',
        role: data.user.user_metadata?.role || 'citizen', // Bug 2: Role comes from DB, not from client
        designation: data.user.user_metadata?.designation || 'Citizen',
      };

      // Bug 3 Fix: Sign a real JWT token instead of a fake timestamp string
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(200).json({
        success: true,
        message: 'Login successful.',
        data: {
          user,
          token,
        },
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Login failed.', details: error?.message });
    }
  }

  /**
   * Request Password Reset OTP (Dispatches Twilio SendGrid Email)
   */
  static async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({ error: 'Registered email address is required.' });
        return;
      }

      const otp = generateOtp();
      otpStore.set(`reset_${email.toLowerCase()}`, {
        email: email.toLowerCase(),
        code: otp,
        type: 'password_reset',
        expiresAt: Date.now() + 15 * 60 * 1000,
        attempts: 0,
        lockedUntil: 0,
      });

      console.log(`[PASSWORD RESET OTP GENERATED] Email: ${email} | OTP dispatched via email.`);

      // Dispatch Twilio SendGrid email
      const emailResult = await EmailService.sendPasswordResetEmail(email, email.split('@')[0], otp);

      res.status(200).json({
        success: true,
        message: 'Password reset OTP has been sent to your email address.',
        emailSent: emailResult.success,
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to initiate password reset.', details: error?.message });
    }
  }

  /**
   * Reset Password with Verified OTP
   * Bug 4 Fix: Uses supabaseAdmin (service role) for admin operations.
   * Bug 5 Fix: Rate limits OTP attempts.
   */
  static async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, otp, newPassword } = req.body;

      if (!email || !otp || !newPassword) {
        res.status(400).json({ error: 'Email, OTP, and new password are required.' });
        return;
      }

      const recordKey = `reset_${email.toLowerCase()}`;
      const record = otpStore.get(recordKey);

      if (!record) {
        res.status(400).json({ error: 'No active password reset request found for this email. Please request a new OTP.' });
        return;
      }

      // Bug 5: Check lockout
      if (record.lockedUntil > Date.now()) {
        const remainingMinutes = Math.ceil((record.lockedUntil - Date.now()) / 60000);
        res.status(429).json({ error: `Too many failed attempts. Please try again in ${remainingMinutes} minute(s).` });
        return;
      }

      if (Date.now() > record.expiresAt) {
        otpStore.delete(recordKey);
        res.status(400).json({ error: 'OTP has expired. Please request a new OTP.' });
        return;
      }

      if (record.code !== otp.trim()) {
        // Bug 5: Increment attempt counter and lock if exceeded
        record.attempts += 1;
        if (record.attempts >= MAX_OTP_ATTEMPTS) {
          record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
          res.status(429).json({ error: 'Too many failed attempts. Your account has been temporarily locked for 15 minutes.' });
          return;
        }
        res.status(400).json({ error: `Invalid OTP code. ${MAX_OTP_ATTEMPTS - record.attempts} attempt(s) remaining.` });
        return;
      }

      // OTP is valid! Update Supabase password if configured
      // Bug 4 Fix: Use supabaseAdmin instead of supabase for admin operations
      if (isSupabaseConfigured()) {
        try {
          const { data: userData } = await supabaseAdmin.auth.admin.listUsers();
          const targetUser = userData?.users?.find(u => u.email === email.toLowerCase());
          if (targetUser) {
            await supabaseAdmin.auth.admin.updateUserById(targetUser.id, { password: newPassword });
          }
        } catch (dbErr) {
          console.warn('Supabase password reset update note:', dbErr);
        }
      }

      // Clear OTP record
      otpStore.delete(recordKey);

      res.status(200).json({
        success: true,
        message: 'Your password has been successfully reset! You may now sign in with your new credentials.',
      });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to reset password.', details: error?.message });
    }
  }

  /**
   * Verify Signup Email OTP
   * Bug 5 Fix: Rate limits OTP verification attempts.
   */
  static async verifyOTP(req: Request, res: Response): Promise<void> {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        res.status(400).json({ error: 'Email and OTP code are required.' });
        return;
      }

      const record = otpStore.get(email.toLowerCase());

      if (!record) {
        res.status(400).json({ error: 'No active verification request found. Please register again.' });
        return;
      }

      // Bug 5: Check lockout
      if (record.lockedUntil > Date.now()) {
        const remainingMinutes = Math.ceil((record.lockedUntil - Date.now()) / 60000);
        res.status(429).json({ error: `Too many failed attempts. Please try again in ${remainingMinutes} minute(s).` });
        return;
      }

      if (Date.now() > record.expiresAt) {
        otpStore.delete(email.toLowerCase());
        res.status(400).json({ error: 'Verification code has expired. Please register again.' });
        return;
      }

      if (record.code !== otp.trim()) {
        // Bug 5: Increment attempt counter
        record.attempts += 1;
        if (record.attempts >= MAX_OTP_ATTEMPTS) {
          record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
          res.status(429).json({ error: 'Too many failed attempts. Your verification has been temporarily locked for 15 minutes.' });
          return;
        }
        res.status(400).json({ error: `Invalid verification code. ${MAX_OTP_ATTEMPTS - record.attempts} attempt(s) remaining.` });
        return;
      }

      otpStore.delete(email.toLowerCase());

      res.status(200).json({
        success: true,
        message: 'Email successfully verified!',
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }

  /**
   * Trigger Citizen Emergency SOS Notification Email
   */
  static async sendEmergencySos(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, location, emergencyType } = req.body;

      if (!email) {
        res.status(400).json({ error: 'User email is required.' });
        return;
      }

      await EmailService.sendEmergencySosConfirmation(
        email,
        name || 'Citizen',
        location || 'Bhubaneswar, Odisha (GPS Live Coordinates)',
        emergencyType || 'Medical Emergency'
      );

      res.status(200).json({
        success: true,
        message: 'Emergency SOS alert confirmation dispatched via email.',
      });
    } catch (error: any) {
      res.status(500).json({ error: error?.message });
    }
  }
}
