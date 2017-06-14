import React from 'react';

import GameJam from './GameJam/GameJamPage';
import IoTjam from './IoTjam/IoTjamPage';
import EnPage from '../../components/EnPage';

const Jams = (props) => (
	<EnPage>
		<IoTjam zDepth={1}/>
		<br/>
		<GameJam zDepth={1}/>
	</EnPage>
);

export default Jams;