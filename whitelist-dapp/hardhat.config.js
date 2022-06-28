require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: ALCHEMY_API_KEY_URL,
      accounts:[MAINNET_PRIVATE_KEY],
    }
  }
};
