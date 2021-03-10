import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Repository from '../components/Repository';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Repository} />
    </Switch>
  </Router>
);

export default Routes;
