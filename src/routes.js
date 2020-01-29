import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import JokePage from './pages/joke';

const Routes = () => (
    <BrowserRouter basename="/joketem-react/">
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/joke`} component={JokePage}></Route>
            <Route path={`${process.env.PUBLIC_URL}/`} component={HomePage}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;