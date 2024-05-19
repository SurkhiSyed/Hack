require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {},
    avalanche: {
      url: 'https://test.core.app/account/0x6D6b784b3E2bBBa2cfc46180F8c01D2661abc489/?network=all',
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Add your private key in .env file
    }
  }
};
