import React from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import MediaQuery from 'react-responsive';

import EnList from '../EnList';

import priceData from './priceData';
import guestData from './guestData';
import sponsorData from './sponsorData';

import IoTjamCover from './circle-iot.png';

const eventLink = "https://enjam.nemtilmeld.dk/2/";

const IoTjam = (props) => {

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
					Skal du være med til at udvikle fremtidens 'smarte' byer, en 'smart' industri, et 'smart' hjem eller noget andet 'smart'?
				</div>
				<p>
					Kom og red verden - eller lav noget skørt - til Internet of Things jam på TEK,
					Syddansk Universitet.
					Der er brug for nogle, der er interesserede i produktudvikling,
					elektronik, design, programmering, innovation, eller andet, der kan
					indgå i udviklingen af en IoT prototype.
				</p>
				<p>
					Mød op til arrangementet og find nogle, der komplementerer dine interesser
					og færdigheder. I har weekenden til at lave et IoT-koncept og måske en prototype.
					Det kunne være, du ville automatisere din urtehave,
					sætte en gps på din ekskærestes cykel
					eller lave flotte grafer over temperaturen i dit køleskab.
				</p>
				<p>
					Der vil være et oplæg om IoT, så du behøver ikke at kende til IoT i forvejen.
					Til prototypeudvikling er der adgang til 3D-printere,
					en laserskærer, IoT development boards, sensorer, aktuatorer og en hjælpende hånd.
				</p>
				<p>
					Du får mest ud af arrangementet, hvis du har sat hele weekenden af.
					Fredag dannes der grupper og der idégenereres,
					lørdag udvikles der i fuld fart, og søndag præsenterer og vurderer i jeres produkter.
					Søndag eftermiddag sluttes der af med præmieoverrækkelser.
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

export default IoTjam;
