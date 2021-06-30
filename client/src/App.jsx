import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './auth/AuthProvider';
import { Layout } from './components/layouts/Layout';

export const App = () => (
    <Fragment>
        <Router>
            <AuthProvider>
                <Layout>
                    <AppRouter />
                </Layout>
            </AuthProvider>
        </Router>
        <ToastContainer />
    </Fragment>
);
