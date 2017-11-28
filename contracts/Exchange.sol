pragma solidity ^0.4.15;

import './Registry.sol';

contract Exchange {

	mapping(string => address) embassyNames; // name -> address
	mapping(address => uint) embassyFunds; //address -> funds
	address[] embassies; //list of registered embassies
	uint passportFee; //the fee required to create a passport
	address owner;
	Registry registry;

	mapping(address => uint) citizenFunds;

	struct Passport {
		// uint passportId;
		// string firstName;
		// string lastName;
		// string dateOfBirth;
		// string country;
		// string dateOfIssue;
		bytes20 encryptedInfo;
	}
	modifier onlyOwner() {require(msg.sender == owner); _;}
	modifier onlyEmbassy() {require (checkEmbassy(msg.sender)); _;}

	function checkEmbassy(address sender) returns (bool) {
		for (uint i = 0; i < embassies.length; i++){
		  if (sender == embassies[i]) {
		    return true;
		  }
		}
		return false;
  	}

	function Exchange(uint fee){
		owner = msg.sender;
		passportFee = fee;
		registry = new Registry();
	}

	 function addEmbassy(string embassyName, address embassyAddress)
	 	onlyOwner()
	 {
	 	embassyNames[embassyName] = embassyAddress;
	 	embassies.push(embassyAddress);
	 }

	 function createPassport(uint passId, string first, string last, string dob, string count, string dateIssued, address citizen)
	 	onlyEmbassy()
	 {
		// An embassy creates a passport by withdrawing funds from the individual requesting the passport

		if (citizenFunds[citizen] >= passportFee){
			citizenFunds[citizen] = citizenFunds[citizen] - passportFee;
			if (registry.addPassport(passId, first, last, dob, count, dateIssued, citizen)){
				embassyFunds[msg.sender] += passportFee;
			} else {
				citizenFunds[citizen] = citizenFunds[citizen] + passportFee;
			}
		}
	}

	function checkPassport(uint passId, string first, string last, string dob, string count, string dateIssued) returns(bool){
		//checks to see if a passport is valid
		return registry.verifyPassport(passId, first, last, dob, count, dateIssued);
	}


	function withdrawFundsCitizen(uint refund) external returns(bool) {
		//allows an individual to withdraw funds from their embassy account
		citizenFunds[msg.sender] -= refund;
		if (!msg.sender.send(refund)){
			citizenFunds[msg.sender] += refund;
			return false;
		}
		return true;
	}

	function addFunds() payable external {
		citizenFunds[msg.sender] = msg.value;
	}

	function getBalanceCitizen() constant external returns(uint) {
		//allows an individual to check funds in their embassy account to see if they can obtain a passport
		return citizenFunds[msg.sender];
	}

	function withdrawFundsEmbassy(uint refund) external returns(bool) {
		//allows an individual to withdraw funds from their embassy account
		embassyFunds[msg.sender] -= refund;
		if (!msg.sender.send(refund)){
			embassyFunds[msg.sender] += refund;
			return false;
		}
		return true;
	}


	function getBalanceEmbassy() constant external returns(uint) {
		//allows an individual to check funds in their embassy account to see if they can obtain a passport
		return embassyFunds[msg.sender];
	}


	function () payable {
		revert();
	}
}
