import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthContext';

const PrivateRoute = ({ path, element }) => {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;
