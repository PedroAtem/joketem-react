import React, { Component } from 'react';

import './style.css';

class Input extends Component {
    render() {
        const { label, value, change } = this.props;

        return <input placeholder={label} value={value} onChange={change} />;
    }
}

export default Input;