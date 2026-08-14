import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

export interface SendEmailPayload {
  to: Array<{ email: string; name?: string }>;
  subject: string;
  htmlContent: string;
  sender?: { email: string; name: string };
}

// Sanitize user-provided HTML inputs to prevent XSS in email clients
function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export class EmailService {
  /**
   * Core method to send transactional email via Twilio SendGrid API
   */
  static async sendTransactionalEmail(payload: SendEmailPayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const apiKey = process.env.SENDGRID_API_KEY || '';
    const senderEmail = process.env.SENDGRID_SENDER_EMAIL || 'rahulprasaddas37@gmail.com';
    const senderName = process.env.SENDGRID_SENDER_NAME || 'Swasthya Sathi AI (ଓଡ଼ିଶା ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ)';

    // If no valid SendGrid API key configured, simulate sending gracefully for local/dev
    if (!apiKey || apiKey === 'your_sendgrid_api_key_here' || apiKey.startsWith('your_')) {
      console.log(`[TWILIO SENDGRID SIMULATION] To: ${payload.to.map((t) => t.email).join(', ')} | Subject: "${payload.subject}"`);
      return { success: true, messageId: `simulated-${Date.now()}` };
    }

    try {
      sgMail.setApiKey(apiKey);

      const msg = {
        to: payload.to.map((t) => (t.name ? { email: t.email, name: t.name } : { email: t.email })),
        from: payload.sender || { email: senderEmail, name: senderName },
        subject: payload.subject,
        html: payload.htmlContent,
      };

      const [response] = await sgMail.send(msg);
      const messageId = (response?.headers?.['x-message-id'] as string) || `sg-${Date.now()}`;
      console.log(`[TWILIO SENDGRID SENT] Status: ${response.statusCode} | MessageId: ${messageId} to ${payload.to.map((t) => t.email).join(', ')}`);
      return { success: true, messageId };
    } catch (err: any) {
      const errorDetails = err?.response?.body?.errors?.map((e: any) => e.message).join(', ') || err?.message || 'SendGrid dispatch error';
      console.error('Twilio SendGrid API Error:', errorDetails);
      return { success: false, error: errorDetails };
    }
  }

  /**
   * 1. Send Email Verification with 1-Click Magic Link & Backup OTP
   */
  static async sendVerificationEmail(toEmail: string, toName: string, otpCode: string, magicLink?: string): Promise<{ success: boolean }> {
    const safeName = escapeHtml(toName || 'Citizen');
    const safeOtp = escapeHtml(otpCode);
    const verifyUrl = magicLink || `http://localhost:5173/verify?email=${encodeURIComponent(toEmail)}&otp=${encodeURIComponent(otpCode)}`;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 580px; margin: 0 auto; background-color: #131d38; border-radius: 14px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
        .header { background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
        .content { padding: 32px 28px; line-height: 1.6; color: #cbd5e1; }
        .btn-magic { display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: #ffffff !important; font-weight: 700; font-size: 16px; padding: 15px 36px; border-radius: 9999px; text-decoration: none; margin: 24px 0 16px 0; box-shadow: 0 4px 14px 0 rgba(6, 182, 212, 0.4); text-align: center; }
        .otp-box { background: #0f172a; border: 1px dashed #334155; border-radius: 10px; padding: 16px; text-align: center; margin: 20px 0; }
        .otp-code { font-size: 28px; font-weight: 800; letter-spacing: 6px; color: #38bdf8; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; background: #0a0f1d; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: -0.5px;">🏥 Swasthya Sathi AI</h1>
          <p style="margin: 6px 0 0 0; opacity: 0.95; font-size: 14px;">ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ AI — Government of Odisha Health Initiative</p>
        </div>
        <div class="content">
          <h2 style="color: #ffffff; margin-top: 0; font-size: 20px;">Welcome, ${safeName}! / ସ୍ୱାଗତମ୍!</h2>
          <p style="font-size: 15px;">Thank you for registering with <strong>Swasthya Sathi AI</strong>. Click the button below to automatically verify your email and log in instantly:</p>
          
          <div style="text-align: center;">
            <a href="${verifyUrl}" class="btn-magic" target="_blank">✨ Verify & Log In Automatically</a>
          </div>

          <div class="otp-box">
            <span style="font-size: 12px; text-transform: uppercase; color: #94a3b8; display: block; margin-bottom: 4px;">Or use this 6-digit OTP code</span>
            <div class="otp-code">${safeOtp}</div>
            <span style="font-size: 11px; color: #64748b; display: block; margin-top: 4px;">Valid for 24 hours</span>
          </div>

          <p style="font-size: 13px; color: #94a3b8; line-height: 1.5;">With your verified account, you have 24x7 access to AI symptom triage in Odia, Hindi & English, Odisha hospital bed locator, ABHA health records, and emergency 108 ambulance dispatch.</p>
        </div>
        <div class="footer">
          <p style="margin: 0 0 4px 0;">Health & Family Welfare Department, Government of Odisha</p>
          <p style="margin: 0;">Emergency: 108 Ambulance | State Health Helpline: 104</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: [{ email: toEmail, name: toName }],
      subject: `🏥 Verify Your Account — Swasthya Sathi AI`,
      htmlContent,
    });
  }

  /**
   * 2. Send Password Reset OTP Email
   */
  static async sendPasswordResetEmail(toEmail: string, toName: string, otpCode: string): Promise<{ success: boolean }> {
    const safeName = escapeHtml(toName || 'User');
    const safeEmail = escapeHtml(toEmail);
    const safeOtp = escapeHtml(otpCode);

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 580px; margin: 0 auto; background-color: #131d38; border-radius: 12px; border: 1px solid #1e293b; overflow: hidden; }
        .header { background: linear-gradient(135deg, #e11d48 0%, #ea580c 100%); padding: 30px 20px; text-align: center; color: #ffffff; }
        .content { padding: 30px; line-height: 1.6; color: #cbd5e1; }
        .otp-box { background: #0f172a; border: 2px dashed #f43f5e; border-radius: 10px; padding: 20px; text-align: center; margin: 25px 0; }
        .otp-code { font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #fb7185; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">🔒 Password Reset Request</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Swasthya Sathi AI Security Center</p>
        </div>
        <div class="content">
          <h2 style="color: #ffffff; margin-top: 0;">Hello, ${safeName}</h2>
          <p>We received a request to reset the password for your <strong>Swasthya Sathi AI</strong> account (${safeEmail}).</p>
          <p>Use the following 6-digit One-Time Password (OTP) to securely reset your password:</p>
          
          <div class="otp-box">
            <span style="font-size: 12px; text-transform: uppercase; color: #fda4af; display: block; margin-bottom: 6px;">Password Reset OTP</span>
            <div class="otp-code">${safeOtp}</div>
            <span style="font-size: 12px; color: #fda4af; display: block; margin-top: 6px;">Expires in 15 minutes</span>
          </div>

          <p style="font-size: 13px; color: #94a3b8;">⚠️ If you did not request this password reset, please ignore this email or contact support immediately. Your password will remain unchanged.</p>
        </div>
        <div class="footer">
          <p>Health & Family Welfare Department, Government of Odisha</p>
          <p>This is an automated security notification.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: [{ email: toEmail, name: toName }],
      subject: `🔒 Password Reset Request — Swasthya Sathi AI`,
      htmlContent,
    });
  }

  /**
   * 3. Send Citizen Feedback Notification to Admin
   */
  static async sendFeedbackAdminNotificationEmail(feedback: {
    id?: string;
    name: string;
    email: string;
    category: string;
    rating: number;
    message: string;
    createdAt?: string;
  }): Promise<{ success: boolean }> {
    const safeName = escapeHtml(feedback.name);
    const safeEmail = escapeHtml(feedback.email);
    const safeCategory = escapeHtml(feedback.category);
    const safeMessage = escapeHtml(feedback.message);
    const adminEmail = process.env.SENDGRID_SENDER_EMAIL || 'rahulprasaddas37@gmail.com';
    const stars = '⭐'.repeat(Math.max(1, Math.min(5, feedback.rating)));

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #131d38; border-radius: 12px; border: 1px solid #3b82f6; overflow: hidden; }
        .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 24px 20px; text-align: center; color: #ffffff; }
        .content { padding: 28px; line-height: 1.6; color: #cbd5e1; }
        .card { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 18px; margin: 18px 0; }
        .badge { display: inline-block; background: #1e3a8a; color: #93c5fd; padding: 4px 10px; border-radius: 9999px; font-weight: 700; font-size: 12px; }
        .footer { padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 22px;">📬 New Citizen Feedback Received</h1>
          <p style="margin: 4px 0 0 0; opacity: 0.9; font-size: 13px;">Swasthya Sathi AI Administrative Portal</p>
        </div>
        <div class="content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="badge">${safeCategory}</span>
            <span style="font-size: 18px;">${stars} (${feedback.rating}/5)</span>
          </div>

          <div class="card">
            <p style="margin: 0 0 8px 0;"><strong>Citizen Name:</strong> ${safeName}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email Address:</strong> <a href="mailto:${safeEmail}" style="color: #38bdf8;">${safeEmail}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>Category:</strong> ${safeCategory}</p>
            <p style="margin: 0 0 8px 0;"><strong>Rating Score:</strong> ${feedback.rating} / 5</p>
            <hr style="border: 0; border-top: 1px solid #1e293b; margin: 12px 0;" />
            <p style="margin: 0; font-style: italic; color: #f8fafc;">"${safeMessage}"</p>
          </div>

          <p style="font-size: 13px; color: #94a3b8;">You can manage and respond to this feedback from the <strong>Swasthya Sathi Admin Console</strong> under the Feedbacks tab.</p>
        </div>
        <div class="footer">
          <p style="margin: 0;">Odisha Health & Family Welfare Department — Feedback Gateway</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: [{ email: adminEmail, name: 'Health Administrator' }],
      subject: `📬 [Citizen Feedback] ${safeCategory} (${feedback.rating}/5) from ${safeName}`,
      htmlContent,
    });
  }

  /**
   * 4. Send Feedback Acknowledgment Receipt to User
   */
  static async sendFeedbackReceiptEmail(toEmail: string, toName: string, category: string): Promise<{ success: boolean }> {
    const safeName = escapeHtml(toName || 'Citizen');
    const safeCategory = escapeHtml(category);

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 580px; margin: 0 auto; background-color: #131d38; border-radius: 12px; border: 1px solid #1e293b; overflow: hidden; }
        .header { background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%); padding: 25px 20px; text-align: center; color: #ffffff; }
        .content { padding: 30px; line-height: 1.6; color: #cbd5e1; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 22px;">🙏 Thank You for Your Feedback!</h1>
          <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;">Swasthya Sathi AI Team</p>
        </div>
        <div class="content">
          <h2 style="color: #ffffff; margin-top: 0;">Dear ${safeName},</h2>
          <p>Thank you for submitting your valuable feedback regarding <strong>${safeCategory}</strong>.</p>
          <p>Your input helps us continuously improve the public healthcare AI service for all citizens across Odisha. Our healthcare administration team reviews every feedback carefully.</p>
          <p style="font-size: 13px; color: #94a3b8;">If your feedback requires a direct resolution or follow-up, an officer will reach out to you via this email.</p>
        </div>
        <div class="footer">
          <p style="margin: 0 0 4px 0;">Health & Family Welfare Department, Government of Odisha</p>
          <p style="margin: 0;">Emergency Helpline: 108 | Health Advice: 104</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: [{ email: toEmail, name: toName }],
      subject: `🙏 Feedback Received — Swasthya Sathi AI`,
      htmlContent,
    });
  }

  /**
   * 5. Send Emergency Public Health Alert Broadcast Email
   */
  static async sendEmergencyBroadcastEmail(
    recipients: Array<{ email: string; name?: string }>,
    alertTitle: string,
    message: string,
    district: string = 'All Odisha Districts',
    guidelines: string[] = []
  ): Promise<{ success: boolean }> {
    const safeTitle = escapeHtml(alertTitle);
    const safeMessage = escapeHtml(message);
    const safeDistrict = escapeHtml(district);
    const safeGuidelines = guidelines.map(g => escapeHtml(g));

    const guidelineListHtml = safeGuidelines.length > 0
      ? `<div style="background: #0f172a; border-left: 4px solid #ef4444; padding: 15px; border-radius: 6px; margin: 15px 0;">
           <strong style="color: #f87171;">Recommended Citizen Precautions:</strong>
           <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #cbd5e1;">
             ${safeGuidelines.map((g) => `<li style="margin-bottom: 5px;">${g}</li>`).join('')}
           </ul>
         </div>`
      : '';

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #131d38; border-radius: 12px; border: 2px solid #ef4444; overflow: hidden; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 25px 20px; text-align: center; color: #ffffff; }
        .content { padding: 30px; line-height: 1.6; color: #cbd5e1; }
        .badge { background: #fee2e2; color: #991b1b; padding: 4px 10px; border-radius: 9999px; font-weight: 700; font-size: 12px; text-transform: uppercase; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; background: #0c1427; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="badge">🚨 OFFICIAL PUBLIC HEALTH ADVISORY</span>
          <h1 style="margin: 12px 0 0 0; font-size: 22px;">${safeTitle}</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Target District / Region: <strong>${safeDistrict}</strong></p>
        </div>
        <div class="content">
          <p style="font-size: 16px; color: #f8fafc; font-weight: 500;">Dear Citizen / ସମ୍ମାନନୀୟ ନାଗରିକ,</p>
          <p style="font-size: 15px; line-height: 1.7;">${safeMessage}</p>
          
          ${guidelineListHtml}

          <div style="background: #1e293b; border-radius: 8px; padding: 15px; margin-top: 25px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #38bdf8;">Need Immediate Emergency Medical Support?</p>
            <p style="margin: 0; font-size: 18px; font-weight: 800; color: #ef4444;">Dial 108 (Ambulance) | Dial 104 (Health Helpline)</p>
          </div>
        </div>
        <div class="footer">
          <p>Dispatched by Directorate of Public Health & Family Welfare, Odisha</p>
          <p>Swasthya Sathi AI Public Surveillance Network</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: recipients,
      subject: `🚨 [HEALTH ALERT] ${safeTitle} — ${safeDistrict}`,
      htmlContent,
    });
  }

  /**
   * 6. Send Emergency SOS Confirmation Email
   */
  static async sendEmergencySosConfirmation(
    toEmail: string,
    toName: string,
    locationText: string,
    emergencyType: string = 'Medical Emergency'
  ): Promise<{ success: boolean }> {
    const safeName = escapeHtml(toName || 'User');
    const safeLocation = escapeHtml(locationText);
    const safeEmergencyType = escapeHtml(emergencyType);

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b1329; color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 580px; margin: 0 auto; background-color: #131d38; border-radius: 12px; border: 1px solid #ef4444; overflow: hidden; }
        .header { background: #dc2626; padding: 25px 20px; text-align: center; color: #ffffff; }
        .content { padding: 30px; line-height: 1.6; color: #cbd5e1; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 22px;">🚑 108 Emergency SOS Dispatched</h1>
          <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;">Swasthya Sathi AI Rapid Response</p>
        </div>
        <div class="content">
          <h2 style="color: #ffffff; margin-top: 0;">Emergency Ticket Active</h2>
          <p>An emergency SOS alert was triggered for <strong>${safeName}</strong>.</p>
          <div style="background: #0f172a; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 0 0 6px 0;"><strong>Type:</strong> <span style="color: #f87171;">${safeEmergencyType}</span></p>
            <p style="margin: 0;"><strong>Incident Location:</strong> ${safeLocation}</p>
          </div>
          <p>The state emergency ambulance dispatch grid (108) has been alerted. Keep your phone line free for the dispatch coordinator call.</p>
        </div>
        <div class="footer">
          <p>Odisha Emergency Medical Ambulance Services (108)</p>
        </div>
      </div>
    </body>
    </html>
    `;

    return this.sendTransactionalEmail({
      to: [{ email: toEmail, name: toName }],
      subject: `🚑 [108 SOS DISPATCHED] Emergency Alert Confirmation`,
      htmlContent,
    });
  }
}
