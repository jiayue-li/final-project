import Web3 from 'web3';
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


// application binary interface
import exhangeABI from './supply_abi'

// contract supply address
var exchangeAddress = '0x4bd593681862acf3f85526218ae2fca128c3e9bf';

// get the reference
const exchangeContract = web3.eth.contract(exchangeABI).at(exchangeAddress);

// get what we need, and then export it as a variable
// var disp = {
    
// }

var disp = {
    "userAddress": web3.eth.accounts[0],
    "exchangeAddress": exchangeAddress,
    "contract": exchangeContract,
}

alert(disp)

export {exchangeContract};