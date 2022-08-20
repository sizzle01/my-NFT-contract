// // import { ethers } from "hardhat";
// ether = require('ethers')
const hre = require("hardhat")
async function main() {


  const Sizzle = await ethers.getContractFactory("Sizzle");
  const sizzle = await Sizzle.deploy();

  await sizzle.deployed();

  console.log(`Sizzle is deployed to ${sizzle.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS on Rinkeby = 0xB77d9c9f676A41E6DdDb5C8A17664e1bdA895f4D