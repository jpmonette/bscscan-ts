import { Accounts } from "./modules/accounts";
import { Contracts } from "./modules/contracts";
import { Stats } from "./modules/stats";
import { Transactions } from "./modules/transactions";
import { APIResponse, BscScanOptions } from "./typings";

/**
 * The default production API base url
 */
const BASE_URL = "https://api.bscscan.com/api?";

/**
 * A BscScan API client
 *
 * @class BscScan
 */
class BscScan {
  apikey: string | undefined;
  baseUrl: string;

  accounts: Accounts;
  contracts: Contracts;
  transactions: Transactions;
  stats: Stats;

  /**
   * Creates an instance of BscScan.
   * @param {BscScanOptions} opts
   * @memberof BscScan
   */
  constructor(opts: BscScanOptions) {
    const { apikey } = opts;

    this.apikey = apikey;
    this.baseUrl = opts.baseUrl || BASE_URL;

    this.accounts = new Accounts(this);
    this.contracts = new Contracts(this);
    this.stats = new Stats(this);
    this.transactions = new Transactions(this);
  }

  /**
   * Creates a new HTTP request
   *
   * @param {string} [method="GET"]
   * @param {string} module
   * @param {string} action
   * @param {Record<string, any>} [opts={}]
   * @returns {Request}
   * @memberof BscScan
   */
  newRequest(method = "GET", module: string, action: string, opts: Record<string, any> = {}): Request {
    const params = new URLSearchParams({ module, action });

    if (this.apikey) {
      params.set("apikey", this.apikey);
    }

    for (const [key, value] of Object.entries(opts)) {
      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else {
        params.set(key, value);
      }
    }

    const headers: Headers = new Headers();
    headers.set("Content-Type", "application/json; charset=UTF-8");

    const init: RequestInit = { method, headers };

    const url = new URL("/api?" + params.toString(), baseUrl);

    const request = new Request(url.toString(), init);
    return request;
  }

  /**
   * Executes a simplified API query
   *
   * @param {string} module
   * @param {string} action
   * @param {Record<string, any>} [opts={}]
   * @returns {Promise<any>}
   * @memberof BscScan
   */
  async query(module: string, action: string, opts: Record<string, any> = {}): Promise<any> {
    return this.do(this.newRequest("GET", module, action, opts));
  }

  /**
   * Executes an HTTP request
   *
   * @template T
   * @param {Request} request
   * @returns {Promise<T>}
   * @memberof BscScan
   */
  async do<T>(request: Request): Promise<T> {
    const response: Response = await fetch(request);
    const responseBody: APIResponse<T> = await response.json();

    if (responseBody.status === "0") {
      throw new Error(responseBody.message + " - " + responseBody.result);
    }

    return responseBody.result;
  }
}

export { BscScan };
