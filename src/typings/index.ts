/**
 * Options used to initialize a BscScan client
 */
export type BscScanOptions = {
  apikey?: string;
  baseUrl?: string;
};

export type APIResponse<T> = {
  status: "1" | "0";
  message: string;
  result: T;
};

export type Token = {
  blockHash: string;
  blockNumber: string;
  confirmations: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  from: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  hash: string;
  input: string;
  nonce: string;
  timeStamp: string;
  to: string;
  tokenDecimal: string;
  tokenName: string;
  tokenSymbol: string;
  transactionIndex: string;
};

export type BEP20 = Token & { value: string };
export type ERC721 = Token & { tokenID: string };
