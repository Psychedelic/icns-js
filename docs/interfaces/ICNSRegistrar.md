# Interface: ICNSRegistrar

## Table of contents

### Methods

- [addReserve](ICNSRegistrar.md#addreserve)
- [addReserveBatch](ICNSRegistrar.md#addreservebatch)
- [assignReservedName](ICNSRegistrar.md#assignreservedname)
- [available](ICNSRegistrar.md#available)
- [claimName](ICNSRegistrar.md#claimname)
- [getAllAuctions](ICNSRegistrar.md#getallauctions)
- [getAuction](ICNSRegistrar.md#getauction)
- [getAuctionByEndTime](ICNSRegistrar.md#getauctionbyendtime)
- [getAuctionByPrice](ICNSRegistrar.md#getauctionbyprice)
- [getBalance](ICNSRegistrar.md#getbalance)
- [getInfo](ICNSRegistrar.md#getinfo)
- [getMinBidPrice](ICNSRegistrar.md#getminbidprice)
- [getMinRaisePrice](ICNSRegistrar.md#getminraiseprice)
- [getRandomAuctions](ICNSRegistrar.md#getrandomauctions)
- [getRenewPrice](ICNSRegistrar.md#getrenewprice)
- [getReservedNames](ICNSRegistrar.md#getreservednames)
- [getTotalBalance](ICNSRegistrar.md#gettotalbalance)
- [getUserBids](ICNSRegistrar.md#getuserbids)
- [getUserLostBids](ICNSRegistrar.md#getuserlostbids)
- [getUserToClaimBids](ICNSRegistrar.md#getusertoclaimbids)
- [getUserWinningBids](ICNSRegistrar.md#getuserwinningbids)
- [nameExpiry](ICNSRegistrar.md#nameexpiry)
- [placeBid](ICNSRegistrar.md#placebid)
- [removeReserve](ICNSRegistrar.md#removereserve)
- [renew](ICNSRegistrar.md#renew)
- [setAuctionWindow](ICNSRegistrar.md#setauctionwindow)
- [setExtendWindow](ICNSRegistrar.md#setextendwindow)
- [setFeeToken](ICNSRegistrar.md#setfeetoken)
- [setMinBidPrices](ICNSRegistrar.md#setminbidprices)
- [setMinRaisePrices](ICNSRegistrar.md#setminraiseprices)
- [setPaused](ICNSRegistrar.md#setpaused)
- [setRenewPrices](ICNSRegistrar.md#setrenewprices)
- [setResolver](ICNSRegistrar.md#setresolver)
- [setThresholdWindow](ICNSRegistrar.md#setthresholdwindow)
- [setTokenTxFee](ICNSRegistrar.md#settokentxfee)
- [withdraw](ICNSRegistrar.md#withdraw)
- [withdrawFund](ICNSRegistrar.md#withdrawfund)

## Methods

### addReserve

▸ **addReserve**(`arg_0`): `Promise`<`Result_1`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_1`\>

___

### addReserveBatch

▸ **addReserveBatch**(`arg_0`): `Promise`<`Result_1`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_1`\>

___

### assignReservedName

▸ **assignReservedName**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>

___

### available

▸ **available**(`arg_0`): `Promise`<`Result_1`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_1`\>

___

### claimName

▸ **claimName**(`arg_0`): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>

___

### getAllAuctions

▸ **getAllAuctions**(): `Promise`<[`AuctionExt`](AuctionExt.md)[]\>

#### Returns

`Promise`<[`AuctionExt`](AuctionExt.md)[]\>

___

### getAuction

▸ **getAuction**(`arg_0`): `Promise`<[] \| [[`AuctionExt`](AuctionExt.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [[`AuctionExt`](AuctionExt.md)]\>

___

### getAuctionByEndTime

▸ **getAuctionByEndTime**(): `Promise`<[`AuctionExt`](AuctionExt.md)[]\>

#### Returns

`Promise`<[`AuctionExt`](AuctionExt.md)[]\>

___

### getAuctionByPrice

▸ **getAuctionByPrice**(): `Promise`<[`AuctionExt`](AuctionExt.md)[]\>

#### Returns

`Promise`<[`AuctionExt`](AuctionExt.md)[]\>

___

### getBalance

▸ **getBalance**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### getInfo

▸ **getInfo**(): `Promise`<[`Info`](Info.md)\>

#### Returns

`Promise`<[`Info`](Info.md)\>

___

### getMinBidPrice

▸ **getMinBidPrice**(`arg_0`): `Promise`<`Result_3`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_3`\>

___

### getMinRaisePrice

▸ **getMinRaisePrice**(`arg_0`): `Promise`<`Result_3`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_3`\>

___

### getRandomAuctions

▸ **getRandomAuctions**(`arg_0`): `Promise`<[`AuctionExt`](AuctionExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<[`AuctionExt`](AuctionExt.md)[]\>

___

### getRenewPrice

▸ **getRenewPrice**(`arg_0`): `Promise`<`Result_3`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_3`\>

___

### getReservedNames

▸ **getReservedNames**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

___

### getTotalBalance

▸ **getTotalBalance**(): `Promise`<[`bigint`, `bigint`]\>

#### Returns

`Promise`<[`bigint`, `bigint`]\>

___

### getUserBids

▸ **getUserBids**(`arg_0`): `Promise`<[`BidExt`](BidExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`BidExt`](BidExt.md)[]\>

___

### getUserLostBids

▸ **getUserLostBids**(`arg_0`): `Promise`<[`BidExt`](BidExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`BidExt`](BidExt.md)[]\>

___

### getUserToClaimBids

▸ **getUserToClaimBids**(`arg_0`): `Promise`<[`BidExt`](BidExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`BidExt`](BidExt.md)[]\>

___

### getUserWinningBids

▸ **getUserWinningBids**(`arg_0`): `Promise`<[`BidExt`](BidExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`BidExt`](BidExt.md)[]\>

___

### nameExpiry

▸ **nameExpiry**(`arg_0`): `Promise`<`Result_2`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_2`\>

___

### placeBid

▸ **placeBid**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>

___

### removeReserve

▸ **removeReserve**(`arg_0`): `Promise`<`Result_1`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result_1`\>

___

### renew

▸ **renew**(`arg_0`, `arg_1`): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>

___

### setAuctionWindow

▸ **setAuctionWindow**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### setExtendWindow

▸ **setExtendWindow**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### setFeeToken

▸ **setFeeToken**(`arg_0`): `Promise`<`Principal`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`Principal`\>

___

### setMinBidPrices

▸ **setMinBidPrices**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `number`[] |

#### Returns

`Promise`<`Result`\>

___

### setMinRaisePrices

▸ **setMinRaisePrices**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `number`[] |

#### Returns

`Promise`<`Result`\>

___

### setPaused

▸ **setPaused**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `boolean` |

#### Returns

`Promise`<`boolean`\>

___

### setRenewPrices

▸ **setRenewPrices**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `number`[] |

#### Returns

`Promise`<`Result`\>

___

### setResolver

▸ **setResolver**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`Result`\>

___

### setThresholdWindow

▸ **setThresholdWindow**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### setTokenTxFee

▸ **setTokenTxFee**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### withdraw

▸ **withdraw**(): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>

___

### withdrawFund

▸ **withdrawFund**(`arg_0`): `Promise`<[`TxReceipt`](../README.md#txreceipt)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<[`TxReceipt`](../README.md#txreceipt)\>
