import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

const lightSeaGreen = '#20b2aa';

const muiTheme = getMuiTheme({
  palette: {
		primary1Color: lightSeaGreen,
    textColor: colors.teal900,
  },
	cardText: {
		style: {
			fontSize: '50px'
		}
	}
});

export default muiTheme;