import "isomorphic-fetch";
import { BscScan } from "../../client";
import { server } from "../server";

const apikey = process.env.API_KEY;

describe("transactions", () => {
  const client = new BscScan({ apikey });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should getTxReceiptStatus", async () => {
    const opts = { txhash: "0xe9975702518c79caf81d5da65dea689dcac701fcdd063f848d4f03c85392fd00" };
    expect(await client.transactions.getTxReceiptStatus(opts)).toMatchSnapshot();
  });
});
