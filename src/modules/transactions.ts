import { BscScan } from "../client";
import { GetTxReceiptStatusRequest, GetTxReceiptStatusResponse } from "../typings";

class Transactions {
  private client: BscScan;

  constructor(client: BscScan) {
    this.client = client;
  }

  async getTxReceiptStatus(opts: GetTxReceiptStatusRequest): Promise<GetTxReceiptStatusResponse> {
    return this.do("gettxreceiptstatus", opts);
  }

  async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("transaction", action, opts);
  }
}

export { Transactions };
