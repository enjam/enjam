import React from 'react';

import EnPage from '../../components/EnPage';

import {Card, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import Phone from 'material-ui/svg-icons/communication/phone';
import Email from 'material-ui/svg-icons/communication/email';
import Business from 'material-ui/svg-icons/communication/business';

const Contact = (props) => {
	return(
		<EnPage>
			<Card zDepth={0}>
				<CardTitle title="Kontakt"/>
				<Divider />
				<List>
					<ListItem
						disabled={true}
						primaryText="30 32 65 66"
						leftAvatar={<Avatar icon={<Phone/>}/>}
					/>
					<ListItem
						disabled={true}
						primaryText="enjam@enjam.dk"
						leftAvatar={<Avatar icon={<Email/>}/>}
					/>
					<ListItem
						disabled={true}
						primaryText="38420747" 
						secondaryText="cvr"
						leftAvatar={<Avatar icon={<Business/>}/>}
					/>
				</List>
			</Card>
		</EnPage>
	);
};

export default Contact;