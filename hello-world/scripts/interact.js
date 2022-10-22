const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

const { providers, Wallet, Contract } = ethers;
// Provider
const alchemyProvider = new providers.AlchemyProvider(network = "maticmum", POLYGON_API_KEY);

// Signer
const signer = new Wallet(PRIVATE_KEY, alchemyProvider);

// Contract

const helloWorldContract = new Contract(CONTRACT_ADDRESS, contract.abi, signer);

const main = async () => {
  const message = await helloWorldContract.message();
  console.log(`This message is: ${message}`);

  console.log(`Updating the message...`);
  const transactionObj = await helloWorldContract.update("This is the new message");
  await transactionObj.wait();

  const newMessage = await helloWorldContract.message();
  console.log(`This new message is: ${newMessage}`);
}

main();
