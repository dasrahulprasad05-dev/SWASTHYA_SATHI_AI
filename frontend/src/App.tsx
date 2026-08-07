import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/hospitals" element={<HospitalFinderPage />} />
            <Route path="/health-hub" element={<HealthHubPage />} />
            <Route path="/disease/:id" element={<DiseaseDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/medicines" element={<MedicineGuidePage />} />
            <Route path="/records" element={<HealthRecordsPage />} />
            <Route path="/schemes" element={<GovernmentSchemesPage />} />
            <Route path="/emergency" element={<EmergencyHelpPage />} />
            <Route path="/voice" element={<VoiceAssistantPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
