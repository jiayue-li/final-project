pragma solidity ^0.4.15;

// import "./AuctionInterface.sol";

/** @title GoodAuction */
contract Exchange {
	/* New data structure, keeps track of refunds owed to ex-highest bidders */
	mapping(address => uint) embassyFunds;
	mapping(

	/* Bid function, shifts to push paradigm
	 * Must return true on successful send and/or bid, bidder
	 * reassignment
	 * Must return false on failure and allow people to
	 * retrieve their funds
	 */

	 function Exchange(){
		 owner = msg.sender;
	 }


	//  function () payable external returns(bool) {
	// 	// YOUR CODE HERE
	// 	if (msg.value <= getHighestBid()){
	// 		refunds[msg.sender] = msg.value;
	// 		return false;
	// 	}else {
	// 		if (highestBidder != 0){
	// 			refunds[highestBidder] += highestBid;
	// 		}
  //
	// 		// refunds[highestBidder] = getHighestBid();
	// 		highestBidder = msg.sender;
	// 		highestBid = msg.value;
	// 		return false;
	// 	}
	// }
  //
	// /* New withdraw function, shifts to push paradigm */
	// function withdrawRefund() external returns(bool) {
	// 	// YOUR CODE HERE
	// 	uint refund = refunds[msg.sender];
	// 	refunds[msg.sender] = 0;
	// 	if (!msg.sender.send(refund)){
	// 		refunds[msg.sender] = refund;
	// 		return false;
	// 	}
	// 	return true;
	// }
  //
	// /* Allow users to check the amount they can withdraw */
	// function getMyBalance() constant external returns(uint) {
	// 	return refunds[msg.sender];
	// }
  //
	// /* Give people their funds back */
	// function () payable {
	// 	// YOUR CODE HERE
	// 	revert();
	// }
}
