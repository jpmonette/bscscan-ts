import { BscScan } from "../client";
import {
  GetBalanceMultiRequest,
  GetBalanceMultiResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetTokenNFTTxRequest,
  GetTokenNFTTxResponse,
  GetTokenTxRequest,
  GetTokenTxResponse,
  GetTxListInternalRequest,
  GetTxListInternalResponse,
  GetTxListRequest,
  GetTxListResponse,
  GetMinedBlocksRequest,
  GetMinedBlocksResponse,
} from "../typings/accounts";

class Accounts {
  private client: BscScan;

  constructor(client: BscScan) {
    this.client = client;
  }

  async getBalance(opts: GetBalanceRequest): Promise<GetBalanceResponse> {
    return this.do("balance", opts);
  }

  async getBalanceMulti(opts: GetBalanceMultiRequest): Promise<GetBalanceMultiResponse> {
    return this.do("balancemulti", opts);
  }

  async getTxList(opts: GetTxListRequest): Promise<GetTxListResponse> {
    return this.do("txlist", opts);
  }

  async getTxListInternal(opts: GetTxListInternalRequest): Promise<GetTxListInternalResponse> {
    return this.do("txlistinternal", opts);
  }

  async getTokenTx(opts: GetTokenTxRequest): Promise<GetTokenTxResponse> {
    return this.do("tokentx", opts);
  }

  async getTokenNFTTx(opts: GetTokenNFTTxRequest): Promise<GetTokenNFTTxResponse> {
    return this.do("tokennfttx", opts);
  }

  async getMinedBlocks(opts: GetMinedBlocksRequest): Promise<GetMinedBlocksResponse> {
    try {
      const response = await this.do("getminedblocks", opts);
      return response;
    } catch (e) {
      if (e.message.includes("No transactions found")) {
        return [];
      }
      throw e;
    }
  }

  async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("account", action, opts);
  }

  // todo: balancehistory
}

export { Accounts };
