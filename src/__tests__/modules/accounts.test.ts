import "isomorphic-fetch";
import { BscScan } from "../../client";
import { server, testAddress1, testAddress2, testAddress3 } from "../server";
import { API_KEY } from "../setup";

const addresses = [testAddress1, testAddress2];

describe("account", () => {
  const client = new BscScan({ apikey: API_KEY });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should getBalance", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getBalance(params)).toMatchSnapshot();
  });

  it("should getBalanceMulti", async () => {
    const params = { address: addresses };
    expect(await client.accounts.getBalanceMulti(params)).toMatchSnapshot();
  });

  it("should getTxList", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getTxList(params)).toMatchSnapshot();
  });

  it("should getTxListInternal", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getTxListInternal(params)).toMatchSnapshot();
  });

  it("should getTokenTx", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getTokenTx(params)).toMatchSnapshot();
  });

  it("should getTokenNFTTx", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getTokenNFTTx(params)).toMatchSnapshot();
  });

  it("should getMinedBlocks - blocks found", async () => {
    const params = { address: testAddress1 };
    expect(await client.accounts.getMinedBlocks(params)).toMatchSnapshot();
  });

  it("should getMinedBlocks - no block", async () => {
    const params = { address: testAddress2 };
    expect(await client.accounts.getMinedBlocks(params)).toMatchSnapshot();
  });

  it("should getMinedBlocks - error", async () => {
    const params = { address: testAddress3 };

    try {
      await client.accounts.getMinedBlocks(params);
    } catch (e) {
      expect(e).toMatchSnapshot();
    }
  });
});
