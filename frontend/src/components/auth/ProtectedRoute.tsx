import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'citizen' | 'health_officer';
  redirectTo?: string;
}

/**
 * Route guard that checks authentication and optionally user role.
 * - If not authenticated → redirect to /login
 * - If role doesn't match → redirect admin to /admin, citizen to /dashboard
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  redirectTo,
}) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to={redirectTo || '/login'} replace />;
  }

  if (requiredRole) {
    if (requiredRole === 'admin' && user.role !== 'admin') {
      return <Navigate to="/dashboard" replace />;
    }
    if (requiredRole === 'citizen' && user.role === 'admin') {
      return <Navigate to="/admin" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
