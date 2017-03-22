import React, { Component } from 'react';
import EnPage from '../../components/EnPage';

import RaisedButton from 'material-ui/RaisedButton';

import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCNIXcLN5DF7MSf_0m4UPu9E4py7B2w6WQ",
	authDomain: "enjam-4069c.firebaseapp.com",
	databaseURL: "https://enjam-4069c.firebaseio.com",
	storageBucket: "enjam-4069c.appspot.com",
	messagingSenderId: "98163127583"
};

firebase.initializeApp(config);

window.firebase = firebase;

class Q extends Component{
	login = () => {
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.setCustomParameters({
			'display':'popup'
		});
		firebase.auth().signInWithRedirect(provider);
	}
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			console.log(user);
			this.forceUpdate();
		});
	}
	render = () => {		
		if (firebase.auth().currentUser === null)
			return (
				<EnPage style={{textAlign: 'center'}}>
					<RaisedButton label="login with facebook" primary={true} onTouchTap={this.login} />
				</EnPage>
			);
		
		return (
			<EnPage>
				<p>{firebase.auth().currentUser.displayName}</p>
			</EnPage>
		);
	}
}

export default Q;