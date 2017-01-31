import React from 'react';
import {Link} from 'react-router';
import EnButton from '../EnButton/EnButton';

const NotFound = (props) => (
	<div>
		<h2>Argh, pinligt!</h2>
		<p>Vi ved ikke, hvad du leder efter :(</p>
		<a href="/"><EnButton title="Tilbage til forsiden"/></a>
	</div>
);

export default NotFound;