import React from 'react';

import { Switch, Route, HashRouter } from 'react-router-dom';

import HomePage from './pages/home';
import JokePage from './pages/joke';

const Routes = () => (
    <HashRouter basename="/joketem-react/">
        <Switch>
            <Route path={`/joke`} component={JokePage}></Route>
            <Route path={`/`} component={HomePage}></Route>
        </Switch>
    </HashRouter>
);

export default Routes;