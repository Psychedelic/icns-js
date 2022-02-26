/**
 * Get deadline for swap canister requests.
 * @returns {bigint}
 */
export const getDeadline = (): bigint => {
  return BigInt((new Date().getTime() + 5 * 60 * 1000) * 10000000);
};
