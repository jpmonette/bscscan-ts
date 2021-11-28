export const statsResponses: Record<string, any> = {
  bnbprice: {
    status: "1",
    message: "OK",
    result: { ethbtc: "0.009928", ethbtc_timestamp: "1639590487", ethusd: "582.6", ethusd_timestamp: "1639590487" },
  },
  bnbsupply: {
    status: "1",
    message: "OK",
    result: "22479013170398300000000000",
  },
  validators: {
    status: "1",
    message: "OK",
    result: [
      {
        validatorAddress: "0x9f8ccdafcc39f3c7d6ebf637c9151673cbc36b88",
        validatorName: "",
        validatorStatus: "0",
        validatorVotingPower: "43379676392570",
        validatorVotingPowerProportion: "0.0617",
      },
      {
        validatorAddress: "0x2465176c461afb316ebc773c61faee85a6515daa",
        validatorName: "",
        validatorStatus: "0",
        validatorVotingPower: "38039845465042",
        validatorVotingPowerProportion: "0.0541",
      },
    ],
  },
};
