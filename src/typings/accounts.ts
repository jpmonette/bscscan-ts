import { BEP20, ERC721 } from ".";

type Sort = "asc" | "desc";
type Tag = "latest" | string;
type BlockType = "blocks" | string;

export type Pagination = {
  sort?: Sort;
  startblock?: number;
  endblock?: number;
  page?: number;
  offset?: number;
};

export type GetBalanceRequest = {
  address: string;
  tag?: Tag;
};

export type GetBalanceResponse = string;

export type GetBalanceMultiRequest = {
  address: string[];
  tag?: Tag;
};

export type GetBalanceMultiResponse = Array<GetBalanceMultiResponseItem>;

export type GetBalanceMultiResponseItem = {
  account: string;
  balance: string;
};

export type GetBalanceHistoryRequest = {
  address: string;
  blockno: string;
};

export type GetBalanceHistoryResponse = string;

export type GetTxListRequest = Pagination & {
  address: string;
};

export type GetTxListResponse = Array<GetTxListResponseItem>;

export type GetTxListResponseItem = {
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
};

export type GetTxListInternalRequest = GetTxListRequest;

export type GetTxListInternalResponse = Array<GetTxListInternalResponseItem>;

export type GetTxListInternalResponseItem = {
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
};

export type GetTokenTxRequest = GetTxListRequest & {
  contractaddress?: string;
};

export type GetTokenTxResponse = Array<BEP20>;

export type GetTokenNFTTxRequest = Pagination & {
  address: string;
};

export type GetTokenNFTTxResponse = Array<ERC721>;

export type GetMinedBlocksRequest = Pagination & {
  address: string;
  blocktype?: BlockType;
};

export type GetMinedBlocksResponse = Array<GetMinedBlocksResponseItem>;

export type GetMinedBlocksResponseItem = {
  blockNumber: string;
  timeStamp: string;
  blockReward: string;
};
