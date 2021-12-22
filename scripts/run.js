const hre = require('hardhat')

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory('WavePortal')
  const waveContract = await contractFactory.deploy()
  await waveContract.deployed()

  console.log('contract deployed to: ', waveContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

runMain()
