import React from 'react';

import EnPage from '../../components/EnPage';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const About = (props) => (
	<EnPage>
		<Card zDepth={0}>
			<CardTitle title="Om Enjam"/>
			<Divider />
			<p>
				Enjam arrangerer ingeniør-jams for studerende på SDU. 
				Idéen er at skabe et kreativt miljø, 
				der sætter de studerendes fagligheder og interesser i spil på tværs af uddannelserne.
			</p>
			<p>
				Hver jam tager afsæt i et tema med udfordringer, 
				der er relevante for en række ingeniørudannelser. 
				Deltagerne finder sammen i mindre grupper og har weekenden til at lave et produkt.
			</p>
			<p>
				Deltagerne skulle gerne tage hjem med inspiration, 
				eventuelle præmier og et større netværk.
			</p>
		</Card>
	</EnPage>
);

export default About;