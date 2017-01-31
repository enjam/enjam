import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
});

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<App />
	</MuiThemeProvider>,
  document.getElementById('root')
);
