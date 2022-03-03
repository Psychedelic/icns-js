# Interface: ICNSToken

## Table of contents

### Methods

- [allowance](ICNSToken.md#allowance)
- [approve](ICNSToken.md#approve)
- [balanceOf](ICNSToken.md#balanceof)
- [burn](ICNSToken.md#burn)
- [decimals](ICNSToken.md#decimals)
- [getAllowanceSize](ICNSToken.md#getallowancesize)
- [getHolders](ICNSToken.md#getholders)
- [getMetadata](ICNSToken.md#getmetadata)
- [getTokenFee](ICNSToken.md#gettokenfee)
- [getTokenInfo](ICNSToken.md#gettokeninfo)
- [getTransaction](ICNSToken.md#gettransaction)
- [getTransactions](ICNSToken.md#gettransactions)
- [getUserApprovals](ICNSToken.md#getuserapprovals)
- [getUserTransactionAmount](ICNSToken.md#getusertransactionamount)
- [getUserTransactions](ICNSToken.md#getusertransactions)
- [historySize](ICNSToken.md#historysize)
- [logo](ICNSToken.md#logo)
- [mint](ICNSToken.md#mint)
- [name](ICNSToken.md#name)
- [setFee](ICNSToken.md#setfee)
- [setFeeTo](ICNSToken.md#setfeeto)
- [setLogo](ICNSToken.md#setlogo)
- [setName](ICNSToken.md#setname)
- [setOwner](ICNSToken.md#setowner)
- [symbol](ICNSToken.md#symbol)
- [totalSupply](ICNSToken.md#totalsupply)
- [transfer](ICNSToken.md#transfer)
- [transferFrom](ICNSToken.md#transferfrom)

## Methods

### allowance

▸ **allowance**(`arg_0`, `arg_1`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### approve

▸ **approve**(`arg_0`, `arg_1`): `Promise`<`WICPTxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`WICPTxReceipt`\>

___

### balanceOf

▸ **balanceOf**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### burn

▸ **burn**(`arg_0`): `Promise`<`WICPTxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`WICPTxReceipt`\>

___

### decimals

▸ **decimals**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

___

### getAllowanceSize

▸ **getAllowanceSize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getHolders

▸ **getHolders**(`arg_0`, `arg_1`): `Promise`<[`Principal`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<[`Principal`, `bigint`][]\>

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](Metadata.md)\>

___

### getTokenFee

▸ **getTokenFee**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getTokenInfo

▸ **getTokenInfo**(): `Promise`<`TokenInfo`\>

#### Returns

`Promise`<`TokenInfo`\>

___

### getTransaction

▸ **getTransaction**(`arg_0`): `Promise`<`TxRecord`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`TxRecord`\>

___

### getTransactions

▸ **getTransactions**(`arg_0`, `arg_1`): `Promise`<`TxRecord`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`TxRecord`[]\>

___

### getUserApprovals

▸ **getUserApprovals**(`arg_0`): `Promise`<[`Principal`, `bigint`][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[`Principal`, `bigint`][]\>

___

### getUserTransactionAmount

▸ **getUserTransactionAmount**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### getUserTransactions

▸ **getUserTransactions**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`TxRecord`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<`TxRecord`[]\>

___

### historySize

▸ **historySize**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### logo

▸ **logo**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### mint

▸ **mint**(`arg_0`, `arg_1`): `Promise`<`WICPTxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`WICPTxReceipt`\>

___

### name

▸ **name**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### setFee

▸ **setFee**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`undefined`\>

___

### setFeeTo

▸ **setFeeTo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

___

### setLogo

▸ **setLogo**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

___

### setName

▸ **setName**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`undefined`\>

___

### setOwner

▸ **setOwner**(`arg_0`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`undefined`\>

___

### symbol

▸ **symbol**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### totalSupply

▸ **totalSupply**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### transfer

▸ **transfer**(`arg_0`, `arg_1`): `Promise`<`WICPTxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`WICPTxReceipt`\>

___

### transferFrom

▸ **transferFrom**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`WICPTxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<`WICPTxReceipt`\>
