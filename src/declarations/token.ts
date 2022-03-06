import BigNumber from 'bignumber.js';

export namespace Token {

  /**
   * Type definition for a token balance.
   * @param {BigNumber} icns Represents the user's amount stayed on ICNS
   * @param plug Represents the user's amount from plug wallet
   * @param total Represents the sum of icns and plug
   */
  export type Balance = {
    icns: BigNumber;
    plug: BigNumber;
    total: BigNumber;
  };

}
