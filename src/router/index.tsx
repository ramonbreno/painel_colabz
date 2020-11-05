import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardModule from '../modules/dashboard';
import LoginModule from '../modules/login';

const Routers = () => {
    return (
        <Router>
            <Route exact path={'/login'} component={LoginModule} />
            <Route exact path={'/dashboard'} component={DashboardModule} />
        </Router>
    );
}

export default Routers;