import React from 'react';
import {Link} from 'react-router';
import EnButton from '../../components/EnButton/EnButton';

const NotFound = (props) => (
	<div>
		<h2>Argh, pinligt!</h2>
		<p>Vi ved ikke, hvad du leder efter :(</p>
		<Link to="/"><EnButton title="Forside"/></Link>
	</div>
);

export default NotFound;