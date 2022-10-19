/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { POLYGON_API_URL, GOERLEI_API_URL, PRIVATE_KEY } = process.env;

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    goerlei: {
      url: GOERLEI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    polygon: {
      url: POLYGON_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
