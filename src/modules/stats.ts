import { BscScan } from "../client";
import { GetBNBLastPriceResponse, GetBNBTotalSupplyResponse, GetValidatorsResponse } from "../typings/stats";

class Stats {
  /**
   * Represents the BscScan client
   *
   * @private
   * @type {BscScan}
   * @memberof Stats
   */
  private client: BscScan;

  /**
   * Creates an instance of Stats.
   * @param {BscScan} client
   * @memberof Stats
   */
  constructor(client: BscScan) {
    this.client = client;
  }

  /**
   * Get BNB Last Price
   * https://docs.bscscan.com/api-endpoints/stats-1#get-bnb-last-price
   * @returns {Promise<GetBNBLastPriceResponse>}
   * @memberof Stats
   */
  async getBNBLastPrice(): Promise<GetBNBLastPriceResponse> {
    return this.do("bnbprice");
  }

  /**
   * Get Total Supply of BNB on the Binance Smart Chain
   * https://docs.bscscan.com/api-endpoints/stats-1#get-total-supply-of-bnb-on-the-binance-smart-chain
   * @returns {Promise<GetBNBLastPriceResponse>}
   * @memberof Stats
   */
  async getBNBTotalSupply(): Promise<GetBNBTotalSupplyResponse> {
    return this.do("bnbsupply");
  }

  /**
   * Get Validators List on the Binance Smart Chain
   * https://docs.bscscan.com/api-endpoints/stats-1#get-validators-list-on-the-binance-smart-chain
   * @returns {Promise<GetBNBTotalSupplyResponse>}
   * @memberof Stats
   */
  async getValidators(): Promise<GetValidatorsResponse> {
    return this.do("validators");
  }

  private async do(action: string, opts?: Record<string, any>): Promise<any> {
    return this.client.query("stats", action, opts);
  }

  // todo: dailytxnfee
  // todo: dailynewaddress
  // todo: dailynetutilization
  // todo: dailytx
  // todo: bnbdailyprice
}

export { Stats };
