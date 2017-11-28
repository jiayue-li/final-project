pragma solidity ^0.4.15;

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

  mapping (address => Passport) passports; //maps address of citizen to passport
  bytes32[] passportInfo; //list of encrypted passport info

  address owner;

  struct Passport {
    bytes32 encryptedInfo;
  }

  modifier onlyOwner() {require(msg.sender == owner); _;}

  function Registry() {
    owner = msg.sender;
  }

  // function addEmbassy(string embassyName, address embassyAddress){
  //   onlyOwner()
  //   embassies[embassyAddress] = embassyName;
  // }

  function addPassport(uint passId, string first, string last, string dob, string count, string dateIssued, address citizen) public returns (bool){
    //encrypts information in passport, then adds passport if it doesn't already exist
   bytes32 encrypted = keccak256(passId, first, last, dob, count, dateIssued);
    if (!passportExists(passId, first, last, dob, count, dateIssued)){
      passports[citizen] = Passport(encrypted);
      passportInfo.push(encrypted);
    }
  }

  function verifyPassport(uint passId, string first, string last, string dob, string count, string dateIssued) returns (bool){
    //checks to see if passport is a valid by hashing it and checking it's existence in system
    bytes32 encrypted = keccak256(passId, first, last, dob, count, dateIssued);
    for (uint i = 0; i< passportInfo.length; i++){
      if (encrypted == passportInfo[i]){
        return true;
      }
    }
    return false;
  }

  function passportExists(uint passId, string first, string last, string dob, string count, string dateIssued) returns (bool){
    return verifyPassport(passId, first, last, dob, count, dateIssued);
  }


//   function decryptPassport(uint passportId, string firstName, string dateOfBirth, string country,
//   string dateOfIssue, string lastName){
//     //returns decrypted information
//     val = keccak256(passportId, firstName, dateOfBirth, country, dateOfIssue, lastName);
//   }
//
//   function getOut()constant returns (bytes20 ){
//     return val;
// }
  
  function getOwner() returns(address) {
    return owner;
  }

}
