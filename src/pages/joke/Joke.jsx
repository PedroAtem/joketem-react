import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/button/Button';
import Joke from '../../components/joke/Joke';
import { updateJoke } from '../../actions'

import './Joke.css';

class JokePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            joke: 'Ad id in deserunt nulla veniam ad reprehenderit Lorem cillum dolor exercitation velit.'
        }
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search)
        const { name } = queryParams;
        this.setState({ name });
    }

    render() {
        const { joke, updateJoke } = this.props;

        return (
            <div className="joke">
                <h1>Hello {this.state.name}!!!</h1>
                <Button click={() => updateJoke('mudou')} text="loading ? 'Getting Joke...' : 'Get Joke!'"></Button>
                <Joke text={joke}></Joke>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    joke: store.jokeState.joke
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateJoke }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JokePage);