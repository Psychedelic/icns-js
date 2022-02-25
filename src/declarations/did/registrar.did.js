export const idlRegistrarFactory = ({ IDL }) => {
  const Result_1 = IDL.Variant({ 'ok': IDL.Bool, 'err': IDL.Text });
  const TxReceipt = IDL.Variant({ 'ok': IDL.Nat, 'err': IDL.Text });
  const BidState = IDL.Variant({
    'win': IDL.Null,
    'lost': IDL.Null,
    'processing': IDL.Null,
  });
  const Time = IDL.Int;
  const BidExt = IDL.Record({
    'name': IDL.Text,
    'state': BidState,
    'timestamp': Time,
    'price': IDL.Nat,
  });
  const AuctionExt = IDL.Record({
    'endTime': IDL.Int,
    'name': IDL.Text,
    'finished': IDL.Bool,
    'currentBid': BidExt,
    'currentBidder': IDL.Principal,
  });
  const Info = IDL.Record({
    'extendWindow': IDL.Nat,
    'memSize': IDL.Nat,
    'heapSize': IDL.Nat,
    'auctionWindow': IDL.Nat,
    'bidUsers': IDL.Nat,
    'feeToken': IDL.Principal,
    'auctions': IDL.Nat,
    'balanceUsers': IDL.Nat,
    'totalDebt': IDL.Nat,
    'minRaisePrices': IDL.Vec(IDL.Float64),
    'minBidPrices': IDL.Vec(IDL.Float64),
    'cycles': IDL.Nat,
    'renewPrices': IDL.Vec(IDL.Float64),
    'totalBalance': IDL.Nat,
    'paused': IDL.Bool,
    'thresholdWindow': IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok': IDL.Nat, 'err': IDL.Text });
  const Result_2 = IDL.Variant({ 'ok': IDL.Int, 'err': IDL.Text });
  const Result = IDL.Variant({ 'ok': IDL.Null, 'err': IDL.Text });
  const ICNSRegistrar = IDL.Service({
    'addReserve': IDL.Func([IDL.Text], [Result_1], []),
    'addReserveBatch': IDL.Func([IDL.Text], [Result_1], []),
    'assignReservedName': IDL.Func([IDL.Text, IDL.Principal], [TxReceipt], []),
    'available': IDL.Func([IDL.Text], [Result_1], ['query']),
    'claimName': IDL.Func([IDL.Text], [TxReceipt], []),
    'getAllAuctions': IDL.Func([], [IDL.Vec(AuctionExt)], ['query']),
    'getAuction': IDL.Func([IDL.Text], [IDL.Opt(AuctionExt)], ['query']),
    'getAuctionByEndTime': IDL.Func([], [IDL.Vec(AuctionExt)], ['query']),
    'getAuctionByPrice': IDL.Func([], [IDL.Vec(AuctionExt)], ['query']),
    'getBalance': IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getInfo': IDL.Func([], [Info], []),
    'getMinBidPrice': IDL.Func([IDL.Text], [Result_3], ['query']),
    'getMinRaisePrice': IDL.Func([IDL.Text], [Result_3], ['query']),
    'getRandomAuctions': IDL.Func([IDL.Nat], [IDL.Vec(AuctionExt)], ['query']),
    'getRenewPrice': IDL.Func([IDL.Text], [Result_3], ['query']),
    'getReservedNames': IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getTotalBalance': IDL.Func([], [IDL.Nat, IDL.Nat], []),
    'getUserBids': IDL.Func([IDL.Principal], [IDL.Vec(BidExt)], ['query']),
    'getUserLostBids': IDL.Func([IDL.Principal], [IDL.Vec(BidExt)], ['query']),
    'getUserToClaimBids': IDL.Func(
      [IDL.Principal],
      [IDL.Vec(BidExt)],
      ['query'],
    ),
    'getUserWinningBids': IDL.Func(
      [IDL.Principal],
      [IDL.Vec(BidExt)],
      ['query'],
    ),
    'nameExpiry': IDL.Func([IDL.Text], [Result_2], ['query']),
    'placeBid': IDL.Func([IDL.Text, IDL.Nat], [TxReceipt], []),
    'removeReserve': IDL.Func([IDL.Text], [Result_1], []),
    'renew': IDL.Func([IDL.Text, IDL.Int], [TxReceipt], []),
    'setAuctionWindow': IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setExtendWindow': IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setFeeToken': IDL.Func([IDL.Principal], [IDL.Principal], []),
    'setMinBidPrices': IDL.Func([IDL.Vec(IDL.Float64)], [Result], []),
    'setMinRaisePrices': IDL.Func([IDL.Vec(IDL.Float64)], [Result], []),
    'setPaused': IDL.Func([IDL.Bool], [IDL.Bool], []),
    'setRenewPrices': IDL.Func([IDL.Vec(IDL.Float64)], [Result], []),
    'setResolver': IDL.Func([IDL.Principal], [Result], []),
    'setThresholdWindow': IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setTokenTxFee': IDL.Func([IDL.Nat], [IDL.Nat], []),
    'withdraw': IDL.Func([], [TxReceipt], []),
    'withdrawFund': IDL.Func([IDL.Nat], [TxReceipt], []),
  });
  return ICNSRegistrar;
};
const init = ({ IDL }) => {
  return [
    IDL.Principal,
    IDL.Principal,
    IDL.Principal,
    IDL.Text,
    IDL.Principal,
    IDL.Principal,
  ];
};