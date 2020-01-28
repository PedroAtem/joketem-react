import React, { Component } from 'react';

import './Joke.css';

class Joke extends Component {
    render() {
        return <div className="joke-container">{this.props.text}</div>;
    }
}

export default Joke;