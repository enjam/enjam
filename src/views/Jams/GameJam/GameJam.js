import React from 'react';
import {Link} from 'react-router';
import gamejam from './game_logo.png';
import EnButton from '../../../components/EnButton/EnButton';

const eventLink = "https://www.facebook.com/events/805414926263448/";

const img_style = {
	maxWidth: '300px',
}

const GameJam = (props) => (
	<div className="row">
		<a href={eventLink}>
			<h1 className="event-header">Gamejam</h1>
		</a>
		<h3>24.-26. marts</h3>
		<p>Lav et spil i løbet af en weekend. Det kan være et brætspil, et computerspil eller et hvilket som helst andet slags spil. Kom fredag og find en gruppe, du vil lave et spil med. Vi kommer med et emne, og så har i fra fredag aften til at lave spillet. Søndag eftermiddag viser alle deres spil og stemmer om, hvem der skal have præmier i forskellige kategorier. Der vil være fede indslag i løbet af eventet, og vi sørger for noget mad, så i ikke skal tænke på madpakken. Arrangementet koster 30 kr. Der er 60 pladser. Læs mere og tilmeld jer via linket. Vi ses!</p>
		<Link to="/trump">
			<img src={gamejam} className="event-image" role="presentation" style={img_style}/>
		</Link>
		<br/>
		<a href={eventLink}>
			<EnButton title="Tilmeld"/>
		</a>
	</div>
);

export default GameJam;


