import React from 'react';
import { Router, Route } from 'react-router';

import FrontPage from './FrontPage/FrontPage';
import About from './About/About';
import Jams from './Jams/Jams';
import Contact from './Contact/Contact';
import TrumpTris from './Jams/GameJam/TrumpTris/TrumpTris';
import GameJamPage from './Jams/GameJam/GameJamPage';
import IoTjamPage from './Jams/IoTjam/IoTjamPage';
import NotFound from './NotFound/NotFound';
import Q from './Q/Q';
import Pingpong from './Jams/GameJam/Pingpong';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={FrontPage} />
    <Route path="/about" component={About} />
		<Route path="/jams" component={Jams} />
		<Route path="/contact" component={Contact} />
		<Route path="/gamejam" component={GameJamPage} />
		<Route path="/iotjam" component={IoTjamPage} />
		<Route path="/pingponggame" component={Pingpong} />
		<Route path="/q" component={Q} />
		<Route path="/trump" component={TrumpTris} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;