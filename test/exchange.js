var Exchange = artifacts.require("./Exchange.sol");

contract('Exchange', function(accounts) {
  let acc1 = accounts[0];
  let acc2 = accounts[1];

  it("Testing Adding Embassy", function() {
  	var ex;
    return Exchange.deployed().then(function(instance) {
    	ex = instance;
      	ex.addEmbassy("Embassy 1", acc1);
      	return ex.checkEmbassy.call(acc1);
    }).then(function(emb) {
    	assert.equal(emb, true, "Account 1 should be embassy");
    })
  });

  it("Create Passport", function() {
  	var ex;
    return Exchange.deployed().then(function(instance) {
    	ex = instance;
      	ex.addEmbassy("Embassy 1", acc1);
      	ex.addFunds({from:acc2, value:1});
      	return ex.getBalanceCitizen.call({from:acc2});
    }).then(function(val) {
    	assert.equal(val.toString(10), "1", "Account 2 should have value 1");
    	ex.createPassport(2, "Josh", "Hug", "February 30, 2000", "9", "February 31, 2000", acc2);
    	return ex.checkPassport.call(2, "Josh", "Hug", "February 30, 2000", "9", "February 31, 2000");

    }).then(function(hasPass) {
    	assert.equal(hasPass, true, "Valid Passport");

    })
  });


});