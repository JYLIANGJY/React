import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/countercontainer'
class App extends Component {
  render() {
    return (
      <div >
        <CounterContainer></CounterContainer>
      </div>
    );
  }
}

export default App;
