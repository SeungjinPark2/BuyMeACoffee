const hardhat = require("hardhat");

async function main() {
  const buyMeACoffee = await hardhat.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffeeContract = await buyMeACoffee.deploy();

  await buyMeACoffeeContract.deployed();

  console.log("BuyMeACoffee is deployed at: " + buyMeACoffeeContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });