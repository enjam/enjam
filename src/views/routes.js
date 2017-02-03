import React from 'react';
import { Router, Route } from 'react-router';

import FrontPage from './FrontPage/FrontPage';
import About from './About/About';
import Jams from './Jams/Jams';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={FrontPage} />
    <Route path="/about" component={About} />
		<Route path="/jams" component={Jams} />
		<Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;