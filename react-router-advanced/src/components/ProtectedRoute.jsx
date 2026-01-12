import { Navigate } from 'react-router-dom';

// In a real app, useAuth() would come from a Context
const useAuth = () => {
  // Simulate authentication status (Change to false to test protection)
  return { isAuthenticated: true }; 
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to home page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the child component
  return children;
};

export default ProtectedRoute;
