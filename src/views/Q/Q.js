import React, { Component } from 'react';
import EnPage from '../../components/EnPage';

import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Up from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

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

var ctrls;

class Q extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: null
		};
	}
	isLeft = () => {
		const s = this.state;
		return s.leftPlayer === s.user.uid;
	}
	isRight = () => {
		const s = this.state;
		return s.rightPlayer === s.user.uid;
	}
	isPlaying = () => {
		return this.isLeft() || this.isRight();
	}
	login = () => {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	}
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({user});
			if (user){
				const pp = firebase.database().ref('pingpong');
				let usr = pp.child('activeUsers/' + user.uid);
				usr.onDisconnect().remove();
				usr.set(true);
				ctrls = pp.child('controls');
				ctrls.child('leftPlayer').on('value', snapshot => {
					this.setState({
						leftPlayer: snapshot.val()
					});
					if (this.isLeft()){
						ctrls.child('leftName').set(this.state.user.displayName);
						ctrls.child('leftImage').set(this.state.user.photoURL);
					}
				});
				ctrls.child('rightPlayer').on('value', snapshot => {
					this.setState({
						rightPlayer: snapshot.val()
					});
					if (this.isRight()){
						ctrls.child('rightName').set(this.state.user.displayName);
						ctrls.child('rightImage').set(this.state.user.photoURL);
					}
				});
			}
		});
	}
	setDirection = (val) => {
		if (this.isLeft()){
			ctrls.child('leftDirection').set(val);
		}else if(this.isRight()){
			ctrls.child('rightDirection').set(val);
		}
	}
	render = () => {
		const s = this.state;
		
		console.log(s);
		
		if (!s.user)
			return (
				<EnPage style={{textAlign: 'center'}}>
					<RaisedButton label="login with facebook" 
						primary={true} onTouchTap={this.login} />
				</EnPage>
			);
		
		if (!this.isPlaying()) 
			return (
				<EnPage style={{textAlign: 'center'}}>
					<p>Hej {s.user.displayName} <br/>
						Du er i kø..</p>
				</EnPage>
			);
		
		return (
			<EnPage style={{textAlign: 'center'}}>
				<p>Hej {s.user.displayName} <br/>
				Du er til {this.isLeft() ? 'venstre' : 'højre'}</p>
				<div style={{display: 'flex', flexDirection:'column'}}>
					<div>
						<FloatingActionButton
							onMouseDown={() => this.setDirection(1)}
							onMouseUp={() => this.setDirection(0)}
							>
							<Up/>
						</FloatingActionButton>
					</div>
					<br/>
					<div>
						<FloatingActionButton
							onMouseDown={() => this.setDirection(-1)}
							onMouseUp={() => this.setDirection(0)}
							>
							<Down/>
						</FloatingActionButton>
					</div>
				</div>
			</EnPage>
		);
	}
}

export default Q;