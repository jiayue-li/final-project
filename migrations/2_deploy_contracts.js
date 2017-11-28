var Exchange = artifacts.require("./Exchange.sol");
var Registry = artifacts.require("./Registry.sol");

module.exports = function(deployer) {
  deployer.deploy(Registry);
  deployer.link(Registry, Exchange);
  deployer.deploy(Exchange);
};
