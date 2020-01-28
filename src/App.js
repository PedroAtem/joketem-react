import React from 'react';
import logo from './logo.svg';
import { Router, Route, Link, browserHistory } from 'react-router';

import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <img className="logo" src={logo} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
