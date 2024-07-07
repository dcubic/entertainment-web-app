import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/utils';
import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
    return isAuthenticated() ? children : <Navigate to="/login" replace />
}

export default PrivateRoute;