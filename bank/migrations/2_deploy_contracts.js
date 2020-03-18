var TimeConstrainedCounter = artifacts.require("./TimeConstrainedCounter.sol");
var ERC20 = artifacts.require("./ERC20.sol");

module.exports = function(deployer) {
  // deployer.deploy(TimeConstrainedCounter, 0, 32503676400);

  // (string memory _name, string memory _symbol, uint8 _decimals, uint256 totalSupply)
  deployer.deploy(
    ERC20, // Contract
    "shadow", // Name
    "SHDW", // Name
    18, // Decimals
    1000000000000000000 // Total Suply
  );
};
