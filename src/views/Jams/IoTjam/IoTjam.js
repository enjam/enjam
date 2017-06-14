import React from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import MediaQuery from 'react-responsive';

import IoTjamCover from './circle-iot.png';

const eventLink = "https://www.facebook.com/events/1748049711875959/";

const IoTjam = (props) => {
		
	const desktopFlex = {
		display:'flex',
		flexWrap:'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	};
	
	/*const mobileFlex = {
		...desktopFlex,
		flexDirection: 'column',
		alignItems: 'stretch',
	};*/
	
	const flexTopDesktop = {
		...desktopFlex,
		alignItems: 'center',
	};
	
	const flexTopMobile = {
		...flexTopDesktop, 
		flexDirection: 'column',
		textAlign: 'center',
	};
	
	return (
		<Card zDepth={0}>
				<MediaQuery minDeviceWidth={800}>
					{match => (
						<div style={match ? flexTopDesktop : flexTopMobile}>
							<CardTitle 
								style={{paddingTop: 0, width: '166px'}}
								title="IoT-jam" 
								subtitle="29. sep - 1. okt"
							/>
						<img src={IoTjamCover} role="presentation" style={{height:'180px', margin: '20px'}}/>
							<a href={eventLink} target="_blank">
								<RaisedButton primary={true} 
									label="Tilmeld 50 kr" 
									style={{
										margin:'16px', 
										marginTop: 0,
									}}/>
							</a>
						</div>
					)}
				</MediaQuery>
				<Divider />
				<br/>
				<div style={{textAlign: 'center'}}>
					Er du interesseret i at udvikle fremtidens 'smarte' byer, en 'smart' industri, et 'smart' hjem eller noget andet 'smart'?
				</div>
				<p> 
					Kom og red verden - eller lav noget skørt - til Internet of Things jam på TEK, 
					Syddansk Universitet, og team op med nogle, der komplementerer dine interesser 
					og færdigheder. I har weekenden til at lave et IoT-koncept og måske en prototype. 
					Det kunne være, du ville automatisere din urtehave, 
					sætte en gps på din ekskærestes cykel 
					eller lave flotte grafer over temperaturen i dit køleskab.
				</p>
				<p>
					Du behøver ikke at kende til IoT i forvejen, 
					da der vil være et inspirerende foredrag om IoT og eksperter under jammet. 
					Til prototypeudvikling er der adgang til 3D-printere, 
					en laserskærer, IoT development boards, sensorer, aktuatorer og en hjælpende hånd.
				</p>
				<p>
					Du får mest ud af arrangementet, hvis du har sat hele weekenden af. 
					Fredag dannes der grupper og der idégenereres, 
					lørdag udvikles der i fuld fart, og søndag præsenterer og vurderer i jeres produkter. 
					Søndag eftermiddag sluttes der af med præmieoverrækkelser.
				</p>
				<p>
					Mere information følger.
				</p>
		</Card>
	);
};

export default IoTjam;