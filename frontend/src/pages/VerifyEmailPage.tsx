import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const VerifyEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { verifyMagicLink, verifyOTP, user, isAuthenticated } = useAuth();

  const emailParam = searchParams.get('email') || '';
  const tokenParam = searchParams.get('token') || '';
  const otpParam = searchParams.get('otp') || '';

  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [errorMessage, setErrorMessage] = useState('');
  const [manualOtp, setManualOtp] = useState(otpParam);
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function performAutoVerification() {
      if (!emailParam || (!tokenParam && !otpParam)) {
        if (isMounted) {
          setStatus('error');
          setErrorMessage('Invalid verification link. Please check your email or enter your 6-digit code manually below.');
        }
        return;
      }

      try {
        const res = await verifyMagicLink({
          email: emailParam,
          token: tokenParam || undefined,
          otp: otpParam || undefined,
        });

        if (isMounted && res.success) {
          setStatus('success');
          setTimeout(() => {
            if (res.user?.role === 'admin') {
              navigate('/admin', { replace: true });
            } else {
              navigate('/dashboard', { replace: true });
            }
          }, 2200);
        }
      } catch (err: any) {
        if (isMounted) {
          setStatus('error');
          setErrorMessage(err?.message || 'Verification link expired or invalid. Please enter your 6-digit OTP below.');
        }
      }
    }

    performAutoVerification();

    return () => {
      isMounted = false;
    };
  }, [emailParam, tokenParam, otpParam]);

  const handleManualVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailParam || !manualOtp || manualOtp.length < 6) return;

    setIsSubmittingManual(true);
    try {
      const res = await verifyMagicLink({
        email: emailParam,
        otp: manualOtp.trim(),
      });

      if (res.success) {
        setStatus('success');
        setTimeout(() => {
          if (res.user?.role === 'admin') {
            navigate('/admin', { replace: true });
          } else {
            navigate('/dashboard', { replace: true });
          }
        }, 1500);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Invalid 6-digit code.');
    } finally {
      setIsSubmittingManual(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl text-center relative z-10"
      >
        {/* Top Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-black text-white tracking-tight mb-2">
          Swasthya Sathi AI
        </h1>
        <p className="text-xs text-slate-400 font-medium mb-8">
          Government of Odisha Public Health Initiative
        </p>

        {/* State: Verifying */}
        {status === 'verifying' && (
          <div className="py-8 flex flex-col items-center">
            <Loader2 className="w-12 h-12 text-teal-400 animate-spin mb-4" />
            <h2 className="text-lg font-bold text-slate-200 mb-1">Verifying Your Account...</h2>
            <p className="text-xs text-slate-400 max-w-xs">
              Authenticating <span className="text-teal-300 font-semibold">{emailParam || 'your email'}</span> and generating your secure health session.
            </p>
          </div>
        )}

        {/* State: Success */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Email Successfully Verified!</h2>
            <p className="text-xs text-emerald-300 font-medium mb-6">
              Welcome to Swasthya Sathi AI. Logging you in automatically...
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
              <span>Redirecting to Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse text-teal-400" />
            </div>
          </motion.div>
        )}

        {/* State: Error / Manual Entry */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-left"
          >
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/50 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-rose-200 mb-0.5">Verification Note</h3>
                <p className="text-xs text-rose-300/90 leading-relaxed">{errorMessage}</p>
              </div>
            </div>

            <form onSubmit={handleManualVerify} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Enter 6-Digit Email OTP
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    maxLength={6}
                    value={manualOtp}
                    onChange={(e) => setManualOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 739201"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-lg tracking-widest font-mono text-white text-center placeholder:text-slate-600 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingManual || manualOtp.length < 6}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:opacity-90 disabled:opacity-50 transition flex items-center justify-center gap-2"
              >
                {isSubmittingManual ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify & Continue'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/auth" className="text-xs text-slate-400 hover:text-teal-300 underline underline-offset-4">
                Back to Sign In / Register
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;
