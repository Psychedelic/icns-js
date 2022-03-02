import { Principal } from "@dfinity/principal";
import { ICNSRegistrar, ICNSResolver } from "declarations";
import { RegistrarActor, ResolverActor } from "integrations";
import { mocAuctionExt, mocBidExt } from "./auctionExt";
import { mockDefualtInfo, mockRegistrarInfo, mockResolverInfo } from "./info";
import { mockPrincipal } from "./principal";

export const registrarMockActor = (params: Partial<ICNSRegistrar> = {}): RegistrarActor => ({
  addReserve : async () => ({'ok': true}),
  addReserveBatch : async () => ({'ok': true}),
  assignReservedName : async () => ({'ok': BigInt(1)}),
  available : async () => (({'ok': true})),
  claimName : async () => ({'ok': BigInt(1)}),
  getAllAuctions : async () => [mocAuctionExt()],
  getAuction : async () => [mocAuctionExt()],
  getAuctionByEndTime : async () => [mocAuctionExt()],
  getAuctionByPrice : async () => [mocAuctionExt()],
  getBalance : async () => (BigInt(1)),
  getInfo : async () => mockRegistrarInfo(),
  getMinBidPrice : async () => ({'ok': BigInt(1)}),
  getMinRaisePrice : async () => ({'ok': BigInt(1)}),
  getRandomAuctions : async () => [mocAuctionExt()],
  getRenewPrice : async () => ({'ok': BigInt(1)}),
  getReservedNames : async () => ['hello', 'hihihi'],
  getTotalBalance : async () => [(BigInt(1)), (BigInt(1))],
  getUserBids : async () => [mocBidExt()],
  getUserLostBids : async () => [mocBidExt()],
  getUserToClaimBids : async () => [mocBidExt()],
  getUserWinningBids : async () => [mocBidExt()],
  nameExpiry : async () => ({'ok': BigInt(1)}),
  placeBid : async () => ({'ok': BigInt(1)}),
  removeReserve : async () => ({'ok': true}),
  renew : async () => ({'ok': BigInt(1)}),
  setAuctionWindow : async () => (BigInt(1)),
  setExtendWindow : async () => (BigInt(1)),
  setFeeToken : async () => (mockPrincipal()),
  setMinBidPrices : async (arg_0: Array<number>) => ({'ok': null}),
  setMinRaisePrices : async (arg_0: Array<number>) => ({'ok': null}),
  setPaused : async () => (true),
  setRenewPrices : async (arg_0: Array<number>) => ({'ok': null}),
  setResolver : async () => ({'ok': null}),
  setThresholdWindow : async () => (BigInt(1)),
  setTokenTxFee : async () => (BigInt(1)),
  withdraw : async () => ({'ok': BigInt(1)}),
  withdrawFund : async () => ({'ok': BigInt(1)}),
  ...params,
} as RegistrarActor)


export const resolverMockActor = (params: Partial<ICNSResolver> = {}): ResolverActor => ({
  'getAddr' : async (arg_0: string, arg_1: string) => ['theAddr'],
  'getCanister' : async (arg_0: string, arg_1: string) => [mockPrincipal()],
  'getExtensionLimit' : async () => BigInt(1e8),
  'getHost' : async (arg_0: string) => [{'url': 'urlAddress'}],
  'getInfo' : async () => mockResolverInfo(),
  'getLengthLimit' : async () => BigInt(1e8),
  'getText' : async (arg_0: string, arg_1: string) => ['theAddr'],
  'getUserDefaultInfo' : async (arg_0: string) => [mockDefualtInfo()],
  'setAddr' : async (arg_0: string, arg_1: string, arg_2: [] | [string]) => ({'ok': null}), // node // key // value
  'setCanister' : async ( // node // key // value
      arg_0: string,
      arg_1: string,
      arg_2: [] | [Principal],
    ) => ({'ok': null}),
  'setExtensionLimit' : async (arg_0: bigint) => BigInt(1e8),
  'setHost' : async (
      arg_0: string,
      arg_1: [] | [{ 'url' : string } | { 'canister' : Principal }],
    ) => ({'ok': null}),
  'setLengthLimit' : async (arg_0: bigint) => BigInt(1e8),
  'setText' : async (arg_0: string, arg_1: string, arg_2: [] | [string]) => ({'ok': null}),
  ...params,
} as ResolverActor) 