var TimeConstrainedCounter = artifacts.require("./TimeConstrainedCounter.sol");
var ERC20 = artifacts.require("./CrowdfundableToken.sol");

module.exports = function(deployer) {
  // deployer.deploy(TimeConstrainedCounter, 0, 32503676400);

  // (string memory _name, string memory _symbol, uint8 _decimals, uint256 totalSupply)
  deployer.deploy(
    20000000000000000000, // Cap
    "shadow", // Name
    "SHDW", // Name
    18, // Decimals
    10000000000000000000 // Total Suply
  );
};
