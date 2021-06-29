import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const history = useHistory();

    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {
        setUser(userCredentials);
        fromLocation && history.push(fromLocation)
    }

    const logout = (data) => setUser(null);

    const updateUser = (data) => {
        setUser({
            ...user,
            ...data
        });
    }

    const isLogged = () => !!user;

    const hasRole = (role) => user && user.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
        updateUser
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
