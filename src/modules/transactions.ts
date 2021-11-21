import { BscScan } from "../client";
import { GetTxReceiptStatusRequest, GetTxReceiptStatusResponse } from "../typings";

class Transactions {
  /**
   * Represents the BscScan client
   *
   * @private
   * @type {BscScan}
   * @memberof Transactions
   */
  private client: BscScan;

  /**
   * Creates an instance of Transactions.
   *
   * @param {BscScan} client
   * @memberof Transactions
   */
  constructor(client: BscScan) {
    this.client = client;
  }

  /**
   * Check Transaction Receipt Status
   * https://docs.bscscan.com/api-endpoints/stats#check-transaction-receipt-status
   *
   * @param {GetTxReceiptStatusRequest} opts
   * @returns {Promise<GetTxReceiptStatusResponse>}
   * @memberof Transactions
   */
  async getTxReceiptStatus(opts: GetTxReceiptStatusRequest): Promise<GetTxReceiptStatusResponse> {
    return this.do("gettxreceiptstatus", opts);
  }

  private async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("transaction", action, opts);
  }
}

export { Transactions };
