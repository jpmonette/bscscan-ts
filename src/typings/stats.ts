import { APIResponse } from "./";

export type GetBNBTotalSupplyResponse = APIResponse<string>;

export type GetValidatorsResponse = APIResponse<
  Array<{
    validatorAddress: string;
    validatorName: string;
    validatorStatus: string;
    validatorVotingPower: string;
    validatorVotingPowerProportion: string;
  }>
>;

export type GetBNBLastPriceResponse = APIResponse<{
  ethbtc: string;
  ethbtc_timestamp: string;
  ethusd: string;
  ethusd_timestamp: string;
}>;
