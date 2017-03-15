import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Routes from '../views/routes';
import FontAwesome from 'react-fontawesome';

import './App.css';

//enable react router outside routes component
const LinkClick = (e, href) => {
	e.preventDefault();
	browserHistory.push(href);
}
const Link = (props) => (
	<li><a href={props.to} onClick={e => LinkClick(e, props.to)}>{props.children}</a></li>
);

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<Link to="/"><h1>enjam</h1></Link>
					<ul>
						<Link to="/jams"><h2>jams</h2></Link>
						<li><h2>-</h2></li>
						<Link to="/about"><h2>om enjam</h2></Link>
						<li><h2>-</h2></li>
						<Link to="/contact"><h2>kontakt</h2></Link>
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
