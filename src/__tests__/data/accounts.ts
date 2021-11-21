export const accountResponses: Record<string, any> = {
  balance: {
    status: "1",
    message: "OK",
    result: "1921440981086393507806711",
  },
  balancemulti: {
    status: "1",
    message: "OK",
    result: [
      { account: "0x515b72ed8a97f42c568d6a143232775018f133c8", balance: "1921270037723443507806711" },
      { account: "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645", balance: "1627060201835648279950872" },
    ],
  },
  txlist: {
    status: "1",
    message: "OK",
    result: [
      {
        blockNumber: "8200395",
        timeStamp: "1623403230",
        hash: "0xe9a602f83a4e9592cd3b08ff0ec99b65842b66acf71325b163f802d764915679",
        nonce: "17",
        blockHash: "0xfb8a6a69ddc2e72aae9be480d3162f041578fee6cdbfc0e175cb3d5422df9b6e",
        transactionIndex: "11",
        from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        to: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        value: "1000000000000000000000",
        gas: "21000",
        gasPrice: "10000000000",
        isError: "0",
        txreceipt_status: "1",
        input: "0x",
        contractAddress: "",
        cumulativeGasUsed: "2452470",
        gasUsed: "21000",
        confirmations: "4637006",
      },
      {
        blockNumber: "8400190",
        timeStamp: "1624008263",
        hash: "0x96f03c131e7a4e159a83131afbfe5f985be105a6593a144e2034d8ffde2c6dcf",
        nonce: "0",
        blockHash: "0x8f350abfaf636fd998ba054c7edf9d351b01e317592403185ee26901db555dd3",
        transactionIndex: "13",
        from: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        to: "0xb2923dc4096e1ec1401ff4febd99c2f6b5315bf4",
        value: "1411454740000000000",
        gas: "21000",
        gasPrice: "10000000000",
        isError: "0",
        txreceipt_status: "1",
        input: "0x",
        contractAddress: "",
        cumulativeGasUsed: "3390501",
        gasUsed: "21000",
        confirmations: "4437211",
      },
    ],
  },
  txlistinternal: {
    status: "1",
    message: "OK",
    result: [
      {
        blockNumber: "10628250",
        timeStamp: "1630779994",
        hash: "0xc6963be01d4e718ccb57fac77eeb9470079f68c8ded39d691c8628e46b48f22d",
        from: "0xf392c128acbfd7966f1cf08deb11a79cf12b3883",
        to: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        value: "112310000000000",
        contractAddress: "",
        input: "",
        type: "call",
        gas: "0",
        gasUsed: "0",
        traceId: "0_1",
        isError: "0",
        errCode: "",
      },
    ],
  },
  tokentx: {
    status: "1",
    message: "OK",
    result: [
      {
        blockNumber: "8527363",
        timeStamp: "1624391825",
        hash: "0xe41ccda7b52e8720ea5663bfc19e1c6d912b2c67ecd0be29294cce01d5ef2bdd",
        nonce: "112",
        blockHash: "0x868ceda2b8063d0f40056446ff5fab3cba494b3a3752bf7cd6297297cf0b0740",
        from: "0xd152f549545093347a162dce210e7293f1452150",
        contractAddress: "0xc1ed07a64f69ba3658e227a76d962218519c147a",
        to: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        value: "1989000000000000000000",
        tokenName: "OVRswap.com",
        tokenSymbol: "OVR",
        tokenDecimal: "18",
        transactionIndex: "57",
        gas: "8129776",
        gasPrice: "5000000000",
        gasUsed: "8125393",
        cumulativeGasUsed: "16012394",
        input: "deprecated",
        confirmations: "4309633",
      },
      {
        blockNumber: "8534601",
        timeStamp: "1624413715",
        hash: "0x5fe7553d393baec7876792abba532f3b97d60d841cb15674d5b55cece7d03242",
        nonce: "36",
        blockHash: "0xa653a8587e05b4faeca01da1430a141dd74e58444ba94205298d95b35754277e",
        from: "0x9ed60f5a914ef064e7abf0643b1b47b3e8b568e8",
        contractAddress: "0x1deb61e41f337b04660eab59a34ad5e39afe9348",
        to: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        value: "160000000000000000000",
        tokenName: "EAO",
        tokenSymbol: "EAO",
        tokenDecimal: "18",
        transactionIndex: "49",
        gas: "51189",
        gasPrice: "5000000000",
        gasUsed: "51189",
        cumulativeGasUsed: "6707064",
        input: "deprecated",
        confirmations: "4302395",
      },
    ],
  },
  tokennfttx: {
    status: "1",
    message: "OK",
    result: [
      {
        blockNumber: "11998587",
        timeStamp: "1634923334",
        hash: "0x50a2e22db4df52d73f2743f06152be86fb3b600646f72e9e7e7abd415531f419",
        nonce: "379",
        blockHash: "0xdf0e6157fab1d82b530f487f857d902209074ee816324e802952d256ad00cb6f",
        from: "0xc0ecdbffbe14e69438ef0f06c16842c88573f564",
        contractAddress: "0xc0bfe67cedc9fe042f335258eb75b9e1baaf1a5d",
        to: "0x515b72ed8a97f42c568d6a143232775018f133c8",
        tokenID: "260",
        tokenName: "TTK Hero",
        tokenSymbol: "TTKHero",
        tokenDecimal: "0",
        transactionIndex: "336",
        gas: "111424",
        gasPrice: "5000000000",
        gasUsed: "81424",
        cumulativeGasUsed: "50420346",
        input: "deprecated",
        confirmations: "838914",
      },
    ],
  },
  getminedblocks: {
    success: {
      status: "1",
      message: "OK",
      result: [
        { blockNumber: "12837584", timeStamp: "1637509278", blockReward: "647708965667033920" },
        { blockNumber: "12837563", timeStamp: "1637509215", blockReward: "507184284612347890" },
        { blockNumber: "12837542", timeStamp: "1637509152", blockReward: "565437075463792362" },
        { blockNumber: "12837521", timeStamp: "1637509089", blockReward: "0" },
      ],
    },
    noBlock: {
      status: "0",
      message: "No transactions found",
      result: [],
    },
    error: {
      status: "0",
      message: "API Key Not Found",
      result: [],
    },
  },
};
