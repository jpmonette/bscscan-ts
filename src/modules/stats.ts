import { BscScan } from "../client";
import { GetBNBLastPriceResponse, GetBNBTotalSupplyResponse, GetValidatorsResponse } from "../typings/stats";

class Stats {
  private client: BscScan;

  constructor(client: BscScan) {
    this.client = client;
  }

  async getBNBLastPrice(): Promise<GetBNBLastPriceResponse> {
    return this.do("bnbprice");
  }

  async getBNBTotalSupply(): Promise<GetBNBTotalSupplyResponse> {
    return this.do("bnbsupply");
  }

  async getValidators(): Promise<GetValidatorsResponse> {
    return this.do("validators");
  }

  async do(action: string, opts?: Record<string, any>): Promise<any> {
    return this.client.query("stats", action, opts);
  }

  // todo: dailytxnfee
  // todo: dailynewaddress
  // todo: dailynetutilization
  // todo: dailytx
  // todo: bnbdailyprice
}

export { Stats };
