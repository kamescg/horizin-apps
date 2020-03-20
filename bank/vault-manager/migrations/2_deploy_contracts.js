var VaultManager = artifacts.require("./VaultManager.sol");

module.exports = function(deployer) {
  deployer.deploy(VaultManager);
};
