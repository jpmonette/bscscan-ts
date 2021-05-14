import { APIResponse } from "./";

export type GetBalanceRequest = {
  address: string;
  tag?: "latest" | string;
};

export type GetBalanceResponse = APIResponse<string>;

export type GetBalanceMultiRequest = {
  address: string[];
  tag?: "latest" | string;
};

export type GetBalanceMultiResponse = APIResponse<Array<{ account: string; balance: string }>>;

export type GetTxListRequest = {
  address: string;
  startblock?: number;
  endblock?: number;
  sort?: "asc" | "desc";
  page?: number;
  offset?: number;
};

export type GetTxListResponse = APIResponse<{
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
  isError: string;
  nonce: string;
  timeStamp: string;
  to: string;
  transactionIndex: string;
  txreceipt_status: string;
  value: string;
}>;

export type GetTxListInternalRequest = GetTxListRequest;

export type GetTxListInternalResponse = APIResponse<{
  blockNumber: string;
  contractAddress: string;
  errCode: string;
  from: string;
  gas: string;
  gasUsed: string;
  hash: string;
  input: string;
  isError: string;
  timeStamp: string;
  to: string;
  traceId: string;
  type: string;
  value: string;
}>;

export type GetTokenTxRequest = GetTxListRequest & {
  contractaddress?: string;
};

export type GetTokenTxResponse = APIResponse<
  Array<{
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
    value: string;
  }>
>;

export type GetTokenNFTTxRequest = {
  address: string;
  blocktype?: "blocks" | string;
  page?: number;
  offset?: number;
};

export type GetTokenNFTTxResponse = APIResponse<{
  blockNumber: string;
  timeStamp: string;
  blockReward: string;
}>;
