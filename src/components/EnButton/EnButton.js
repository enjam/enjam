import React from 'react';
import "./EnButton.css";

const EnButton = (props) => (
	<div className="enbutton" {...props}>
		{props.title || "+"}
	</div>
);

export default EnButton;