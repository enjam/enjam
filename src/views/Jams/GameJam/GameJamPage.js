import React from 'react';

import GameJam from './GameJam';
import EnPage from '../../../components/EnPage';

const GameJamPage = (props) => (
	<EnPage {...props}>
		<GameJam/>
	</EnPage>
);

export default GameJamPage;