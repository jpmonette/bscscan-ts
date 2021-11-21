export type GetTxReceiptStatusRequest = {
  // the string representing the transaction hash to check the execution status
  txhash: string;
};

export type GetTxReceiptStatusResponse = {
  // 0 for failed transactions and 1 for successful transactions.
  status: "0" | "1";
};
