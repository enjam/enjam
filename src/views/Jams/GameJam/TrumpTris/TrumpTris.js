import React from 'react';
import {Link} from 'react-router';
import mobile from 'is-mobile';

import GameJam from '../GameJam';
import EnButton from '../../../../components/EnButton/EnButton';

const eventLink = "https://www.facebook.com/events/805414926263448/";

const style = {
	width: '500px',
	height: '500px',
	border: 'none',
	overflow: 'hidden'
};

const TrumpTris = () => {
	if (!mobile()){
		return <div>
			<p>Trump: "Build a wall with 200 points in 2 minutes or you're fired!" <br/> (Virker bedst i Firefox og Chrome)</p>
			<iframe src="http://trump.enjam.dk" style={style} scrolling="no" />
			<p>Se mere og tilmeld dig via linket. Vi ses!</p>
			<a href={eventLink}>
				<EnButton title="Tilmeld"/>
			</a>
		</div>;
	}else{
		return <div>
			<p>Du kan desværre kun prøve spillet på en computer.</p>
			<GameJam />
		</div>
	}
};

export default TrumpTris;


