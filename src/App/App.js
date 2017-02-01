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
				</header>
				<div className="main">
					<Routes history={browserHistory} />
				</div>
				<footer>
					<a href="https://www.facebook.com/Enjam-372621173107851/">
						<FontAwesome name='facebook-square' size='2x' className='fb-button' />
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
