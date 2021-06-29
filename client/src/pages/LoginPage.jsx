import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../auth/useAuth';

const userCredentials = {
    id: 1,
    name: 'John Smith',
    email: 'john@gmail.com',
    role: 'Regular'
};

export const LoginPage = () => {
    const location = useLocation();

    const { login } = useAuth();

    const handleLogin = () => {
        login(
            userCredentials,
            location.state ? location.state.from : location.state
        );
    };

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};
