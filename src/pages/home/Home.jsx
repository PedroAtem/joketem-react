import React, { Component } from 'react';

import './Home.css';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <h1>JOKETEM</h1>
                <Input type="text" label="What's your name?"></Input>
                <Button disabled={true} text="Go forward!"></Button>
            </div>
        );
    }
}

export default HomePage;