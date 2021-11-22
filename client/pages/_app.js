import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	const [currentAccount, setCurrentAccount] = useState('')
	const [correctNetwork, setCorrectNetwork] = useState(false)

	// Checks if wallet is connected
	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (ethereum) {
			console.log('Got the ethereum obejct: ', ethereum)
		} else {
			console.log('No Wallet found. Connect Wallet')
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

		if (accounts.length !== 0) {
			console.log('Found authorized Account: ', accounts[0])
			setCurrentAccount(accounts[0])
		} else {
			console.log('No authorized account found')
		}
	}

	// Calls Metamask to connect wallet on clicking Connect Wallet button
	const connectWallet = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId' })
			console.log('Connected to chain:' + chainId)

			const rinkebyChainId = '0x4'

			const devChainId = 1337
			const localhostChainId = `0x${Number(devChainId).toString(16)}`

			if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
				alert('You are not connected to the Rinkeby Testnet!')
				return
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Found account', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

	// Checks if wallet is connected to the correct network
	const checkCorrectNetwork = async () => {
		const { ethereum } = window
		let chainId = await ethereum.request({ method: 'eth_chainId' })
		console.log('Connected to chain:' + chainId)

		const rinkebyChainId = '0x4'

		const devChainId = 1337
		const localhostChainId = `0x${Number(devChainId).toString(16)}`

		if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
			setCorrectNetwork(false)
		} else {
			setCorrectNetwork(true)
		}
	}

	useEffect(() => {
		checkIfWalletIsConnected()
		checkCorrectNetwork()
	}, [])

	return (
		<div className='bg-gray-100 h-full min-h-screen'>
			{currentAccount === '' ? (
				<div className='flex flex-col justify-center items-center pt-20 gap-y-10'>
					<div className='text-3xl font-extrabold'>
						Welcome to Eternal Domain
					</div>
					<button
						className='text-2xl font-bold py-3 px-12 bg-gray-500 hover:bg-gray-400 transition-colors duration-300 shadow-lg rounded-lg mb-10'
						onClick={connectWallet}
					>
						Connect Wallet
					</button>
				</div>
			) : correctNetwork ? (
				<div>
					<div className='flex justify-between items-center pt-6 pb-4 px-20 shadow-xl'>
						<Link href='/'>
							<div className='flex gap-x-4 font-extrabold text-3xl cursor-pointer'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='36'
										height='36'
										fill='currentColor'
										class='bi bi-box'
										viewBox='0 0 16 16'
									>
										<path d='M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z' />
									</svg>
								</div>
								<div>Eternal Domain</div>
							</div>
						</Link>
						<div className='flex gap-x-12 text-xl font-bold'>
							<div className='flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out h-12 w-24 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl'>
								<Link href='/'>Home</Link>
							</div>
							<div className='flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out h-12 w-24 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl'>
								<Link href='/mint'>Mint</Link>
							</div>
							<div className='flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out h-12 w-24 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl'>
								<Link href='/mynft'>My NFT</Link>
							</div>
						</div>
					</div>
					<Component {...pageProps} />
				</div>
			) : (
				<div className='flex flex-col justify-center items-center pt-40 font-bold text-2xl gap-y-3'>
					<div>----------------------------------------</div>
					<div>Please connect to the Rinkeby Testnet</div>
					<div>and reload the page</div>
					<div>----------------------------------------</div>
				</div>
			)}
		</div>
	)
}

export default MyApp
