const Registry = artifacts.require("./Registry.sol");

contract('Registry', function(accounts) {
  // let reg;
  let acc1 = accounts[0];

  // beforeEach(async function() {
  // 	reg = await Registry.new();
  // });

  it("Testing Creation", function() {

    return Registry.deployed().then(function(instance) {
      return instance.getOwner.call();
    }).then(function(own) {
    	assert.equal(own, acc1, "Contract owner should be first account");
    })
  });

  it("Add and Verify Passport", function() {
    var reg;
    return Registry.deployed().then(function(instance) {
      reg = instance;
      reg.addPassport(1,"John","Denero","January 1, 2000","3","January 2, 2000",acc1);
      return reg.passportExists.call(1,"John","Denero","January 1, 2000","3","January 2, 2000");
    }).then(function(verify) {
      assert.equal(verify, true, "Passport should exist");
    })
  });

});