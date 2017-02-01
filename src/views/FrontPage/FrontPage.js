import React, { Component } from 'react';

import gamejam from '../../../public/images/gamejam.png';
import EnButton from '../../components/EnButton/EnButton';

const fbLink = 'https://www.facebook.com/enjam.sdu';

class FrontPage extends Component{
	render(){
		return (
			<div>
				<div className="row">
					<p className="no-padding">Enjam arrangerer ingeniør-jams for studerende på SDU. Hver jam afvikles i løbet af en weekend og tager udgangspunkt i et tema, der er op til fri fortolkning.</p>
				</div>
				<div className="row">
					<a href={fbLink}>
						<h1 className="event-header">Gamejam</h1>
					</a>
					<h3>24.-26. marts</h3>
					<a href={fbLink}>
						<img src={gamejam} className="event-image" role="presentation"/>
					</a>
					<p className="no-padding">Lav et spil i løbet af en weekend. Det kan være et brætspil, et computerspil, et drukspil eller et hvilket som helst andet slags spil. Kom fredag og find en gruppe, du vil lave et spil med. Vi kommer med et emne, og så har i fredag aften og lørdag til at lave spillet. Søndag middag mødes vi alle sammen og prøver hinandens spil og stemmer om, hvem der skal have præmier. Vi sørger for forplejning lørdag, så i ikke skal tænke på madpakken. Deltag i eventet på Facebook, så vi ved, i kommer, og ta jeres venner med. Det bliver fedt!</p>
					<a href={fbLink}>
						<EnButton title="TILMELD"/>
					</a>
				</div>
			</div>
		);
	}
}

export default FrontPage;