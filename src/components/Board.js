import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changePlayer();
    }

    renderSquare(number) {
        return <Square value={number} player={this.props.player} />
    }

    renderRow(number) {
        let cells;
        if(number === 1){
            cells = [1, 2, 3]
        }else if(number === 2) {
            cells = [4, 5, 6]
        }else if(number === 3) {
            cells = [7, 8, 9]
        }
        return (
        <div className='row'>
            {this.renderSquare(cells[0])}
            {this.renderSquare(cells[1])}
            {this.renderSquare(cells[2])}
        </div>
        )
    }
    render() {
       return( 
            <div onClick={this.handleClick} className='board'>
            {this.renderRow(1)}
            {this.renderRow(2)}
            {this.renderRow(3)}
            </div>
        
        );
    }
}

export default Board;