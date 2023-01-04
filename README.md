# 🌟 Injective SDK-TS Example

_Decentralized Derivatives Trading. Any Market. Anytime. Anywhere._

An example repository based on TypeScript on interacting with our chain using the `@injectivelabs/sdk-ts` package.

---

## 📚 Getting Started

1. Clone the repository

```bash
$ git clone git@github.com:InjectiveLabs/injective-sdk-ts-example.git
$ cd injective-sdk-ts-example
$ yarn
```

2. Duplicate the .env.example to .env and fill the values

```bash
## ChainId should be 1 for mainnet, 42 for testnet
CHAIN_ID=42

### Used to fetch predefined endpoints for our sentry nodes, can be
### public (mainnet) or testnet (testnet)
NETWORK=testnet

### Account's private key used for signing
PRIVATE_KEY=
```

3. Execute an example (optional)

```bash
yarn ts-node pathToExample

## Example: yarn ts-node ./src/chain/MsgBid.ts
```

## 📖 Documentation

---

## ⛑ Support

Reach out to us at one of the following places!

- Website at <a href="https://injective.com" target="_blank">`injective.com`</a>
- Twitter at <a href="https://twitter.com/InjectiveLabs" target="_blank">`@InjectiveLabs`</a>

---

## 🔓 License

Copyright © 2021 - 2022 Injective Labs Inc. (https://injectivelabs.org/)

<a href="https://iili.io/mNneZN.md.png"><img src="https://iili.io/mNneZN.md.png" style="width: 300px; max-width: 100%; height: auto" />

Originally released by Injective Labs Inc. under: <br />
Apache License <br />
Version 2.0, January 2004 <br />
http://www.apache.org/licenses/

<p>&nbsp;</p>
<div align="center">
  <sub><em>Powering the future of decentralized finance.</em></sub>
</div>
