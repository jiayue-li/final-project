pragma solidity ^0.4.15;

import './Queue.sol';
import './Token.sol';
import './utils/SafeMath.sol';

/**
 * @title Registry
 * Maintains a registry that keeps passport records
 */

contract Registry {

  // mapping (address => uint) passportIDs;
  // mapping (passportId => string) firstName;
  // mapping (passportId => string) lastName;
  // mapping (passportId => string) dateOfBirth;
  // mapping (passportId => string) country;
  // mapping (passportId => string) dateOfIssue;

  struct Passport {
    uint passportId;
    string firstName;
    string lastName;
    string dateOfBirth;
    string country;
    string dateOfIssue;
    string encryption;
  }

  mapping (uint => Passport) passports; //maps passport id to passport
  mapping (address => string) embassyNames; //
  address[] embassies;

  modifier onlyOwner() {require(msg.sender == owner); _;}
  modifier onlyEmbassy() {require (checkEmbassy()); _;}
  // modifier windowOpen() {require(now < endTime); _;}
  // modifier windowClosed() {require(now > endTime); _;}

  // event TokensSold(address user, uint amount);
  // event TokensRefunded(address user, uint amount);

  function checkEmbassy(address sender) returns (bool){
    for (uint i = 0; i < embassies.length; i++){
      if sender == embassies[i]{
        return true;
      }
    }
    return false;
  }

  function Registry(string registryName) {
    owner = msg.sender;
  }

  function addEmbassy(string embassyName, address embassyAddress){
    onlyOwner()
    embassies[embassyAddress] = embassyName;
  }

  function createPassport(uint passId, string first, string lastName, string dob, string count, string dateIssued){
    onlyEmbassy()
    passports.push(Passport({
                passportId: passId,
                firstName: first,
                lastName: last,
                dateOfBirth: dob,
                country: count;
                dateOfIssue: dateIssued
            }));
  }

  bytes20 val;
  
  function decryptPassport(uint passportId, string firstName, string dateOfBirth, string country, 
  string dateOfIssue, string lastName){
    //returns decrypted information
    val = keccak256(passportId, firstName, dateOfBirth, country, dateOfIssue, lastName);
  }
  
  function getOut()constant returns (bytes20 ){
    return val;
}

  // function () public payable {revert();}
  //
  // function buy() public payable windowOpen() {
  //   require(queue.getFirst() == msg.sender);
  //   require(queue.qsize() > 1);
  //   uint amount = SafeMath.mul(tokensPerWei, msg.value);
  //   require((tokenSaleCap - numSold) >= amount);
  //   token.transfer(msg.sender, amount);
  //   numSold = SafeMath.add(numSold, amount);
  //   queue.externDequeue();
  //   TokensSold(msg.sender, amount);
  // }
  //
  // function refund(uint amount) public windowOpen() {
  //   token.refund(msg.sender, amount);
  //   uint eth = SafeMath.div(amount, tokensPerWei);
  //   deposits[msg.sender] = SafeMath.add(deposits[msg.sender], eth);
  //   numSold = SafeMath.sub(numSold, amount);
  //   TokensRefunded(msg.sender, amount);
  // }
  //
  // function depositOf(address user) public returns (uint) {
  //   return deposits[user];
  // }
  //
  // function withdraw(uint amount) public {
  //   require(deposits[msg.sender] >= amount);
  //   deposits[msg.sender] = SafeMath.sub(deposits[msg.sender], amount);
  //   msg.sender.transfer(amount);
  // }
  //
  // function ownerWithdraw() public
  // onlyOwner()
  // windowClosed()
  // {
  //   owner.transfer(SafeMath.div(numSold, tokensPerWei));
  // }
  //
  // function ownerMint(address receiver, uint amount) public onlyOwner() {
  //   token.mint(receiver, amount);
  // }
  //
  // function ownerBurn(uint amount) public onlyOwner() windowClosed() {
  //   token.burn(amount);
  // }


}
