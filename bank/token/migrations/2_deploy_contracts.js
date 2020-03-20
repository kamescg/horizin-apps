var ERC20 = artifacts.require("./ERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(
    ERC20,
    "shadow", // Name
    "SHDW", // Name
    18, // Decimals
    1000 // Total Supply
  );
};
