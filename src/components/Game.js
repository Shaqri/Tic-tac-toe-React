import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPlayer: 'x'
		}
		this.changePlayer = this.changePlayer.bind(this);
	}

	changePlayer() {
		console.log('yesney');
		const {currentPlayer} = this.state
		let nextPlayer;
		
		if(currentPlayer === 'x') {
			nextPlayer = 'o'
		}else if(currentPlayer === 'o') {
			nextPlayer = 'x'
		}
		
		this.setState({
			currentPlayer: nextPlayer
		});
	}

	render() {
		let {currentPlayer} = this.state;

		return (
			<div className='app'>
				<h1>Player Turn: {currentPlayer} </h1>
				<Board player={currentPlayer} changePlayer={this.changePlayer} / >
				<ul className='turn-list'>
					
				</ul>
			</div>
			)
	}
}

export default Game;
