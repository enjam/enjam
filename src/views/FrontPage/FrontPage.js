import React, { Component } from 'react';

import EnPage from '../../components/EnPage';
import CurrentJam from '../Jams/IoTjam/IoTjam';

class FrontPage extends Component{
	render(){
		return (
			<EnPage>
				<div style={{textAlign: 'center'}}>
					<p style={{marginTop: 0, marginBottom: '20px'}}>
						Enjam arrangerer ingeniør-jams for studerende på SDU. 
						Hver jam afvikles i løbet af en weekend og tager udgangspunkt i et tema, 
						der er op til fri fortolkning.
					</p>
				</div>
				<CurrentJam/>
			</EnPage>
		);
	}
}

export default FrontPage;