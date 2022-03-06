import type { Principal } from '@dfinity/principal';
export interface AuctionExt {
  'endTime' : bigint,
  'name' : string,
  'finished' : boolean,
  'currentBid' : BidExt,
  'currentBidder' : Principal,
}
export interface BidExt {
  'name' : string,
  'state' : BidState,
  'timestamp' : Time,
  'price' : bigint,
}
export type BidState = { 'win' : null } |
  { 'lost' : null } |
  { 'processing' : null };
/** @internal */
export interface ICNSRegistrar {
  'addReserve' : (arg_0: string) => Promise<Result_1>,
  'addReserveBatch' : (arg_0: string) => Promise<Result_1>,
  'assignReservedName' : (arg_0: string, arg_1: Principal) => Promise<
      TxReceipt
    >,
  'available' : (arg_0: string) => Promise<Result_1>,
  'claimName' : (arg_0: string) => Promise<TxReceipt>,
  'getAllAuctions' : () => Promise<Array<AuctionExt>>,
  'getAuction' : (arg_0: string) => Promise<[] | [AuctionExt]>,
  'getAuctionByEndTime' : () => Promise<Array<AuctionExt>>,
  'getAuctionByPrice' : () => Promise<Array<AuctionExt>>,
  'getBalance' : (arg_0: Principal) => Promise<bigint>,
  'getInfo' : () => Promise<Info>,
  'getMinBidPrice' : (arg_0: string) => Promise<Result_3>,
  'getMinRaisePrice' : (arg_0: string) => Promise<Result_3>,
  'getRandomAuctions' : (arg_0: bigint) => Promise<Array<AuctionExt>>,
  'getRenewPrice' : (arg_0: string) => Promise<Result_3>,
  'getReservedNames' : () => Promise<Array<string>>,
  'getTotalBalance' : () => Promise<[bigint, bigint]>,
  'getUserBids' : (arg_0: Principal) => Promise<Array<BidExt>>,
  'getUserLostBids' : (arg_0: Principal) => Promise<Array<BidExt>>,
  'getUserToClaimBids' : (arg_0: Principal) => Promise<Array<BidExt>>,
  'getUserWinningBids' : (arg_0: Principal) => Promise<Array<BidExt>>,
  'nameExpiry' : (arg_0: string) => Promise<Result_2>,
  'placeBid' : (arg_0: string, arg_1: bigint) => Promise<TxReceipt>,
  'removeReserve' : (arg_0: string) => Promise<Result_1>,
  'renew' : (arg_0: string, arg_1: bigint) => Promise<TxReceipt>,
  'setAuctionWindow' : (arg_0: bigint) => Promise<bigint>,
  'setExtendWindow' : (arg_0: bigint) => Promise<bigint>,
  'setFeeToken' : (arg_0: Principal) => Promise<Principal>,
  'setMinBidPrices' : (arg_0: Array<number>) => Promise<Result>,
  'setMinRaisePrices' : (arg_0: Array<number>) => Promise<Result>,
  'setPaused' : (arg_0: boolean) => Promise<boolean>,
  'setRenewPrices' : (arg_0: Array<number>) => Promise<Result>,
  'setResolver' : (arg_0: Principal) => Promise<Result>,
  'setThresholdWindow' : (arg_0: bigint) => Promise<bigint>,
  'setTokenTxFee' : (arg_0: bigint) => Promise<bigint>,
  'withdraw' : () => Promise<TxReceipt>,
  'withdrawFund' : (arg_0: bigint) => Promise<TxReceipt>,
}
export interface Info {
  'extendWindow' : bigint,
  'memSize' : bigint,
  'heapSize' : bigint,
  'auctionWindow' : bigint,
  'bidUsers' : bigint,
  'feeToken' : Principal,
  'auctions' : bigint,
  'balanceUsers' : bigint,
  'totalDebt' : bigint,
  'minRaisePrices' : Array<number>,
  'minBidPrices' : Array<number>,
  'cycles' : bigint,
  'renewPrices' : Array<number>,
  'totalBalance' : bigint,
  'paused' : boolean,
  'thresholdWindow' : bigint,
}
type Result = { 'ok' : null } |
  { 'err' : string };
type Result_1 = { 'ok' : boolean } |
  { 'err' : string };
type Result_2 = { 'ok' : bigint } |
  { 'err' : string };
type Result_3 = { 'ok' : bigint } |
  { 'err' : string };
type Time = bigint;
export type TxReceipt = { 'ok' : bigint } |
  { 'err' : string };
