var Exchange = artifacts.require("./Exchange.sol");
var Registry = artifacts.require("./Registry.sol");

module.exports = function(deployer) {
  deployer.deploy(Exchange);
  deployer.link(Exchange, Registry);
  deployer.deploy(Registry);
};
