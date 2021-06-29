import React, { Fragment } from 'react';

import { Navigation } from '../Navigation';

export const Layout = ({ children }) => (
    <Fragment>
        <Navigation />
        {children}
    </Fragment>
);
