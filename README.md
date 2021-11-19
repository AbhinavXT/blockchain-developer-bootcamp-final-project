# Final project - Eternal Domain Marketplace

## Table of Contents:

- [Final project - Eternal Domain Marketplace](#final-project---eternal-domain-marketplace)
  - [Table of Contents:](#table-of-contents)
  - [Deployed Website url](#deployed-website-url)
  - [Screencast link](#screencast-link)
  - [Project Description](#project-description)
  - [Workflow](#workflow)
  - [Directory structure](#directory-structure)
  - [Clone, Install and Build steps](#clone-install-and-build-steps)
    - [Prerequisites](#prerequisites)
    - [Cloning and installing dependencies](#cloning-and-installing-dependencies)
    - [Testing Contracts](#testing-contracts)
    - [Running the frontend](#running-the-frontend)
    - [Deploying and running against a local instance](#deploying-and-running-against-a-local-instance)
  - [TODO Fetures](#todo-fetures)

## Deployed Website url

https://eternal-domain.vercel.app/

## Screencast link

## Project Description

**Eternal Domain** is a marketplace where users can buy, sell and mint **Eternal Characters**, which are ERC-721 standard (NFT) tokens.

Eternal Characters are the residants of **Eternal Domain** world. They consists of 3 main characterstics, **Area of Control, Weapon and Rank**.

- **Area of Contral -** Fire, Wind, Wave, Earth, Light, Shadow, Thunder, Space, Time, Gravity, Ice
- **Weapon -** Sword, Spear, Shield, Hammer, Saber, Axe, Bow, Staff, Wand, Fist, Dagger, Scythe, Mace, Blade, Katana
- **Rank -** Lord, King, Emperor, Venerable, Ancestor, Saint, God

## Workflow

## Directory structure

```
blockchain-developer-bootcamp-final-project
 ┣ client
 ┃ ┣ pages
 ┃ ┃ ┣ _app.js
 ┃ ┃ ┣ buynft.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ mint.js
 ┃ ┃ ┣ mynft.js
 ┃ ┃ ┗ sellnft.js
 ┃ ┣ public
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┗ vercel.svg
 ┃ ┣ utils
 ┃ ┃ ┣ EternalMarketplace.json
 ┃ ┃ ┗ EternalNFT.json
 ┃ ┣ .gitignore
 ┃ ┣ README.md
 ┃ ┣ config.js
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ postcss.config.js
 ┃ ┗ tailwind.config.js
 ┣ contracts
 ┃ ┣ libraries
 ┃ ┃ ┗ Base64.sol
 ┃ ┣ EternalMarketplace.sol
 ┃ ┗ EternalNFT.sol
 ┣ scripts
 ┃ ┣ deploy.js
 ┃ ┗ run.js
 ┣ test
 ┃ ┗ eternalTest.js
 ┣ .gitignore
 ┣ README.md
 ┣ avoiding_common_attacks.md
 ┣ deployed_address.txt
 ┣ design_pattern_decisions.md
 ┣ hardhat.config.js
 ┣ package-lock.json
 ┗ package.json
```

## Clone, Install and Build steps

### Prerequisites

1. [Git](https://git-scm.com/)
2. [Node JS](https://nodejs.org/en/) (everything was installed and tested under v15.12.0)
3. A Browser with the [MetaMask extension](https://metamask.io/) installed.
4. Test Ether on the Rinkeby network.

<br>

### Cloning and installing dependencies

1. Clone the project repository on your local machine

```
 git clone https://github.com/AbhinavXT/blockchain-developer-bootcamp-final-project.git

 cd blockchain-developer-bootcamp-final-project
```

2. Installing dependencies

- For contracts -
  ```
  npm install
  ```
- For client -
  ```
  cd client
  npm install
  ```

### Testing Contracts

For testing contracts run command:

```
npx hardhat test
```

### Running the frontend

For running frontend locally run command:

```
cd client
npm run dev
```

### Deploying and running against a local instance

For deploying and running the dapp against a local instance run commands:

```
npx hardhat node
```

This should create a local network with 19 accounts. Keep it runnning, and in another terminal run:

```
npx hardhat run scripts/deploy.js --network localhost
```

When the deployment is complete, the CLI should print out the addresses of the contracts that were deployed:

```
EternalMarket deployed to: 'EternalMarketplace contract address'
EternalNFT deployed to: 'EternalNFT contract address'
```

Copy these addresses and paste them in the **config.js** file inside the client floder, in place of current addresses.

Now switch your MetaMask wallet network to Localhost 8545 and import the account using the private keys listed by hardhat.
_For better testing the transfer of tokens and transactions import at least 2 accounts_

After this you can run and test the dapp locally in your web browser.

## TODO Fetures
