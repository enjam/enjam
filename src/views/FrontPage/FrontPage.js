import React, { Component } from 'react';

import GameJam from '../Jams/GameJam/GameJam';

class FrontPage extends Component{
	render(){
		return (
			<div>
				<div className="row">
					<p>Enjam arrangerer ingeniør-jams for studerende på SDU. Hver jam afvikles i løbet af en weekend og tager udgangspunkt i et tema, der er op til fri fortolkning.</p>
				</div>
			<GameJam/>
			</div>
		);
	}
}

export default FrontPage;