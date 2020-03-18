import { deployContract, latestTime } from "ethworks-solidity";
const Web3 = require("Web3");
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:8545`));
const TimeConstrainedCounterJson = require("../build/contracts/TimeConstrainedCounter.json");
const EscrowJson = require("../build/contracts/Escrow.json");
const ERC20Json = require("../build/contracts/ERC20.json");

const TokenConstructor = [
  ERC20, // Contract
  "shadow", // Name
  "SHDW", // Name
  18, // Decimals
  1000000000000000000 // Total Suply
];

describe("Deploy script", async () => {
  let owner;
  let beginTime;
  let endTime;
  const escrowValue = 20;

  before(async () => {
    [owner] = await web3.eth.getAccounts();
    beginTime = (await latestTime(web3)) + 2;
    endTime = beginTime + 10;
  });

  xit("Deploying Shadow Token", async () => {
    const args = [beginTime, endTime];
    const contract = await deployContract(web3, ERC20Json, owner, args);
    console.log(`Deployed at: ${contract.options.address}`);
  });

  it("Deploying Escrow", async () => {
    const args = [];
    const contract = await deployContract(
      web3,
      EscrowJson,
      owner,
      args,
      escrowValue
    );
    console.log(`Deployed at: ${contract.options.address}`);
  });
});
