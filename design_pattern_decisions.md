# Design pattern decisions

The following design patterns were implemented in [EternalNFT.sol](https://github.com/AbhinavXT/blockchain-developer-bootcamp-final-project/blob/main/contracts/EternalNFT.sol) and [EternalMarketplace.sol](https://github.com/AbhinavXT/blockchain-developer-bootcamp-final-project/blob/main/contracts/EternalMarketplace.sol) contracts :
## Inter-Contract Execution
- The **EternalNFT** contract intracts with [OpenZepplin ERC721URIStorage](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol) for _safeMint(), _setTokenURI() and setApprovalForAll() functions for creting ERC-721 tokens.
- The **EternalMarketplace** contract intracts with **EternalNFT** contract to transfer ERC-721 tokens from the seller to the buyer through the marketplace contract.

## Inheritance and Interfaces
-  The **EternalNFT** contract inherites [OpenZepplin Counters library](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol) for tracking the tokenId of minted NFT. 
-  The **EternalNFT** contract inherites [Base64 library](https://github.com/AbhinavXT/blockchain-developer-bootcamp-final-project/blob/main/contracts/libraries/Base64.sol) to encode the tokenURI of the minted NFT.
-  The **EternalMarketplace** contract inherites [OpenZepplin Counters library](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol) for tracking the itemId of the created marketplace item.
