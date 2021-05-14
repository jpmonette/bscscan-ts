/**
 * Options used to initialize a BscScan client
 */
export type BscScanOptions = {
  apikey?: string;
  baseUrl?: string;
};

export type APIResponse<T> = {
  status: "1" | "0";
  message: string;
  result: T;
};
