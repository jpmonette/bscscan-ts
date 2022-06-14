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
  GetBalanceHistoryResponse,
  GetBalanceHistoryRequest,
} from "../typings/accounts";

class Accounts {
  /**
   * Represents the BscScan client
   *
   * @private
   * @type {BscScan}
   * @memberof Accounts
   */
  private client: BscScan;

  /**
   * Creates an instance of Accounts.
   *
   * @param {BscScan} client
   * @memberof Accounts
   */
  constructor(client: BscScan) {
    this.client = client;
  }

  /**
   * Get BNB Balance for a Single Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-bnb-balance-for-a-single-address
   *
   * @param {GetBalanceRequest} opts
   * @returns {Promise<GetBalanceResponse>}
   * @memberof Accounts
   */
  async getBalance(opts: GetBalanceRequest): Promise<GetBalanceResponse> {
    return this.do("balance", opts);
  }

  /**
   * Get BNB Balance for Multiple Addresses in a Single Call
   * https://docs.bscscan.com/api-endpoints/accounts#get-bnb-balance-for-multiple-addresses-in-a-single-call
   *
   * @param {GetBalanceMultiRequest} opts
   * @returns {Promise<GetBalanceMultiResponse>}
   * @memberof Accounts
   */
  async getBalanceMulti(opts: GetBalanceMultiRequest): Promise<GetBalanceMultiResponse> {
    return this.do("balancemulti", opts);
  }

  /**
   *
   */
  async getBalanceHistory(opts: GetBalanceHistoryRequest): Promise<GetBalanceHistoryResponse> {
    return this.do("balancehistory", opts);
  }
  /**
   * Get a list of 'Normal' Transactions By Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
   *
   * @param {GetTxListRequest} opts
   * @returns {Promise<GetTxListResponse>}
   * @memberof Accounts
   */
  async getTxList(opts: GetTxListRequest): Promise<GetTxListResponse> {
    return this.do("txlist", opts);
  }

  /**
   * Get a list of 'Internal' Transactions by Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-a-list-of-internal-transactions-by-address
   * @param {GetTxListInternalRequest} opts
   * @returns {Promise<GetTxListInternalResponse>}
   * @memberof Accounts
   */
  async getTxListInternal(opts: GetTxListInternalRequest): Promise<GetTxListInternalResponse> {
    return this.do("txlistinternal", opts);
  }

  /**
   * Get a list of 'BEP-20 Token Transfer Events' by Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-a-list-of-bep-20-token-transfer-events-by-address
   * @param {GetTokenTxRequest} opts
   * @returns {Promise<GetTokenTxResponse>}
   * @memberof Accounts
   */
  async getTokenTx(opts: GetTokenTxRequest): Promise<GetTokenTxResponse> {
    return this.do("tokentx", opts);
  }

  /**
   * Get a list of 'BEP-721 Token Transfer Events' by Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-a-list-of-bep-721-token-transfer-events-by-address
   * @param {GetTokenNFTTxRequest} opts
   * @returns {Promise<GetTokenNFTTxResponse>}
   * @memberof Accounts
   */
  async getTokenNFTTx(opts: GetTokenNFTTxRequest): Promise<GetTokenNFTTxResponse> {
    return this.do("tokennfttx", opts);
  }

  /**
   * Get list of Blocks Validated by Address
   * https://docs.bscscan.com/api-endpoints/accounts#get-list-of-blocks-validated-by-address
   * @param {GetMinedBlocksRequest} opts
   * @returns {Promise<GetMinedBlocksResponse>}
   * @memberof Accounts
   */
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

  private async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("account", action, opts);
  }
}

export { Accounts };
