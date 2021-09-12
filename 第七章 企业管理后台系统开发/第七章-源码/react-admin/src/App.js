import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Button} from 'antd'
// import 'antd/dist/antd.css'
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
// npm install babel-plugin-import --save-dev
export default App;
