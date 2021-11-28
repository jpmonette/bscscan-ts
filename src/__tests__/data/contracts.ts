export const contractResponses: Record<string, Record<string, any>> = {
  get: {
    getabi: {
      status: "1",
      message: "OK",
      result: "[]",
    },
    getsourcecode: {
      status: "1",
      message: "OK",
      result: [
        {
          SourceCode: "pragma solidity 0.6.12;",
          ABI: "[]",
          ContractName: "CakeToken",
          CompilerVersion: "v0.6.12+commit.27d51765",
          OptimizationUsed: "1",
          Runs: "5000",
          ConstructorArguments: "",
          EVMVersion: "Default",
          Library: "",
          LicenseType: "None",
          Proxy: "0",
          Implementation: "",
          SwarmSource: "ipfs://9755240809e31aec9fa5790314682233ca431b7c4f252d7e4bba347e2e742086",
        },
      ],
    },
  },
  post: {
    verifysourcecode: {
      status: "1",
      message: "OK",
      result: "a7xygt433w43um5fda3m6d9jk62jwtjhqdr9zcwj9fmfzcj14r",
    },
    verifyproxycontract: {
      status: "1",
      message: "OK",
      result: "a7xygt433w43um5fda3m6d9jk62jwtjhqdr9zcwj9fmfzcj14r",
    },
    checkproxyverification: {
      status: "1",
      message: "OK",
      result: "0xcbdcd3815b5f975e1a2c944a9b2cd1c985a1cb7f",
    },
  },
};
