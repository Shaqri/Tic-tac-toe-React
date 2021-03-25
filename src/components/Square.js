import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            cliked: !state.cliked
        }));
    }

    render() {
        const {value} = this.props;
        return (<button onClick={this.handleClick} className='square'>{value}</button>);
        
    }
}

export default Square;