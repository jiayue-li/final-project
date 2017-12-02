import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract} from './EthereumSetup';


class App extends Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      address: "",
      balance: "",
      block: "",
      hashrate: "",
      price: ""
    }
       
  }
  componentWillMount() {
    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var a = greeterContract.address;
    var balance = web3.eth.getBalance(greeterContract.address);
    var hashrate = web3.eth.hashrate;
    var number = web3.eth.blockNumber;
    var p = web3.eth.gasPrice;
    this.setState({
      address: String(a),
      balance: String(balance),
      hashrate: String(hashrate),
      block: String(number),
      price: String(p)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I am Greeter</h2>
        </div>
        <h2>I would like to say: "{this.state.greeting}"</h2>
        <h2>Your account is: {this.state.address}</h2>
        <h2>Your balance is: {this.state.balance}</h2>
        <h2>Latest Block Number: {this.state.block}</h2>
        <h2>Block Hashrate: {this.state.hashrate} hashes per second</h2>
        <h2>Current gas price: {this.state.price} wei</h2>
      </div>
    );
  }
}

export default App;
