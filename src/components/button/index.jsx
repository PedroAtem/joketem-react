import React, { Component } from 'react';

import './style.css';

class Home extends Component {
    render() {
        return <button onClick={this.props.click} disabled={this.props.disabled}>{this.props.text}</button>;
    }
}

export default Home;