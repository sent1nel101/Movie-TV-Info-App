import React, { Component } from 'react';
import Series from '../../containers/series/index.js'
import './App.css';
import 'whatwg-fetch';



class App extends Component { 
  render(){
    return (
      <div className="App">
        <header className="App-header">     
        <h1 className="App-title">TV Show App</h1>
        </header>        
        <Series />
      </div>
    );
  }
}

export default App;
