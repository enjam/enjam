import React from 'react';

import gamejam from './gamejam.png';
import EnButton from '../../../components/EnButton/EnButton';

const eventLink = "https://www.facebook.com/events/805414926263448/";

const GameJam = (props) => (
	<div className="row">
		<a href={eventLink}>
			<h1 className="event-header">Gamejam</h1>
		</a>
		<h3>24.-26. marts</h3>
		<a href={eventLink}>
			<img src={gamejam} className="event-image" role="presentation"/>
		</a>
		<p>Lav et spil i løbet af en weekend. Det kan være et brætspil, et computerspil eller et hvilket som helst andet slags spil. Kom fredag og find en gruppe, du vil lave et spil med. Vi kommer med et emne, og så har i fra fredag aften til at lave spillet. Søndag middag mødes vi alle sammen, prøver hinandens spil og stemmer om, hvem der skal have præmier i forskellige kategorier. Der vil være fede indslag i løbet af eventet, og vi sørger for en sandwich lørdag, så i ikke skal tænke på madpakken. Deltag i eventet på Facebook, så vi ved, i kommer, og ta jeres venner med. Det bliver fedt!</p>
		<a href={eventLink}>
			<EnButton title="TILMELD"/>
		</a>
	</div>
);

export default GameJam;


