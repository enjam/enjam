import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const EnList = ({title, data}) => {
	const listItems = data.map(
		entry => {
			const item = (
				<ListItem
					key={entry.key}
					primaryText={entry.primaryText}
					secondaryText={entry.secondaryText}
					leftAvatar={entry.avatar ? <Avatar src={entry.avatar}/> : null}
					disabled={entry.href === undefined}
				/>
			);
			if (entry.href)
				return (
					<a 
						href={entry.href} 
						key={entry.key} 
						target="_blank">
						{item}
					</a>
				);
			return item;
		}
	);
	return (
		<Paper style={{margin: '10px 0'}}>
			<List>
				<Subheader>{title}</Subheader>
				{listItems}
			</List>
		</Paper>
	);
};

export default EnList;