import React from 'react';
import mobile from 'is-mobile';

import EnPage from '../../../../components/EnPage';
import GameJamPage from '../GameJamPage';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'react-router';

const eventLink = "https://www.facebook.com/events/805414926263448/";

const style = {
	width: '500px',
	height: '500px',
	border: 'none',
	overflow: 'hidden'
};

const TrumpTris = () => {
	if (!mobile()){
		return <div style={{marginBottom: '20px', textAlign: 'center'}}>
			<p>Trump: "Build a wall with 200 points in 2 minutes or you're fired!" <br/> (Virker bedst i Firefox og Chrome)</p>
			<iframe src="https://trump.enjam.dk" style={style} scrolling="no" />
			<p>
				Spillet er lavet som reklame for Gamejammet i foråret 2017.<br/>
				Du kan se mere om jammet <Link to="/gamejam">her</Link> og på facebook.
			</p>
			<a href={eventLink} target="_blank">
				<RaisedButton label="Facebook" primary={true} />
			</a>
		</div>;
	}else{
		return <div>
			<EnPage>
				<p>Du kan desværre kun prøve spillet på en computer.</p>
			</EnPage>
			<GameJamPage/>
		</div>
	}
};

export default TrumpTris;
