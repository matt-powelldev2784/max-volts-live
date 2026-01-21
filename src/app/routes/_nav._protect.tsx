import useAuth from '@/lib/useAuth';
import { Navigate, Outlet } from 'react-router';

const ProtectedLayouts = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <></>;
  }

  if (!user) {
    localStorage.clear();
    sessionStorage.clear();

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayouts;
