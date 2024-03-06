import React from 'react';
import './App.css';

import { getFullYear, getFooterCopy } from './utils';

import holbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <img src={holbertonLogo} alt="Holberton Logo" className="App-logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
      <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default App;
