async function main() {
	const NFTMarket = await hre.ethers.getContractFactory('EternalMarketplace')
	const nftMarket = await NFTMarket.deploy()
	await nftMarket.deployed()
	console.log('nftMarket contract deployed to:', nftMarket.address)

	const NFT = await hre.ethers.getContractFactory('EternalNFT')
	const nft = await NFT.deploy(nftMarket.address)
	await nft.deployed()
	console.log('nft contract deployed to:', nft.address)
}

const runMain = async () => {
	try {
		await main()
		process.exit(0)
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

runMain()
