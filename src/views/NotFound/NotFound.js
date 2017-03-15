import React from 'react';
import {Link} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import EnPage from '../../components/EnPage';

const NotFound = (props) => (
	<EnPage style={{textAlign: 'center'}}>
		<h2>Argh, pinligt!</h2>
		<p>Vi ved ikke, hvad du leder efter :(</p>
		<Link to="/">
			<RaisedButton label="Forside" primary={true}/>
		</Link>
	</EnPage>
);

export default NotFound;