import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './auth/AuthProvider';
import { Layout } from './components/layouts/Layout';

export const App = () => (
    <Router>
        <AuthProvider>
            <Layout>
                <AppRouter />
            </Layout>
        </AuthProvider>
    </Router>
);
