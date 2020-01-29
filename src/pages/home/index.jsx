import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/button';
import Input from '../../components/input';

import { updateName } from '../../actions'

import './style.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    goJoke = () => {
        const { name } = this.props;
        this.props.history.push(`/joke${ name ? `?name=${name}` : `` }`);
    }

    render() {
        const { goJoke } = this;
        const { name, updateName } = this.props;

        return (
            <div className="home">
                <h1>JOKETEM</h1>
                <Input type="text" label="What's your name?" value={name} change={e => updateName(e.target.value) }></Input>
                <Button click={() => goJoke()} text="Go forward!"></Button>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    name: store.nameState.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);