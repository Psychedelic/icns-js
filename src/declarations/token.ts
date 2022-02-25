import BigNumber from 'bignumber.js';

export namespace Token {

  /**
   * Type definition for a token balance.
   * @param isnc represents the user's amount stayed on icns
   * @param plug represents the user's amount from plug wallet
   * @param total represents the sum of icns and plug
   */
  export type Balance = {
    icns: BigNumber;
    plug: BigNumber;
    total: BigNumber;
  };

}
