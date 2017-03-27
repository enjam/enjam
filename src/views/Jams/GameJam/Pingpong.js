import React, { Component } from 'react';
import EnPage from '../../../components/EnPage';

import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

import * as firebase from 'firebase';

var pingpong;


class Pingpong extends Component{
	constructor(props){
		super(props);
		this.state = {
			names: {
				left: 'left player',
				right: 'right player', 
			},
			images: {
				left: null,
				right: null
			},
			pos: {
				left: 50,
				right: 50,
				ball: {
					x: 50,
					y: Math.random()*100
				}
			},
			bv: {
				x: Math.random() < .5 ? .5 : -.5,
				y: Math.random() * 2 - 1
			},
			input: {
				left: 0,
				right: 0
			}
		};
	}
	componentDidMount = () => {
		pingpong = firebase.database().ref('pingpong');
		pingpong.on('value', snapshot => {
			const pp = snapshot.val();
			this.setState({
				input: {
					left: pp.controls.leftDirection,
					right: pp.controls.rightDirection
				},
				names: {
					left: pp.controls.leftName,
					right: pp.controls.rightName
				},
				images: {
					left: pp.controls.leftImage,
					right: pp.controls.rightImage
				}
			});
		});
		window.requestAnimationFrame(this.step);
	}
	lim = (val, min, max) => Math.min(Math.max(val, min), max);
	start = null;
	step = timestamp => {
		if (!this.start) this.start = timestamp;
		var progress = timestamp - this.start;
		window.requestAnimationFrame(this.step);
		const s = this.state;
		let bv = s.bv;
		let x = s.pos.ball.x + bv.x;
		let y = s.pos.ball.y + bv.y;
		if (y <= 0 || y >= 100) bv.y *= -1;
		let left = this.lim(s.pos.left + s.input.left, 0, 100);
		let right = this.lim(s.pos.right + s.input.right, 0, 100);
		
		if (x < 5){
			if (Math.abs(left - y) < 15){
				bv.x *= -1;
				bv.y = (y - left) / 15;
			}else{
				x = 50;
				y = 50;
				bv.y = Math.random() * 2 - 1;
			}
		}else if(x > 95){
			if (Math.abs(right - y) < 15){
				bv.x *= -1;
				bv.y = (y - right) / 15;
			}else{
				x = 50;
				y = 50;
				bv.y = Math.random() * 2 - 1;
			}
		}
		
		this.setState({
			pos: {
				left,
				right,
				ball: {x, y}
			},
			ballVelocity: bv
		});
	}
	render = () => {
		const s = this.state;
		
		const GameContainer = props => (
			<div style={{
				height: '500px', 
				width: '500px',
				padding: '50px',
				backgroundColor: 'lightseagreen',
				display: 'inline-block',
			}}>
				<div style={{position:'relative', width: '100%', height: '100%'}}>
					{props.children}
				</div>
			</div>
		);
		
		const Player = props => (
			<div style={{
					position: 'absolute',
					marginLeft: '-3.5%',
					marginBottom: '-10%',
					height: '20%', 
					width:'7%',
					backgroundColor:'white',
					left: props.x === 'left' ? '0%' : '100%',
					bottom: props.y + '%',
				}}></div>
		);
		
		const Ball = props => (
			<div style={{
					position: 'absolute',
					height: '5%',
					width: '5%',
					marginLeft: '-2.5%',
					marginBottom: '-2.5%',
					backgroundColor: 'white',
					left: props.x + '%',
					bottom: props.y + '%'
				}} />
		);
		
		return (
			<EnPage style={{textAlign: 'center'}}>
				<div style={{display: 'inline-flex', justifyContent: 'space-between', width: '500px'}}>
					<ListItem leftAvatar={<Avatar src={s.images.left} />}>{s.names.left}</ListItem>
					<ListItem rightAvatar={<Avatar src={s.images.right}/>}>{s.names.right}</ListItem>
				</div>
				<GameContainer>
					<Player x="left" y={s.pos.left}/>
					<Player x="right" y={s.pos.right}/>
					<Ball x={s.pos.ball.x} y={s.pos.ball.y} />
				</GameContainer>
			</EnPage>
		);
	}
}

export default Pingpong;