import React from 'react';

import GameJam from './GameJam';
import EnPage from '../../../components/EnPage';

import DocumentMeta from 'react-document-meta';

const GameJamPage = (props) => (
	<EnPage>
		<DocumentMeta 
			title="Gamejam på SDU"
			meta={{
				property: {
					"og:url":"http://enjam.dk/gamejam",
					"og:type":"event",
					"og:title":"Gamejam på SDU",
					"og:image":"http://enjam.dk/images/GameJamPage.jpg"
				}
			}}
		/>
		<GameJam/>
	</EnPage>
);

export default GameJamPage;