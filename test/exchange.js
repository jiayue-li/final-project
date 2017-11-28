var AmazonDapp = artifacts.require("./Exchange.sol");

// contract('Exchange', function(accounts) {
//   it("Testing Joining", function() {
//     var exchange;
//     var acc1 = accounts[0];

//     return AmazonDapp.deployed().then(function(instance) {
//       amazon = instance;
//       amazon.join("David");
//       return amazon.getOwnerName.call(acc1);
     
//     }).then(function(name) {
      
//       // assert.equal(result.toString(), , "Balance should be zero")
//       assert.equal(name, "David", "Name should be 'David'");
//       return amazon.getOwnerBalance.call(acc1);
      
//     }).then(function(balance) {
//       assert.equal(balance.toNumber(), 0, "Balance should be zero");
//       return amazon.getOwnerItems.call(acc1);
//     }).then(function(items) {
//       assert.equal(items.length, 0, "Items should be empty")
//     })
//   });
// });


// contract('AmazonDapp', function(accounts) {
//   it("Testing Joining", function() {
//     var amazon;
//     var acc1 = accounts[0];

//     return AmazonDapp.deployed().then(function(instance) {
//       amazon = instance;
//       amazon.join("David");
//       return amazon.getOwnerName.call(acc1);
     
//     }).then(function(name) {
      
//       // assert.equal(result.toString(), , "Balance should be zero")
//       assert.equal(name, "David", "Name should be 'David'");
//       return amazon.getOwnerBalance.call(acc1);
      
//     }).then(function(balance) {
//       assert.equal(balance.toNumber(), 0, "Balance should be zero");
//       return amazon.getOwnerItems.call(acc1);
//     }).then(function(items) {
//       assert.equal(items.length, 0, "Items should be empty")
//     })
//   });

//   it("Creating items", function() {
//     var amazon;
//     var acc1 = accounts[0];

//     return AmazonDapp.deployed().then(function(instance) {
//       amazon = instance;
//       amazon.join("David");
//       amazon.addFunds({from: acc1, value: 10});
//       return amazon.getFunds.call();
//     }).then(function(result) { 
//       assert.equal(result.toNumber(), 10, "Added funds successfully");
//       amazon.addItem(1, "item1");
//       return amazon.getItemName.call(1);
//     }).then(function(name) {
//       assert.equal(name, "item1", "Correct name");
//       return amazon.getItemPrice.call(1);
//     }).then(function(price) {
//       assert.equal(price.toNumber(), 99, "Correct price");
//       return amazon.getItemOwner.call(1);
//     }).then(function(owner) {
//       assert.equal(owner, acc1, "Correct owner address");
//       return amazon.getItemForSale.call(1);
//     }).then(function(forsale) {
//       assert.equal(forsale, false, "Correct owner address");

//     })
//   });

//   it("Buy an item", function() {
//     var amazon;
//     var acc1 = accounts[0];

//     return AmazonDapp.deployed().then(function(instance) {
//       amazon = instance;
//       amazon.join("David");
//       amazon.addFunds({from: acc1, value: 10});
//       amazon.addItem(1, "item1");
//       return amazon.getItemPrice.call(1);
//     }).then(function(result) { 
//       assert.equal(result.toNumber(), 99, "Set price correctly");
//       amazon.setItemPrice(1, 5);
//       return amazon.getItemPrice.call(1);
//       // return amazon.getItemName.call(1);
//     }).then(function(price) {
//       assert.equal(price, 5, "Changed price correctly");
//       // return amazon.getItemPrice.call(1);
//     }).then(function(price) {
//       // assert.equal(price.toNumber(), 1, "Correct price");
//       // return amazon.getItemOwner.call(1);
//     }).then(function(owner) {
//       // assert.equal(owner, acc1, "Correct owner address");
//       // return amazon.getItemForSale.call(1);
//     }).then(function(forsale) {
//       // assert.equal(forsale, false, "Correct owner address");

//     })
//   });


// });
