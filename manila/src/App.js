import React, { Component } from 'react';
//import logo from './logo.svg';
import DebugPanel from './module/DebugPanel'
import './App.css';


class App extends Component {
  render() { 
    return (
      <div className="App" >
        <DebugPanel />
      </div>
    );
  }
}

export default App;
