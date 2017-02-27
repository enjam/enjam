import React from 'react';
import {Link} from 'react-router';
import mobile from 'is-mobile';

import GameJam from '../GameJam';

const style = {
	width: '500px',
	height: '500px',
	border: 'none'
};

const TrumpTris = () => {
	let topContent;
	if (!mobile()){
		topContent = <div>
				<p>Trump: "Build a wall with 200 points in 2 minutes or you're fired!"</p>
				<iframe src="http://trump.enjam.dk" style={style}>
				</iframe>
			</div>;
	}else{
		topContent = <div>
			<p>Prøv spillet på en computer.</p>
		</div>
	}
	
	return <div className="row">
		{topContent}
		<p>(Virker bedst i Firefox og Chrome)</p>
		<GameJam />
	</div>
};

export default TrumpTris;


