import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {exchangeContract} from './EthereumSetup';

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     greeting: ""
   }
 }
componentWillMount() {
   var data = exchangeContract.greet.call()

   this.setState({
     greeting: String(data)
   })
 }
 render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I am Greeter</h2>
        </div>
        <h2>"{this.state.greeting}"</h2>
      </div>
    );
  }
 }
 export default App;
