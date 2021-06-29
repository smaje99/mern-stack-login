import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../auth/useAuth';
import routes from '../helpers/routes';

export const PublicRoute = (props) => {
    const { isLogged } = useAuth();

    if (isLogged()) return <Redirect to={routes.projects} />;

    return <Route {...props}/>;
};
