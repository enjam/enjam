import React, { Component } from 'react';

import EnPage from '../../components/EnPage';
import GameJam from '../Jams/GameJam/GameJam';

class FrontPage extends Component{
	render(){
		return (
			<EnPage>
				<div style={{margin: '16px', textAlign: 'center'}}>
					<p>
						Enjam arrangerer ingeniør-jams for studerende på SDU. 
						Hver jam afvikles i løbet af en weekend og tager udgangspunkt i et tema, 
						der er op til fri fortolkning.
					</p>
				</div>
				<GameJam/>
			</EnPage>
		);
	}
}

export default FrontPage;