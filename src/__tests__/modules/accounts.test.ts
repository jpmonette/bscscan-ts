import { BscScan } from "../../client";
import "isomorphic-fetch";

const address = "0x515b72ed8a97f42c568d6a143232775018f133c8";
const address2 = "0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645";
const addresses = [address, address2];

import { setupServer } from "msw/node";
import { rest } from "msw";
import { accountResponses } from "../data/accounts";

const apikey = "sample-key";

const handlers = [
  rest.get(`*/api`, (req, res, ctx) => {
    const module = req.url.searchParams.get("module") as string;
    const action = req.url.searchParams.get("action") as string;

    if (module === "account" && accountResponses[action]) {
      return res(ctx.json(accountResponses[action]));
    }

    throw new Error("endpoint not found");
  }),
];

const server = setupServer(...handlers);

describe("account", () => {
  const client = new BscScan({ apikey });

  beforeAll(() => server.listen());
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());
  // Clean up after the tests are finished.
  afterAll(() => server.close());

  it("should getBalance", async () => {
    const params = { address };
    expect(await client.accounts.getBalance(params)).toMatchSnapshot();
  });

  it("should getBalanceMulti", async () => {
    const params = { address: addresses };
    expect(await client.accounts.getBalanceMulti(params)).toMatchSnapshot();
  });

  it("should getTxList", async () => {
    const params = { address };
    expect(await client.accounts.getTxList(params)).toMatchSnapshot();
  });

  it("should getTxListInternal", async () => {
    const params = { address };
    expect(await client.accounts.getTxListInternal(params)).toMatchSnapshot();
  });

  it("should getTokenTx", async () => {
    const params = { address };
    expect(await client.accounts.getTokenTx(params)).toMatchSnapshot();
  });

  it("should getTokenNFTTx", async () => {
    const params = { address };
    expect(await client.accounts.getTokenNFTTx(params)).toMatchSnapshot();
  });

  it("should getMinedBlocks", async () => {
    const params = { address };
    expect(await client.accounts.getMinedBlocks(params)).toMatchSnapshot();
  });
});
