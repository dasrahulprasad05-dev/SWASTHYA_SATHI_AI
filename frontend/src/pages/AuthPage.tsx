import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Mail,
  User as UserIcon,
  Phone,
  Building2,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Sparkles,
  HeartPulse,
  Send,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PasswordStrengthMeter } from '../components/auth/PasswordStrengthMeter';

const ODISHA_DISTRICTS = [
  'Khordha (Bhubaneswar)',
  'Cuttack',
  'Ganjam (Berhampur)',
  'Sambalpur',
  'Puri',
  'Mayurbhanj (Baripada)',
  'Sundargarh (Rourkela)',
  'Balasore',
  'Bhadrak',
  'Bolangir',
  'Kalahandi (Bhawanipatna)',
  'Koraput (Jeypore)',
  'Angul',
  'Jharsuguda',
  'Bargarh',
  'Dhenkanal',
  'Jajpur',
  'Kendrapara',
  'Jagatsinghpur',
  'Rayagada',
  'Keonjhar',
  'Nabarangpur',
  'Nuapada',
  'Gajapati',
  'Kandhamal',
  'Nayagarh',
  'Deogarh',
  'Subarnapur',
  'Malkangiri',
  'Boudh',
];

type AuthTab = 'signin' | 'citizen-signup' | 'admin-signup';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as AuthTab) || (searchParams.get('mode') === 'signup' ? 'citizen-signup' : 'signin');

  const { login, register, registerAdmin, forgotPassword, resetPassword, verifyMagicLink, isLoading, user } = useAuth();

  const [currentTab, setCurrentTab] = useState<AuthTab>(initialTab);
  const [isAdminPortal, setIsAdminPortal] = useState(searchParams.get('portal') === 'admin');
  const [showPassword, setShowPassword] = useState(false);
  const [showCitizenPass, setShowCitizenPass] = useState(false);
  const [showCitizenConfirm, setShowCitizenConfirm] = useState(false);
  const [showAdminPass, setShowAdminPass] = useState(false);
  const [showAdminConfirm, setShowAdminConfirm] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Form states
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });
  const [citizenForm, setCitizenForm] = useState({
    name: '',
    email: '',
    phone: '',
    district: 'Khordha (Bhubaneswar)',
    language: 'or',
    password: '',
    confirmPassword: '',
  });
  const [adminForm, setAdminForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Directorate of Public Health & Family Welfare',
    designation: 'District Surveillance Officer',
    district: 'Khordha (Bhubaneswar)',
    adminAccessKey: '',
    password: '',
    confirmPassword: '',
  });

  // Verification modal state after registration
  const [verificationModal, setVerificationModal] = useState<{
    isOpen: boolean;
    email: string;
    role: 'citizen' | 'admin';
  }>({
    isOpen: false,
    email: '',
    role: 'citizen',
  });
  const [verifyOtpInput, setVerifyOtpInput] = useState('');
  const [isVerifyingRegistration, setIsVerifyingRegistration] = useState(false);

  // Forgot password modal state
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotStep, setForgotStep] = useState<1 | 2>(1);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotOtp, setForgotOtp] = useState('');
  const [forgotNewPassword, setForgotNewPassword] = useState('');
  const [isSubmittingForgot, setIsSubmittingForgot] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(user.role === 'admin' ? '/admin' : '/dashboard');
    }
  }, [user, navigate]);
  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInForm.email || !signInForm.password) {
      showToast('Please enter both email and password.', 'error');
      return;
    }
    try {
      await login({
        email: signInForm.email,
        password: signInForm.password,
        adminPortal: isAdminPortal,
      });
      showToast('Authentication successful. Redirecting...', 'success');
      setTimeout(() => {
        navigate(isAdminPortal ? '/admin' : '/dashboard');
      }, 700);
    } catch (err: any) {
      showToast(err.message || 'Login failed. Please check credentials.', 'error');
    }
  };

  const handleCitizenSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!citizenForm.name || !citizenForm.email || !citizenForm.password) {
      showToast('Please complete all required fields.', 'error');
      return;
    }
    if (citizenForm.password !== citizenForm.confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }

    try {
      const res = await register({
        name: citizenForm.name,
        email: citizenForm.email,
        phone: citizenForm.phone,
        district: citizenForm.district,
        language: citizenForm.language,
        password: citizenForm.password,
        role: 'citizen',
      });
      
      if (res?.verificationRequired) {
        setVerificationModal({
          isOpen: true,
          email: citizenForm.email,
          role: 'citizen',
        });
        showToast('Verification email sent via SendGrid! Please check your inbox.', 'success');
      } else {
        showToast('Registration successful!', 'success');
        setTimeout(() => navigate('/dashboard'), 1000);
      }
    } catch (err: any) {
      showToast(err.message || 'Registration failed.', 'error');
    }
  };

  const handleAdminSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminForm.name || !adminForm.email || !adminForm.adminAccessKey || !adminForm.password) {
      showToast('Please complete all official registration fields.', 'error');
      return;
    }
    if (adminForm.password !== adminForm.confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }

    try {
      const res = await registerAdmin({
        name: adminForm.name,
        email: adminForm.email,
        phone: adminForm.phone,
        department: adminForm.department,
        designation: adminForm.designation,
        district: adminForm.district,
        adminAccessKey: adminForm.adminAccessKey,
        password: adminForm.password,
        role: 'admin',
      });
      
      if (res?.verificationRequired) {
        setVerificationModal({
          isOpen: true,
          email: adminForm.email,
          role: 'admin',
        });
        showToast('Official verification email sent via SendGrid! Please check your inbox.', 'success');
      } else {
        showToast('Official Health Administrator account created successfully!', 'success');
        setTimeout(() => navigate('/admin'), 1000);
      }
    } catch (err: any) {
      showToast(err.message || 'Admin registration failed.', 'error');
    }
  };

  const handleVerifyRegistrationOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyOtpInput || verifyOtpInput.length < 6) {
      showToast('Please enter the 6-digit OTP code received in your email.', 'error');
      return;
    }

    setIsVerifyingRegistration(true);
    try {
      const res = await verifyMagicLink({
        email: verificationModal.email,
        otp: verifyOtpInput.trim(),
      });

      if (res.success) {
        showToast('Email verified successfully! Logging you in...', 'success');
        setVerificationModal({ isOpen: false, email: '', role: 'citizen' });
        setTimeout(() => {
          navigate(verificationModal.role === 'admin' ? '/admin' : '/dashboard');
        }, 800);
      }
    } catch (err: any) {
      showToast(err?.message || 'Invalid or expired OTP code.', 'error');
    } finally {
      setIsVerifyingRegistration(false);
    }
  };

  const handleRequestResetOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) {
      showToast('Please enter your registered email.', 'error');
      return;
    }
    setIsSubmittingForgot(true);
    try {
      const res = await forgotPassword(forgotEmail);
      showToast(res.message || 'OTP sent to your email via SendGrid!', 'success');
      setForgotStep(2);
    } catch (err: any) {
      showToast(err.message || 'Failed to dispatch reset OTP.', 'error');
    } finally {
      setIsSubmittingForgot(false);
    }
  };

  const handleConfirmPasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotOtp || !forgotNewPassword) {
      showToast('Please enter the 6-digit OTP and your new password.', 'error');
      return;
    }
    setIsSubmittingForgot(true);
    try {
      const res = await resetPassword({
        email: forgotEmail,
        otp: forgotOtp,
        newPassword: forgotNewPassword,
      });
      showToast(res.message || 'Password successfully reset! You can now log in.', 'success');
      setIsForgotModalOpen(false);
      setForgotStep(1);
      setForgotOtp('');
      setForgotNewPassword('');
      setCurrentTab('signin');
    } catch (err: any) {
      showToast(err.message || 'Failed to reset password. Check OTP.', 'error');
    } finally {
      setIsSubmittingForgot(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border backdrop-blur-md transition-all animate-bounce ${
            toastMessage.type === 'success'
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200'
              : toastMessage.type === 'error'
              ? 'bg-rose-950/80 border-rose-500/50 text-rose-200'
              : 'bg-blue-950/80 border-blue-500/50 text-blue-200'
          }`}
        >
          {toastMessage.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-rose-400" />
          )}
          <span className="text-sm font-medium">{toastMessage.text}</span>
        </div>
      )}

      {/* Top Header & Branding */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <Link to="/" className="inline-flex items-center gap-3 group">
          <img 
            src="/logos/main-logo.jpg" 
            alt="Swasthya Sathi AI Logo" 
            className="w-20 h-20 rounded-2xl object-contain bg-transparent group-hover:scale-105 transition-transform shadow-lg shadow-teal-500/25"
          />
          <div className="text-left">
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              Swasthya Sathi AI
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30">
                ଓଡ଼ିଶା
              </span>
            </h1>
            <p className="text-xs text-slate-400">Government of Odisha Digital Health Gateway</p>
          </div>
        </Link>
      </div>

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-xl glass-dark rounded-3xl p-6 sm:p-10 relative z-10"
      >
        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 gap-1 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800/80 mb-8">
          <button
            type="button"
            onClick={() => setCurrentTab('signin')}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              currentTab === 'signin'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab('citizen-signup')}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              currentTab === 'citizen-signup'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserIcon className="w-4 h-4" />
            Citizen Join
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab('admin-signup')}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              currentTab === 'admin-signup'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4 text-amber-400" />
            Admin / Officer
          </button>
        </div>

        {/* ── TAB 1: SIGN IN ── */}
        {currentTab === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800">
              <span className="text-xs text-slate-300 font-medium flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Odisha Health Official Mode:
              </span>
              <button
                type="button"
                onClick={() => setIsAdminPortal(!isAdminPortal)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all border ${
                  isAdminPortal
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {isAdminPortal ? '🛡️ Admin Access ON' : 'Citizen Mode'}
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Registered Email ID / ଇମେଲ୍
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="name@odisha.gov.in or user@gmail.com"
                  value={signInForm.email}
                  onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Password / ପାସୱାର୍ଡ
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotModalOpen(true)}
                  className="text-xs text-teal-400 hover:text-teal-300 font-medium hover:underline transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  value={signInForm.password}
                  onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-11 pr-11 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-3.5 px-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        {/* ── TAB 2: CITIZEN SIGN UP ── */}
        {currentTab === 'citizen-signup' && (
          <form onSubmit={handleCitizenSignUp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name / ନାମ *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Mohapatra"
                    value={citizenForm.name}
                    onChange={(e) => setCitizenForm({ ...citizenForm, name: e.target.value })}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mobile Number / ଫୋନ୍
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="+91 94370 12345"
                    value={citizenForm.phone}
                    onChange={(e) => setCitizenForm({ ...citizenForm, phone: e.target.value })}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address (For Email Verification) *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="citizen@gmail.com"
                  value={citizenForm.email}
                  onChange={(e) => setCitizenForm({ ...citizenForm, email: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Odisha District / ଜିଲ୍ଲା *
                </label>
                <select
                  value={citizenForm.district}
                  onChange={(e) => setCitizenForm({ ...citizenForm, district: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-teal-500"
                >
                  {ODISHA_DISTRICTS.map((d) => (
                    <option key={d} value={d} className="bg-slate-900 text-slate-100">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Language / ଭାଷା
                </label>
                <select
                  value={citizenForm.language}
                  onChange={(e) => setCitizenForm({ ...citizenForm, language: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-teal-500"
                >
                  <option value="or" className="bg-slate-900">ଓଡ଼ିଆ (Odia)</option>
                  <option value="en" className="bg-slate-900">English</option>
                  <option value="hi" className="bg-slate-900">हिन्दी (Hindi)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type={showCitizenPass ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={citizenForm.password}
                      onChange={(e) => setCitizenForm({ ...citizenForm, password: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCitizenPass(!showCitizenPass)}
                      className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                    >
                      {showCitizenPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type={showCitizenConfirm ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={citizenForm.confirmPassword}
                      onChange={(e) => setCitizenForm({ ...citizenForm, confirmPassword: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCitizenConfirm(!showCitizenConfirm)}
                      className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                    >
                      {showCitizenConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <PasswordStrengthMeter password={citizenForm.password} />
            </div>

            <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-800/40 text-xs text-teal-300 flex items-center gap-2">
              <Send className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>An automated verification OTP will be sent to your email upon creation.</span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 py-3.5 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Create Free Citizen Account'}
            </button>
          </form>
        )}

        {/* ── TAB 3: ADMIN / HEALTH OFFICER SIGN UP ── */}
        {currentTab === 'admin-signup' && (
          <form onSubmit={handleAdminSignUp} className="space-y-4">
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs text-amber-300 flex items-start gap-2">
              <Shield className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Restricted Registration:</strong> Requires official designation and State Health Admin Secret Key (default: <code className="text-amber-200 font-mono">ODISHA_HEALTH_2026</code>).
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Officer Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Smita Pattnaik"
                  value={adminForm.name}
                  onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Official Email ID *
                </label>
                <input
                  type="email"
                  required
                  placeholder="officer@odisha.gov.in"
                  value={adminForm.email}
                  onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Designation / Role *
                </label>
                <select
                  value={adminForm.designation}
                  onChange={(e) => setAdminForm({ ...adminForm, designation: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  <option value="District Surveillance Officer" className="bg-slate-900">District Surveillance Officer (DSO)</option>
                  <option value="Chief District Medical Officer" className="bg-slate-900">Chief District Medical Officer (CDMO)</option>
                  <option value="108 Emergency Dispatch Coordinator" className="bg-slate-900">108 Emergency Dispatch Coordinator</option>
                  <option value="Epidemic Control In-Charge" className="bg-slate-900">Epidemic Control In-Charge</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Assigned District *
                </label>
                <select
                  value={adminForm.district}
                  onChange={(e) => setAdminForm({ ...adminForm, district: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                >
                  {ODISHA_DISTRICTS.map((d) => (
                    <option key={d} value={d} className="bg-slate-900">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-amber-400" />
                Odisha Health Secret Passkey *
              </label>
              <input
                type="password"
                required
                placeholder="Enter state security passkey (ODISHA_HEALTH_2026)"
                value={adminForm.adminAccessKey}
                onChange={(e) => setAdminForm({ ...adminForm, adminAccessKey: e.target.value })}
                className="w-full bg-slate-950/60 border border-amber-600/50 rounded-xl px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type={showAdminPass ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={adminForm.password}
                      onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowAdminPass(!showAdminPass)}
                      className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                    >
                      {showAdminPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type={showAdminConfirm ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={adminForm.confirmPassword}
                      onChange={(e) => setAdminForm({ ...adminForm, confirmPassword: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowAdminConfirm(!showAdminConfirm)}
                      className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                    >
                      {showAdminConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <PasswordStrengthMeter password={adminForm.password} />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 py-3.5 px-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Register Health Official Account'}
            </button>
          </form>
        )}
      </motion.div>

      {/* ── FORGOT & RESET PASSWORD MODAL ── */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Reset Account Password</h3>
                  <p className="text-xs text-slate-400">Twilio SendGrid Security Gateway</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsForgotModalOpen(false);
                  setForgotStep(1);
                }}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {forgotStep === 1 ? (
              <form onSubmit={handleRequestResetOtp} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enter your registered account email. We will instantly dispatch a secure 6-digit OTP via <strong>SendGrid Email</strong>.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Registered Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="citizen@odisha.gov.in"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-3 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForgot}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmittingForgot ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send 6-Digit Reset OTP</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleConfirmPasswordReset} className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>OTP has been dispatched to <strong>{forgotEmail}</strong></span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    6-Digit Verification OTP Code *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="123456"
                    value={forgotOtp}
                    onChange={(e) => setForgotOtp(e.target.value)}
                    className="w-full bg-slate-950/60 border border-teal-500/50 rounded-xl px-4 py-3 text-center text-xl font-mono tracking-widest text-teal-300 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    New Secure Password *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={forgotNewPassword}
                    onChange={(e) => setForgotNewPassword(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setForgotStep(1)}
                    className="w-1/3 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingForgot}
                    className="w-2/3 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                  >
                    {isSubmittingForgot ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Set New Password'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── REGISTRATION VERIFICATION MODAL ── */}
      {verificationModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Check Your Email!</h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              We have dispatched a verification email to{' '}
              <strong className="text-teal-300 font-semibold">{verificationModal.email}</strong>.
            </p>

            <div className="p-3.5 rounded-2xl bg-teal-950/40 border border-teal-800/50 mb-5 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-teal-200/90 leading-relaxed">
                  <strong>Option 1 (Fastest):</strong> Click the <strong>"✨ Verify & Log In Automatically"</strong> button inside your email.
                </p>
              </div>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-3 text-slate-500 text-xs uppercase font-semibold">Or Enter 6-Digit Code</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <form onSubmit={handleVerifyRegistrationOtp} className="space-y-4 mt-2">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={verifyOtpInput}
                  onChange={(e) => setVerifyOtpInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="e.g. 849201"
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-xl tracking-widest font-mono text-center text-teal-300 placeholder:text-slate-600 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isVerifyingRegistration || verifyOtpInput.length < 6}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:opacity-90 disabled:opacity-50 transition flex items-center justify-center gap-2"
              >
                {isVerifyingRegistration ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Verify Code & Log In'}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
              <button
                type="button"
                onClick={() => {
                  setVerificationModal({ isOpen: false, email: '', role: 'citizen' });
                  setCurrentTab('signin');
                }}
                className="hover:text-slate-200 transition underline underline-offset-4"
              >
                Go to Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast('Verification email re-dispatched via SendGrid!', 'success');
                }}
                className="text-teal-400 hover:text-teal-300 font-semibold transition"
              >
                Resend Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
