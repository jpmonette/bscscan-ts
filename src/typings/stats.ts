export type GetBNBTotalSupplyResponse = string;

export type GetValidatorsResponse = Array<{
  validatorAddress: string;
  validatorName: string;
  validatorStatus: string;
  validatorVotingPower: string;
  validatorVotingPowerProportion: string;
}>;

export type GetBNBLastPriceResponse = {
  ethbtc: string;
  ethbtc_timestamp: string;
  ethusd: string;
  ethusd_timestamp: string;
};
