import { Accounts } from "./modules/accounts";
import { Stats } from "./modules/stats";
import { APIResponse, BscScanOptions } from "./typings";

const BASE_URL = "https://api.bscscan.com/api?";

class BscScan {
  apikey: string | undefined;
  baseUrl: string;

  stats: Stats;
  accounts: Accounts;

  constructor(opts: BscScanOptions) {
    const { apikey } = opts;

    this.apikey = apikey;
    this.baseUrl = opts.baseUrl || BASE_URL;
    this.stats = new Stats(this);
    this.accounts = new Accounts(this);
  }

  async query(module: string, action: string, opts: Record<string, any> = {}): Promise<any> {
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

    const init: RequestInit = { method: "GET", headers };

    const url = new URL("/api?" + params.toString(), BASE_URL);

    const request = new Request(url.toString(), init);
    return this.do(request);
  }

  private async do<T>(request: Request): Promise<APIResponse<T>> {
    const response: Response = await fetch(request);
    const responseBody: APIResponse<T> = await response.json();

    if (responseBody.status === "0") {
      throw new Error(responseBody.message + " - " + responseBody.result);
    }

    return responseBody;
  }
}

export { BscScan };
