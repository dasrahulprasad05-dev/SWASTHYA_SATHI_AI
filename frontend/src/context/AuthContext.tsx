import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, LoginCredentials, RegisterData } from '../types';
import { MOCK_USER } from '../constants';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
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

    // Check active Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser((prev) => ({
          ...MOCK_USER,
          id: session.user.id,
          email: session.user.email || prev?.email || 'citizen@odisha.gov.in',
          name: session.user.user_metadata?.name || prev?.name || 'Rahul Mohapatra',
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
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          console.warn('Supabase auth sign in error:', error.message);
        } else if (data.user) {
          const loggedUser: User = {
            ...MOCK_USER,
            id: data.user.id,
            email: data.user.email || credentials.email,
            name: data.user.user_metadata?.name || 'Rahul Mohapatra',
          };
          setUser(loggedUser);
          return;
        }
      }

      // Local / Offline Simulation
      await new Promise((resolve) => setTimeout(resolve, 500));
      const loggedUser: User = {
        ...MOCK_USER,
        email: credentials.email,
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
      if (isSupabaseConfigured()) {
        const { data: authData, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              name: data.name,
              phone: data.phone,
              language: data.language,
            },
          },
        });

        if (error) {
          console.warn('Supabase signup warning:', error.message);
        } else if (authData.user) {
          const newUser: User = {
            ...MOCK_USER,
            id: authData.user.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            language: (data.language as 'en' | 'hi' | 'or') || 'en',
          };
          setUser(newUser);
          return;
        }
      }

      // Local / Offline Simulation
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newUser: User = {
        ...MOCK_USER,
        name: data.name,
        email: data.email,
        phone: data.phone,
        language: (data.language as 'en' | 'hi' | 'or') || 'en',
      };
      setUser(newUser);
      localStorage.setItem('auth_token', 'jwt_' + Date.now());
    } finally {
      setIsLoading(false);
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
