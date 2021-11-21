import "isomorphic-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { accountResponses } from "./data/accounts";
import { transactionsResponses } from "./data/transactions";

export const testAddress1 = "1";
export const testAddress2 = "2";
export const testAddress3 = "3";

const handlers = [
  rest.get(`*/api`, (req, res, ctx) => {
    const module = req.url.searchParams.get("module") as string;
    const action = req.url.searchParams.get("action") as string;
    const address = req.url.searchParams.get("address") as string;

    if (module === "account" && accountResponses[action]) {
      if (action === "getminedblocks") {
        if (address === testAddress1) {
          return res(ctx.json(accountResponses["getminedblocks"].success));
        } else if (address === testAddress2) {
          return res(ctx.json(accountResponses["getminedblocks"].noBlock));
        } else {
          return res(ctx.json(accountResponses["getminedblocks"].error));
        }
      }
      return res(ctx.json(accountResponses[action]));
    }
    if (module === "transaction" && transactionsResponses[action]) {
      return res(ctx.json(transactionsResponses[action]));
    }

    throw new Error("endpoint not found");
  }),
];

export const server = setupServer(...handlers);
