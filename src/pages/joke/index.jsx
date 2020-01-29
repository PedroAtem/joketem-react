import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/button';
import Joke from '../../components/joke';

import { updateJoke, updateName } from '../../actions'

import './style.css';

class JokePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search)
        const { name } = queryParams;
        if (name) {
            this.props.updateName(name);
        }
        this.props.updateJoke();
    }

    render() {
        const { name, joke, loading, updateJoke } = this.props;

        return (
            <div className="joke">
                <h1>Hello { name ? name : 'Stranger' }!!!</h1>
                <Button disabled={loading} click={() => updateJoke()} text={loading ? 'Getting Joke...' : 'Get Joke!'}></Button>
                <Joke text={joke}></Joke>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    joke: store.jokeState.joke,
    loading: store.jokeState.loading,
    name: store.nameState.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateJoke, updateName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JokePage);