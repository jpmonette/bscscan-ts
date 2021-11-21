<h1 align="center"><code>@jpmonette/bscscan</code></h1>

<p align="center"><code>@jpmonette/bscscan</code> - Explore the <strong>Binance Smart Chain</strong> using TypeScript and JavaScript</p>

<p align="center">
  <a href="https://travis-ci.com/jpmonette/bscscan-ts"><img src="https://travis-ci.com/jpmonette/bscscan-ts.svg?branch=develop" alt="Build Status"></a> <a href='https://coveralls.io/github/jpmonette/bscscan-ts?branch=develop'><img src='https://coveralls.io/repos/github/jpmonette/bscscan-ts/badge.svg?branch=develop' alt='Coverage Status' /></a> <a href="https://www.npmjs.com/package/@jpmonette/bscscan"><img src="https://badge.fury.io/js/%40jpmonette%2Fbscscan.svg" alt="npm version" height="18"></a> <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a> <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

---

**👩🏻‍💻 Developer Ready**: Interact with the BscScan API in no time!

**💪🏼 Strongly Typed**: Developed using TypeScript.

**🔒 Battleproof**: Tested using Jest.

# Getting Started

## Installation

```bash
$ yarn add @jpmonette/bscscan
```

## Usage

### Import & Initialize

```ts
import { BscScan } from "@jpmonette/bscscan";

const client = new BscScan({ apikey: "api-key" });
```

### Get Account Balance

```ts
const balance = await client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });

console.log(balance);
// 13305527100000000000
```

### Get Transaction List

```ts
const txlist = await client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });

console.log(txlist);
//[
//  {
//    "blockNumber": "12476392",
//    "timeStamp": "1636382206",
//    "hash": "0x07ef689ba048006542b287aa6e89c777a9f6550b01ceac83fd3bef88ead38387",
//    "nonce": "2095670",
//    "blockHash": "0x3a029015928e4752ace608cd879c83efeca1a3a30dd0c1755ec97aa335813ae1",
//    "transactionIndex": "24",
//    "from": "0xdccf3b77da55107280bd850ea519df3705d1a75a",
//    "to": "0x4e656459ed25bf986eea1196bc1b00665401645d",
//    "value": "3873118620000000000",
//    "gas": "207128",
//    "gasPrice": "10000000000",
//    "isError": "0",
//    "txreceipt_status": "1",
//    "input": "0x",
//    "contractAddress": "",
//    "cumulativeGasUsed": "1463016",
//    "gasUsed": "21000",
//    "confirmations": "361409"
//  },
//  {
//    "blockNumber": "12685304",
//    "timeStamp": "1637030116",
//    "hash": "0xba2ad55a8cc6126c125a2460cbc27030b4ecb9cce27e8f238fcd71fcf32d6c24",
//    "nonce": "155854",
//    "blockHash": "0x53a5e395180d31adc534a846b3620690b0bc40237819df209980d0090fd8e8f3",
//    "transactionIndex": "41",
//    "from": "0x1fbe2acee135d991592f167ac371f3dd893a508b",
//    "to": "0x4e656459ed25bf986eea1196bc1b00665401645d",
//    "value": "2559805720000000000",
//    "gas": "207128",
//    "gasPrice": "10000000000",
//    "isError": "0",
//    "txreceipt_status": "1",
//    "input": "0x",
//    "contractAddress": "",
//    "cumulativeGasUsed": "1224129",
//    "gasUsed": "21000",
//    "confirmations": "152497"
//  }
//]
```

## License

> Copyright (C) 2021, Jean-Philippe Monette <contact@jpmonette.net>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
