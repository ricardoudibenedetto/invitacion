import { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';
import { AuthI } from '../types/types';

interface Props {
    children: ReactElement
}
export const PublicRoute: React.FC<Props> = ({ children }) => {

    const { logged } = useContext<AuthI>( AuthContext );

    return (!logged)
        ? children
        : <Navigate to="/home" />
}
