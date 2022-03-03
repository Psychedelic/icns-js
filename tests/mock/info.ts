import { DefaultInfoExt, Info as RegistarInfo } from "declarations";
import { mockPrincipal } from "./principal";

export const mockRegistrarInfo = (): RegistarInfo => ({
  'extendWindow': BigInt(1),
  'memSize': BigInt(1),
  'heapSize': BigInt(1),
  'auctionWindow': BigInt(1),
  'bidUsers': BigInt(1),
  'feeToken': mockPrincipal(),
  'auctions': BigInt(1),
  'balanceUsers': BigInt(1),
  'totalDebt': BigInt(1),
  'minRaisePrices': [1],
  'minBidPrices': [1],
  'cycles': BigInt(1),
  'renewPrices': [1],
  'totalBalance': BigInt(1),
  'paused': true,
  'thresholdWindow': BigInt(1),
})

interface Info {
  'extensionLimit' : bigint,
  'memSize' : bigint,
  'heapSize' : bigint,
  'maxRecordLength' : bigint,
  'entries' : bigint,
  'cycles' : bigint,
}

export const mockResolverInfo = (): Info => ({
  'memSize' : BigInt(1e8),
  'heapSize' : BigInt(1e8),
  'cycles' : BigInt(1e8),
  'extensionLimit': BigInt(1),
  'maxRecordLength': BigInt(1),
  'entries' : BigInt(1),
})



export const mockDefualtInfo = (): DefaultInfoExt => ({
  'btc' : ['theAddress'],
  'eth' : ['theAddress'],
  'icp' : ['theAddress'],
  'pid' : [mockPrincipal()],
  'url' : ['theAddress'],
  'twitter' : ['theAddress'],
  'host' : [{ 'url' : 'hostUrl' }],
  'canisterExtensions' : [['key', mockPrincipal()]],
  'description' : ['theAddress'],
  'email' : ['theAddress'],
  'textExtensions' : [['key', 'stringAddr']],
  'addrExtensions' : [['key', 'stringAddr']],
  'discord' : ['theAddress'],
  'mainCanister' : [mockPrincipal()],
  'telegram' : ['theAddress'],
  'github' : ['theAddress'],
  'avatar' : ['theAddress'],
})