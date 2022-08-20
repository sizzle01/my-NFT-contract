require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
 
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
		networks: {
			hardhat: {},
			rinkeby: {
				url: API_URL,
				accounts: [`0x${PRIVATE_KEY}`]
				}
		},
};

//0x6e4ea7A3ff2d4463Af8633A0d1e96A3d77F436BD