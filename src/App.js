import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {openDrawer: false};
	}
	
	handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});
	handleClose = () => this.setState({openDrawer: false});

	render() {
		return (
			<div className="App">
				<AppBar 
					title="enjam"
					onLeftIconButtonTouchTap={this.handleToggle}
				></AppBar>
				<Drawer 
					docked={false}
					open={this.state.openDrawer}
					onRequestChange={openDrawer => this.setState({openDrawer})}
				>
					<AppBar title="enjam" showMenuIconButton={false}/>
					<Menu>
						<MenuItem onTouchTap={this.handleClose} primaryText="kommende jams"/>
						<MenuItem onTouchTap={this.handleClose} primaryText="kontakt"/>
					</Menu>
				</Drawer>
			</div>
		);
	}
}

export default App;
