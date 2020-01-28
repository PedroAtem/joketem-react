import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
    render() {
        return <input placeholder={this.props.label} />;
    }
}

export default Input;