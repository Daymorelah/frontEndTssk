import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './homePage';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default App;
