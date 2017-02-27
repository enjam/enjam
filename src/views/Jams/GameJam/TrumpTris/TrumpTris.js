import React from 'react';
import {Link} from 'react-router';

import GameJam from '../GameJam';

const style = {
	width: '500px',
	height: '500px',
	border: 'none'
};

const TrumpTris = () => (
	<div className="row">
		<p>Trump: "Build a wall with 200 points in 2 minutes or you're fired!"</p>
		<iframe src="http://trump.enjam.dk" style={style}>
		</iframe>
		<GameJam />
	</div>
);

export default TrumpTris;


