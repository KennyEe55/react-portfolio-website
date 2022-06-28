const { ethers } = require('hardhat');

async function main() {

    const earlySupporterContract = await ethers.getContractFactory('EarlySupporter');

    const deployedEarlySupporterContract = await earlySupporterContract.deploy(10);

    await deployedEarlySupporterContract.deployed();

    console.log(
        "Early Supporter Contract Address:",
        deployedEarlySupporterContract.address
    )
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1)
});