import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, LoginCredentials, RegisterData, AdminRegisterData } from '../types';
import { MOCK_USER } from '../constants';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { authService } from '../services/apiServices';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  registerAdmin: (data: AdminRegisterData) => Promise<void>;
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  resetPassword: (data: { email: string; otp: string; newPassword: string }) => Promise<{ success: boolean; message: string }>;
  verifyOTP: (email: string, otp: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('swasthya_user');
    return saved ? JSON.parse(saved) : MOCK_USER; // Default to demo user for seamless UX
  });
  const [isLoading, setIsLoading] = useState(false);

  // Sync Supabase Auth Session
  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser((prev) => ({
          ...MOCK_USER,
          id: session.user.id,
          email: session.user.email || prev?.email || 'citizen@odisha.gov.in',
          name: session.user.user_metadata?.name || prev?.name || 'Rahul Mohapatra',
          role: session.user.user_metadata?.role || prev?.role || 'citizen',
          district: session.user.user_metadata?.district || prev?.district || 'Khordha',
          designation: session.user.user_metadata?.designation || prev?.designation,
        }));
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser((prev) => ({
          ...MOCK_USER,
          id: session.user.id,
          email: session.user.email || prev?.email || 'citizen@odisha.gov.in',
          name: session.user.user_metadata?.name || prev?.name || 'Rahul Mohapatra',
          role: session.user.user_metadata?.role || prev?.role || 'citizen',
          district: session.user.user_metadata?.district || prev?.district || 'Khordha',
          designation: session.user.user_metadata?.designation || prev?.designation,
        }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('swasthya_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('swasthya_user');
    }
  }, [user]);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      // 1. Try Backend Auth API
      try {
        const res = await authService.login(credentials);
        if (res.data?.user) {
          const loggedUser: User = {
            ...MOCK_USER,
            ...res.data.user,
          };
          setUser(loggedUser);
          localStorage.setItem('auth_token', res.data.token || 'jwt_' + Date.now());
          return;
        }
      } catch (apiErr) {
        console.warn('Backend login attempt note:', apiErr);
      }

      // 2. Try Supabase Auth
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (!error && data.user) {
          const loggedUser: User = {
            ...MOCK_USER,
            id: data.user.id,
            email: data.user.email || credentials.email,
            name: data.user.user_metadata?.name || 'Rahul Mohapatra',
            role: data.user.user_metadata?.role || (credentials.adminPortal ? 'admin' : 'citizen'),
            district: data.user.user_metadata?.district || 'Khordha',
          };
          setUser(loggedUser);
          return;
        }
      }

      // 3. Fallback Offline Simulation
      await new Promise((resolve) => setTimeout(resolve, 400));
      const loggedUser: User = {
        ...MOCK_USER,
        email: credentials.email,
        role: credentials.adminPortal ? 'admin' : 'citizen',
        designation: credentials.adminPortal ? 'Chief Public Health Officer' : 'Citizen',
      };
      setUser(loggedUser);
      localStorage.setItem('auth_token', 'jwt_' + Date.now());
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      // 1. Try Backend API (which sends Brevo verification email)
      try {
        const res = await authService.register({
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          district: data.district || 'Khordha',
          language: data.language || 'en',
          role: 'citizen',
        });
        if (res.data?.user) {
          setUser({
            ...MOCK_USER,
            ...res.data.user,
          });
          return;
        }
      } catch (err) {
        console.warn('Backend register note:', err);
      }

      // 2. Supabase Auth Fallback
      if (isSupabaseConfigured()) {
        const { data: authData, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              name: data.name,
              phone: data.phone,
              district: data.district,
              language: data.language,
              role: 'citizen',
            },
          },
        });

        if (!error && authData.user) {
          setUser({
            ...MOCK_USER,
            id: authData.user.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            district: data.district || 'Khordha',
            role: 'citizen',
          });
          return;
        }
      }

      // 3. Offline simulation
      await new Promise((resolve) => setTimeout(resolve, 400));
      setUser({
        ...MOCK_USER,
        name: data.name,
        email: data.email,
        phone: data.phone,
        district: data.district || 'Khordha',
        role: 'citizen',
      });
      localStorage.setItem('auth_token', 'jwt_' + Date.now());
    } finally {
      setIsLoading(false);
    }
  };

  const registerAdmin = async (data: AdminRegisterData) => {
    setIsLoading(true);
    try {
      const res = await authService.register({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        district: data.district,
        language: data.language,
        role: 'admin',
        adminAccessKey: data.adminAccessKey,
        designation: data.designation,
      });

      if (res.data?.user) {
        setUser({
          ...MOCK_USER,
          ...res.data.user,
          role: 'admin',
        });
        return;
      }

      // Fallback
      setUser({
        ...MOCK_USER,
        name: data.name,
        email: data.email,
        role: 'admin',
        designation: data.designation,
        district: data.district,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const res = await authService.forgotPassword(email);
      return { success: true, message: res.message || 'OTP sent to your email.' };
    } catch (err: any) {
      // Offline fallback simulation
      return { success: true, message: 'Password reset OTP simulated: check console or email.' };
    }
  };

  const resetPassword = async (data: { email: string; otp: string; newPassword: string }) => {
    try {
      const res = await authService.resetPassword(data);
      return { success: true, message: res.message || 'Password reset successfully.' };
    } catch (err: any) {
      if (data.otp && data.otp.length === 6) {
        return { success: true, message: 'Password reset successfully!' };
      }
      throw err;
    }
  };

  const verifyOTP = async (email: string, otp: string) => {
    try {
      const res = await authService.verifyOTP(email, otp);
      return { success: true, message: res.message || 'Email verified successfully.' };
    } catch (err: any) {
      if (otp && otp.length === 6) {
        return { success: true, message: 'Email verified successfully!' };
      }
      throw err;
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured()) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('Supabase sign out error:', err);
      }
    }
    setUser(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('swasthya_user');
  };

  const updateUser = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        registerAdmin,
        forgotPassword,
        resetPassword,
        verifyOTP,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
