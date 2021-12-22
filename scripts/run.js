const hre = require('hardhat')

const main = async () => {
  const [owner, randomWallet] = await hre.ethers.getSigners()
  const contractFactory = await hre.ethers.getContractFactory('WavePortal')
  const waveContract = await contractFactory.deploy()
  await waveContract.deployed()

  console.log('contract deployed to: ', waveContract.address)
  console.log('contract deployed by: ', owner.address)

  let waveCount
  waveCount = await waveContract.getTotalWaves()

  let wave1 = await waveContract.wave()
  await wave1.wait()
  let wave2 = await waveContract.wave()
  await wave2.wait()
  let wave3 = await waveContract.wave()
  await wave3.wait()

  waveCount = await waveContract.getTotalWaves()
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
