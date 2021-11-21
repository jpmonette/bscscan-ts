import { BscScan } from "../client";
import {
  CheckProxyVerificationRequest,
  CheckProxyVerificationResponse,
  GetAbiRequest,
  GetAbiResponse,
  GetSourceCodeRequest,
  GetSourceCodeResponse,
  VerifyProxyContractRequest,
  VerifyProxyContractResponse,
  VerifySourceCodeRequest,
  VerifySourceCodeResponse,
} from "../typings";

class Contracts {
  /**
   * Represents the BscScan client
   *
   * @private
   * @type {BscScan}
   * @memberof Contracts
   */
  private client: BscScan;

  /**
   * Creates an instance of Contracts.
   *
   * @param {BscScan} client
   * @memberof Contracts
   */
  constructor(client: BscScan) {
    this.client = client;
  }

  /**
   * Get Contract ABI for Verified Contract Source Codes
   * https://docs.bscscan.com/api-endpoints/contracts#get-contract-abi-for-verified-contract-source-codes
   *
   * @param {GetAbiRequest} opts
   * @returns {Promise<GetAbiResponse>}
   * @memberof Contracts
   */
  async getAbi(opts: GetAbiRequest): Promise<GetAbiResponse> {
    return this.do("getabi", opts);
  }

  /**
   * Get Contract Source Code for Verified Contract Source Codes
   * https://docs.bscscan.com/api-endpoints/contracts#get-contract-source-code-for-verified-contract-source-codes
   *
   * @param {GetSourceCodeRequest} opts
   * @returns {Promise<GetSourceCodeResponse>}
   * @memberof Contracts
   */
  async getSourceCode(opts: GetSourceCodeRequest): Promise<GetSourceCodeResponse> {
    return this.do("getsourcecode", opts);
  }

  /**
   * Verify Source Code
   * https://docs.bscscan.com/api-endpoints/contracts#verify-source-code
   *
   * @param {VerifySourceCodeRequest} opts
   * @returns {Promise<VerifySourceCodeResponse>}
   * @memberof Contracts
   */
  async verifySourceCode(opts: VerifySourceCodeRequest): Promise<VerifySourceCodeResponse> {
    const request = this.client.newRequest("POST", "contract", "verifysourcecode", opts);
    // @ts-ignore
    return this.client.do(request);
  }

  // todo: checkverifystatus

  /**
   * Verifying Proxy Contract
   * https://docs.bscscan.com/api-endpoints/contracts#verifying-proxy-contract-using-curl
   *
   * @param {VerifyProxyContractRequest} opts
   * @returns {Promise<VerifyProxyContractResponse>}
   * @memberof Contracts
   */
  async verifyProxyContract(opts: VerifyProxyContractRequest): Promise<VerifyProxyContractResponse> {
    const request = this.client.newRequest("POST", "contract", "verifyproxycontract", opts);
    // @ts-ignore
    return this.client.do(request);
  }

  /**
   * Checking Proxy Contract Verification Submission Status
   * https://docs.bscscan.com/api-endpoints/contracts#checking-proxy-contract-verification-submission-status-using-curl
   *
   * @param {CheckProxyVerificationRequest} opts
   * @returns {Promise<CheckProxyVerificationResponse>}
   * @memberof Contracts
   */
  async checkProxyVerification(opts: CheckProxyVerificationRequest): Promise<CheckProxyVerificationResponse> {
    const request = this.client.newRequest("POST", "contract", "checkproxyverification", opts);
    // @ts-ignore
    return this.client.do(request);
  }

  private async do(action: string, opts: Record<string, any>): Promise<any> {
    return this.client.query("contract", action, opts);
  }
}

export { Contracts };
