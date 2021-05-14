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
    return this.do("getminedblocks", opts);
  }

  async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("account", action, opts);
  }

  // todo: balancehistory
}

export { Accounts };
