import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import HospitalFinderPage from './pages/HospitalFinderPage';
import HealthHubPage from './pages/HealthHubPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';
import DashboardPage from './pages/DashboardPage';
import MedicineGuidePage from './pages/MedicineGuidePage';
import HealthRecordsPage from './pages/HealthRecordsPage';
import GovernmentSchemesPage from './pages/GovernmentSchemesPage';
import EmergencyHelpPage from './pages/EmergencyHelpPage';
import VoiceAssistantPage from './pages/VoiceAssistantPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SymptomCheckerPage from './pages/SymptomCheckerPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
        <Route path="/auth" element={<PageWrapper><AuthPage /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><AuthPage /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><AuthPage /></PageWrapper>} />
        <Route path="/chat" element={<PageWrapper><ChatPage /></PageWrapper>} />
        <Route path="/symptoms" element={<PageWrapper><SymptomCheckerPage /></PageWrapper>} />
        <Route path="/hospitals" element={<PageWrapper><HospitalFinderPage /></PageWrapper>} />
        <Route path="/health-hub" element={<PageWrapper><HealthHubPage /></PageWrapper>} />
        <Route path="/disease/:id" element={<PageWrapper><DiseaseDetailPage /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><ProtectedRoute requiredRole="citizen"><DashboardPage /></ProtectedRoute></PageWrapper>} />
        <Route path="/medicines" element={<PageWrapper><MedicineGuidePage /></PageWrapper>} />
        <Route path="/records" element={<PageWrapper><HealthRecordsPage /></PageWrapper>} />
        <Route path="/schemes" element={<PageWrapper><GovernmentSchemesPage /></PageWrapper>} />
        <Route path="/emergency" element={<PageWrapper><EmergencyHelpPage /></PageWrapper>} />
        <Route path="/voice" element={<PageWrapper><VoiceAssistantPage /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><ProtectedRoute requiredRole="admin"><AdminPage /></ProtectedRoute></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><ProfilePage /></PageWrapper>} />
        <Route path="/settings" element={<PageWrapper><SettingsPage /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    style={{ minHeight: '100vh', width: '100%' }}
  >
    {children}
  </motion.div>
);

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster 
            position="top-right" 
            toastOptions={{ 
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#f8fafc',
                border: '1px solid #334155'
              }
            }} 
          />
          <AnimatedRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
