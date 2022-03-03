import { AuctionExt, BidExt, BidState } from "declarations";
import { mockPrincipal } from "./principal";

export const mocBidState = (): BidState => ({ 'processing' : null })

export const mocBidExt = (): BidExt => ({
  'name' : 'test.icp',
  'state' : mocBidState(),
  'timestamp' : BigInt(1e8),
  'price' : BigInt(1e8),
})

export const mocAuctionExt = (): AuctionExt => ({
  'endTime' : BigInt(1e8),
  'name' : 'test.icp',
  'finished' : true,
  'currentBid' : mocBidExt(),
  'currentBidder' : mockPrincipal(),
})

