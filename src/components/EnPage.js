import React from 'react';

const style = {
	padding: '10px',
};

const EnPage = (props) => {
	return(
		<div {...props} style={{...style, ...props.style}}>
			{props.children}
		</div>
	);
};

export default EnPage;