import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            player: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {clicked} = this.state;
        if(!clicked) {
            this.setState((props ,state) => ({
                clicked: true,
                player: state.player
            }));
        }
        
    }

    render() {
        const {value} = this.props;
        let {player} = this.state;
        return (<button onClick={this.handleClick} className='square'>{player}</button>);
        
    }
}

export default Square;