// const hre = require("hardhat");

// async function main() {

// //   @ts-ignore
// //   let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// //   const _value = 1;

//   const CONTRACTADDRESS = "0x93E709bEC0a1c8B0DBC777f5ef2b35Fdb5d255a9";
//   const Sizzle = await hre.ethers.getContractAt("ISizzle", CONTRACTADDRESS);
// // @ts-ignore
// await Sizzle.safeMint("0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C", "https://gateway.pinata.cloud/ipfs/QmUye6udcNXKhwFwmtAeMex87xDnn2T16HHGQUq87CvaAN");


// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("Sizzle");

    // The IPFS Address of image uploaded to Pinata
   
    const URI = "https://gateway.pinata.cloud/ipfs/QmUye6udcNXKhwFwmtAeMex87xDnn2T16HHGQUq87CvaAN"

    // Wallet Address
    const WALLET_ADDRESS = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C"

    // Contract address deployed
    const CONTRACT_ADDRESS = "0xB77d9c9f676A41E6DdDb5C8A17664e1bdA895f4D"

    const contract = await NFT.attach(CONTRACT_ADDRESS);
    const mintres = await contract.safeMint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", mintres);
}

main().then(() => process.exit(0))
      .catch(error => {
          console.error(error);
          process.exit(1);
      })