import './App.css';
import React, { Component } from 'react';
import Intro from '../Intro/intro-component.js';



class App extends Component {
  state = {
    myArray: []
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">     
      <h1 className="App-title">Learning React-JS</h1>
      </header>
      <Intro message="This the new message."/>
      The length of our Array is {this.state.myArray.length}
    </div>
  );
}
}

export default App;
