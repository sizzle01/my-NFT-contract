import { ethers } from "hardhat";

// 0x3158f5Da76c0a1a633537bC1BfAA74513781e0F3

// RINKEBY: 0x23A7f6a4c0b7Ab5aD5578e648A4FD6b0b52b9AD8

// GOERLI: 0x32e50C7761F6C4107663c8247E49f7aa2A0F1941



async function main() {

  const name = "SuperNFT"
  const symbol = "SPN"
  // const metadata = "https://web3bridge.s3.filebase.com/IMG-20220716-WA0088.jpg"
  const metadata = "https://ipfs.filebase.io/ipfs/QmVLg9y6ZLxZuaQ3YCFNj1kbFS4LD5sRby1j7J8jZ6k9FJ"
  
  const SuperNFT = await ethers.getContractFactory("SuperNFT");
  const superNFT = await SuperNFT.deploy(name, symbol, metadata);

  // @ts-ignore
  await superNFT.deployed();

  console.log(
    "Your NFT contract deployed to this address",
    superNFT.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});