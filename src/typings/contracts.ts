export type GetAbiRequest = {
  // the contract address that has a verified source code
  address: string;
};

export type GetAbiResponse = string;

export type GetSourceCodeRequest = {
  // the contract address that has a verified source code
  address: string;
};

export type GetSourceCodeResponse = Array<GetSourceCodeResponseItem>;

export type GetSourceCodeResponseItem = {
  SourceCode: string;
  ABI: string;
  ContractName: string;
  CompilerVersion: string;
  OptimizationUsed: string;
  Runs: string;
  ConstructorArguments: string;
  EVMVersion: string;
  Library: string;
  LicenseType: string;
  Proxy: string;
  Implementation: string;
  SwarmSource: string;
};

export type VerifySourceCodeRequest = {
  contractAddress: string;
  sourceCode: string;
  // solidity-single-file (default) or solidity-standard-json-input (for std-input-json-format support)
  codeFormat?: "solidity-single-file" | "solidity-standard-json-input";
  contractName: string;
  // see https://bscscan.com/solcversions for list of support versions
  compilerVersion: string;
  // 0 = No Optimization, 1 = Optimization used (applicable when codeformat=solidity-single-file)
  optimizationUsed: "0" | "1";
  // set to 200 as default unless otherwise  (applicable when codeformat=solidity-single-file)
  runs: number;
  constructorArguments?: string;
  // leave blank for compiler default, homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul (applicable when codeformat=solidity-single-file)
  evmVersion?: string;
  // id codes 1-12 where 1=No License .. 12=Apache 2.0, see https://bscscan.com/contract-license-types
  licenseType: string;
  libraryName1?: string;
  libraryAddress1?: string;
  libraryName2?: string;
  libraryAddress2?: string;
  libraryName3?: string;
  libraryAddress3?: string;
  libraryName4?: string;
  libraryAddress4?: string;
  libraryName5?: string;
  libraryAddress5?: string;
  libraryName6?: string;
  libraryAddress6?: string;
  libraryName7?: string;
  libraryAddress7?: string;
  libraryName8?: string;
  libraryAddress8?: string;
  libraryName9?: string;
  libraryAddress9?: string;
  libraryName10?: string;
  libraryAddress10?: string;
};

export type VerifySourceCodeResponse = string;

export type VerifyProxyContractRequest = {
  address: string;
  expectedImplementation?: string;
};

export type VerifyProxyContractResponse = string;

export type CheckProxyVerificationRequest = {
  guid: string;
};

export type CheckProxyVerificationResponse = string;
