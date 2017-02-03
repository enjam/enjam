import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Routes from '../views/routes';
import FontAwesome from 'react-fontawesome';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<a href="/"><h1>enjam</h1></a>
					<ul>
						<li><a href="/jams"><h2>jams</h2></a></li>
						<li><h2>-</h2></li>
						<li><a href="/about"><h2>om enjam</h2></a></li>
						<li><h2>-</h2></li>
						<li><a href="/contact"><h2>kontakt</h2></a></li>
					</ul>
				</header>
				<div className="main">
					<Routes history={browserHistory} />
				</div>
				<footer>
					<a href="https://www.facebook.com/enjam.sdu/">
						<FontAwesome name='facebook-square' size='2x' className='fb-button' />
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
