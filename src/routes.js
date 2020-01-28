import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/Home';
import JokePage from './pages/joke/Joke';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/joke" component={JokePage}></Route>
            <Route path="/" component={HomePage}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;