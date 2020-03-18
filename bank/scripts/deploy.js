import { deployContract, latestTime } from "ethworks-solidity";
const Web3 = require("Web3");
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:8545`));
const ERC20Json = require("../build/contracts/ERC20Detailed.json");

const detailedArgs = [
  "shadow", // Name
  "SHDW", // Name
  18 // Decimals
];

describe("Deploy script", async () => {
  let owner;
  let beginTime;
  let endTime;
  const escrowValue = 20;

  before(async () => {
    [owner] = await web3.eth.getAccounts();
    console.log(owner, "owner");
    beginTime = (await latestTime(web3)) + 2;
    endTime = beginTime + 10;
  });

  it("Deploying Shadow Token", async () => {
    const contract = await deployContract(
      web3,
      ERC20Json,
      owner,
      detailedArgs,
      1000000000
    );
    console.log(`Shadow Deployed at: ${contract.options.address}`);
  });
});
