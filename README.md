<h1 align="center"><code>bscscan-ts</code></h1>

<p align="center"><code>jpmonette/bscscan-ts</code> - The <strong>BscScan TypeScript API</strong> - explore the <strong>Binance Smart Chain</strong></p>

<p align="center">
  <a href="https://travis-ci.org/jpmonette/bscscan-ts"><img src="https://travis-ci.org/jpmonette/bscscan-ts.svg?branch=master" alt="Build Status"></a> <a href='https://coveralls.io/github/jpmonette/bscscan-ts?branch=master'><img src='https://coveralls.io/repos/github/jpmonette/bscscan-ts/badge.svg?branch=master' alt='Coverage Status' /></a> <a href="https://badge.fury.io/js/bscscan-ts"><img src="https://badge.fury.io/js/bscscan-ts.svg" alt="npm version" height="18"></a> <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a> <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

---

**👩🏻‍💻 Developer Ready**: Interact with the BscScan API in no time!

**💪🏼 Strongly Typed**: Developed using TypeScript / type-safe.

**🔒 Battleproof**: Tests & snapshot for each syndication format to avoid regressions.

# Getting Started

## Installation

```bash
$ yarn add bscscan
```

## Usage

### Import

```ts
import { BscScan } from "bscscan-ts";
```

### Get Latest BNB Price

```ts
const client = new BscScan({ apikey: "api-key" });

const txlist = await client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });

console.log(txlist);
```

## License

Copyright (C) 2013, Jean-Philippe Monette <contact@jpmonette.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
