import React from 'react';
import { Router, Route } from 'react-router';

import FrontPage from './FrontPage/FrontPage';
import About from './About/About';
import Jams from './Jams/Jams';
import Contact from './Contact/Contact';
import TrumpTris from './Jams/GameJam/TrumpTris/TrumpTris';
import GameJam from './Jams/GameJam/GameJam';
import NotFound from './NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={FrontPage} />
    <Route path="/about" component={About} />
		<Route path="/jams" component={Jams} />
		<Route path="/contact" component={Contact} />
		<Route path="/gamejam" component={GameJam} />
		<Route path="/trump" component={TrumpTris} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;