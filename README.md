# Vault_Contract_nextjs-web3

This is a minimalistic project to show us how we can connect to metamask using [web3-next](https://github.com/BTC415/Vault_Contract_Next_Web3) in nextjs / web3.js.

This could just as easily be done in typescript.

This project started with nexjs boilerplate by running `yarn create next-app nextjs-web3-react-metamask-connect`

Video Coming soon...

- [Vault_Contract_Next_Web3](#Vault_Contract_Nextjs_Web3js)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
    - [Important localhost note](#important-localhost-note)
- [Full Examples](#full-examples)
- [Thank you!](#thank-you)

Video coming soon...

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs & npm](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` And get an ouput like: `vx.x.x`
  - You'll know you've installed npx right if you can run:
    - `npm --version` And get an ouput like: `x.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm
- [Metamask](https://metamask.io/)
  - This is a browser extension that lets you interact with the blockchain.

## Quickstart

1. Clone and install dependencies

```
git clone https://github.com//LovelyDodger/Vault_Contract_Next_Web3
cd Vault_Contract_Next_Web3
yarn
```

2. Then, you'll need to open up a second terminal and run:

```
git clone https://github.com//BTC415/Vault_Contract_Next_Web3
cd /LovelyDodger/Vault_Contract_Next_Web3
yarn hardhat node
```

This will deploy a sample contract and start a local hardhat blockchain.

3. Connect your [metamask](https://metamask.io/) to your local hardhat blockchain.

> **PLEASE USE A METAMASK ACCOUNT THAT ISNT ASSOCIATED WITH ANY REAL MONEY.**
> I usually use a few different browser profiles to separate my metamasks easily.

In the output of the above command, take one of the private key accounts and [import it into your metamask.](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account)

Additionally, add your localhost with chainid 31337 to your metamask.

4. Open the UI

Then, back in your first terminal, run:

```
yarn dev
```

5. Hit buttons

You'll be brought to the UI after running `yarn dev` which has exactly 2 buttons. Hit `connect` then hit `execute` and you'll send a transaction to your local hardhat.

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in.

# Thank you!

If you appreciated this, feel free to follow me or donate!

ETH/Polygon/Avalanche/etc Address: 0x9680201d9c93d65a3603d2088d125e955c73BD65


# Smart Contract address

This is the address of the vault at Goerli:
0x696dA2B5968f33F8C60e02F660e84B04709Da30b

This is the address of the distribution contract:
0xdAd37C0FB1A095bc9D237BB4A55F5FD6eab2B54e

And this is the DAO contract:
0xF713C86d5e5560D5F69A1B1d1DA3E4d45e9c5F3a
