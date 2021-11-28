import "isomorphic-fetch";
import { BscScan } from "../../client";
import { server } from "../server";
import { API_KEY } from "../setup";

describe("stats", () => {
  const client = new BscScan({ apikey: API_KEY });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should getBNBLastPrice", async () => {
    expect(await client.stats.getBNBLastPrice()).toMatchSnapshot();
  });

  it("should getBNBTotalSupply", async () => {
    expect(await client.stats.getBNBTotalSupply()).toMatchSnapshot();
  });

  it("should getValidators", async () => {
    expect(await client.stats.getValidators()).toMatchSnapshot();
  });
});
