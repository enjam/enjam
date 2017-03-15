import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App/App';
import './index.css';
import muiTheme from './muiTheme';

import DocumentMeta from 'react-document-meta';

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<div>
			<DocumentMeta title="Enjam"/>
  		<App />
		</div>
	</MuiThemeProvider>,
  document.getElementById('root')
);