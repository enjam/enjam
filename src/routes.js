import React from 'react';
import { Router, Route } from 'react-router';

import FrontPage from './components/FrontPage/FrontPage';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={FrontPage} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;