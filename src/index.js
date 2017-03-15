import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App/App';
import './index.css';
import muiTheme from './muiTheme';

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
  	<App />
	</MuiThemeProvider>,
  document.getElementById('root')
);