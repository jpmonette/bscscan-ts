import "isomorphic-fetch";
import { BscScan } from "../../client";
import { VerifySourceCodeRequest } from "../../typings";
import { server } from "../server";
import { API_KEY } from "../setup";

describe("contracts", () => {
  const client = new BscScan({ apikey: API_KEY });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should getAbi", async () => {
    const opts = { address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" };
    expect(await client.contracts.getAbi(opts)).toMatchSnapshot();
  });

  it("should getSourceCode", async () => {
    const opts = { address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" };
    expect(await client.contracts.getSourceCode(opts)).toMatchSnapshot();
  });

  it("should verifySourceCode", async () => {
    const opts: VerifySourceCodeRequest = {
      contractAddress: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      contractName: "CAKE",
      sourceCode: "",
      compilerVersion: "v0.6.12+commit.27d51765",
      optimizationUsed: "1",
      runs: 5000,
      licenseType: "None",
    };
    expect(await client.contracts.verifySourceCode(opts)).toMatchSnapshot();
  });

  it("should verifyProxyContract", async () => {
    const opts = {
      address: "0xbc46363a7669f6e12353fa95bb067aead3675c29",
      expectedImplementation: "0xe45a5176bc0f2c1198e2451c4e4501d4ed9b65a6",
    };
    expect(await client.contracts.verifyProxyContract(opts)).toMatchSnapshot();
  });

  it("should checkProxyVerification", async () => {
    const opts = { guid: "gwgrrnfy56zf6vc1fljuejwg6pelnc5yns6fg6y2i6zfpgzquz" };
    expect(await client.contracts.checkProxyVerification(opts)).toMatchSnapshot();
  });
});
