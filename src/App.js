import React from 'react';
import logo from './logo.svg';

import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <img className="logo" src={logo} alt="" />
    </div>
  );
}

export default App;
