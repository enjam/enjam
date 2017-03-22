import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

const style = {
	padding: '16px',
};

class EnPage extends Component{
	render(){
		return(
			<Paper 
				{...this.props}
				zDepth={0}  
				style={{...style, ...this.props.style}}>
				{this.props.children}
			</Paper>
		);
	}
}

export default EnPage;