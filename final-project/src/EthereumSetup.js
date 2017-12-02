var Web3 = require('web3');
// import Web3 from ‘web3’;
const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var exchangeABI =
[
  {
    "constant": false,
    "inputs": [],
    "name": "greet",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  }
]

var exchangeAddress = '0x9b8de08731b106376d823d6b886d6b4e0b260f90';

const exchangeContract = ETHEREUM_CLIENT.eth.contract(exchangeABI).at(exchangeAddress);

export {exchangeContract};
