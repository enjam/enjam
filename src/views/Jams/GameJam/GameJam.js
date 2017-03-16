import React from 'react';
import {Link} from 'react-router';

import EnList from './EnList';

import {Card, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import MediaQuery from 'react-responsive';

import priceData from './priceData';
import guestData from './guestData';
import sponsorData from './sponsorData';

import gamejam from './game_logo.png';

const eventLink = "https://www.facebook.com/events/805414926263448/";

const GameJam = (props) => {
	
	let Prices = (
		<EnList 
			title="Præmier"
			data={priceData.map(price => {
				return {
					key: price.title,
					primaryText: price.title,
					secondaryText: price.sponsor,
					avatar: price.src,
					href: price.href,
				}
			})}
		/>
	);
	
	let Guests = (
		<EnList 
			title="Gæster"
			data={guestData.map(guest => {
				return {
					key: guest.name,
					primaryText: guest.name,
					secondaryText: guest.from,
					avatar: guest.src,
					href: guest.href,
				}
			})}
		/>
	);
	
	let Sponsors = (
		<EnList 
			title="Sponsorer"
			data={sponsorData.map(sponsor => {
				return {
					key: sponsor.name,
					primaryText: sponsor.name,
					avatar: sponsor.logo,
					href: sponsor.href,
				}
			})}
		/>
	);
	
	const desktopFlex = {
		display:'flex',
		flexWrap:'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	};
	
	const mobileFlex = {
		...desktopFlex,
		flexDirection: 'column',
		alignItems: 'stretch',
	};
	
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
								title="Gamejam" 
								subtitle="24.-26. marts"
							/>
							<Link to="/trump">
								<img src={gamejam} role="presentation" style={{height:'200px', margin: '5px'}}/>
							</Link>
							<a href={eventLink} target="_blank">
								<RaisedButton 
									label="Tilmeld 30 kr" 
									primary={true} 
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
					Kan du lide at tegne, programmere, spille musik eller skrive historier?
				</div>
				<p>
					Så kom til gamejammet på TEK, Syddansk Universitet, og team up med nogle, 
					der komplementerer dine interesser i en spilproduktion.
					I har en weekend til at lave et spil udfra et emne, der offentliggøres fredag aften.
					Det kan være et brætspil, et computerspil eller et hvilket som helst andet slags spil. 
				</p>
				<p>
					Søndag eftermiddag præsenterer alle deres spil og der stemmes om, 
					hvem der skal have præmier i forskellige kategorier.
					Der vil være masser hygge og mindre konkurrencer i løbet af eventet, 
					og vi sørger for aftensmad fredag samt morgenmad og middagsmad lørdag og søndag, 
					så i ikke skal tænke på madpakken.
				</p>
				<p>
					Der vil være et foredrag om spilmekanikker samt et foredrag om værdiskabende spil.
				</p>
				<p>
					GameInventors tager nogle spændende brætspil med, som de kan hjælpe jer igang med, fredag eftermiddag i JARVIS.
				</p>
				<MediaQuery minDeviceWidth={800}>
					{match => (
						<div style={match ? desktopFlex : mobileFlex}>
							{Guests}
							{Prices}
							{Sponsors}
						</div>
					)}
				</MediaQuery>
		</Card>
	);
};

export default GameJam;