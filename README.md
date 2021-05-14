<h1 align="center"><code>@jpmonette/bscscan</code></h1>

<p align="center"><code>@jpmonette/bscscan</code> - The <strong>BscScan TypeScript API</strong> - explore the <strong>Binance Smart Chain</strong></p>

<p align="center">
  <a href="https://travis-ci.com/jpmonette/bscscan-ts"><img src="https://travis-ci.com/jpmonette/bscscan-ts.svg?branch=develop" alt="Build Status"></a> <a href='https://coveralls.io/github/jpmonette/bscscan-ts?branch=develop'><img src='https://coveralls.io/repos/github/jpmonette/bscscan-ts/badge.svg?branch=develop' alt='Coverage Status' /></a> <a href="https://www.npmjs.com/package/@jpmonette/bscscan"><img src="https://badge.fury.io/js/%40jpmonette%2Fbscscan.svg" alt="npm version" height="18"></a> <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a> <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

---

**👩🏻‍💻 Developer Ready**: Interact with the BscScan API in no time!

**💪🏼 Strongly Typed**: Developed using TypeScript / type-safe.

**🔒 Battleproof**: Tests & snapshot for each syndication format to avoid regressions.

# Getting Started

## Installation

```bash
$ yarn add @jpmonette/bscscan
```

## Usage

### Import

```ts
import { BscScan } from "@jpmonette/bscscan";
```

### Get Latest BNB Price

```ts
const client = new BscScan({ apikey: "api-key" });

const txlist = await client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });

console.log(txlist);
// {
//   status: '1',
//   message: 'OK',
//   result: [
//     {
//       blockNumber: '3385',
//       blockHash: '0x51bdc4233991acedb25a895c8659f6fb7607dc40626a1dcb795e57ed7ed1a673',
//       timeStamp: '1598681758',
//       hash: '0x30885770a108af3fd8e9b8c2d5d104dd067ab0a333379a4cdd1991cb80d23a28',
//       nonce: '0',
//       transactionIndex: '0',
//       from: '0x4e656459ed25bf986eea1196bc1b00665401645d',
//       to: '0x0000000000000000000000000000000000001004',
//       value: '3000000000000000',
//       gas: '125587',
//       gasPrice: '30000000000',
//       input: '',
//       contractAddress: '',
//       cumulativeGasUsed: '110587',
//       txreceipt_status: '1',
//       gasUsed: '110587',
//       confirmations: '7405141',
//       isError: '0'
//     },
//     {
//       ...
//     }
// }
```

## License

Copyright (C) 2013, Jean-Philippe Monette <contact@jpmonette.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
