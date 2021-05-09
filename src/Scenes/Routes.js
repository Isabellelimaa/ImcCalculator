import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import history from '../Configs/History'

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
