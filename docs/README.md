# icns-js

## Table of contents

### Interfaces

- [AuctionExt](interfaces/AuctionExt.md)
- [BidExt](interfaces/BidExt.md)
- [DefaultInfoExt](interfaces/DefaultInfoExt.md)
- [Info](interfaces/Info.md)
- [Metadata](interfaces/Metadata.md)
- [RecordExt](interfaces/RecordExt.md)
- [ToBigNumberOptions](interfaces/ToBigNumberOptions.md)

### Type aliases

- [BidState](README.md#bidstate)
- [Operation](README.md#operation)
- [TxReceipt](README.md#txreceipt)

### Classes

- [ICNSRegistrarController](classes/ICNSRegistrarController.md)
- [ICNSRegistryController](classes/ICNSRegistryController.md)
- [ICNSResolverController](classes/ICNSResolverController.md)
- [ICNSReverseController](classes/ICNSReverseController.md)

### Namespaces

- [Token](modules/Token.md)
- [Types](modules/Types.md)

### Functions

- [VerifyDomainName](README.md#verifydomainname)
- [addIcpSuffix](README.md#addicpsuffix)
- [formatAmount](README.md#formatamount)
- [getCrc32](README.md#getcrc32)
- [getDeadline](README.md#getdeadline)
- [removeIcpSuffix](README.md#removeicpsuffix)
- [toBigNumber](README.md#tobignumber)
- [toExponential](README.md#toexponential)
- [verifyAccountId](README.md#verifyaccountid)

## Type aliases

### BidState

Ƭ **BidState**: { `win`: ``null``  } \| { `lost`: ``null``  } \| { `processing`: ``null``  }

___

### Operation

Ƭ **Operation**: { `transferFrom`: ``null``  } \| { `burn`: ``null``  } \| { `mint`: ``null``  } \| { `approve`: ``null``  } \| { `transfer`: ``null``  }

___

### TxReceipt

Ƭ **TxReceipt**: { `ok`: `bigint`  } \| { `err`: `string`  }

## Functions

### VerifyDomainName

▸ **VerifyDomainName**(`domain`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `undefined` \| `string` |

#### Returns

`boolean`

___

### addIcpSuffix

▸ **addIcpSuffix**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |

#### Returns

`string`

___

### formatAmount

▸ **formatAmount**(`amount`): `string`

Formats an amount to a small string with scientific notation

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`string`

___

### getCrc32

▸ **getCrc32**(`buf`): `number`

Calculate the CRC32 of an ArrayBufferLike.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | `any` | The BufferLike to calculate the CRC32 of. |

#### Returns

`number`

___

### getDeadline

▸ **getDeadline**(): `bigint`

Get deadline for swap canister requests.

#### Returns

`bigint`

___

### removeIcpSuffix

▸ **removeIcpSuffix**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |

#### Returns

`string`

___

### toBigNumber

▸ **toBigNumber**(`num?`, `options?`): `BigNumber`

Converts a value to a BigNumber.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num?` | [`Number`](modules/Types.md#number) | Represents number value. |
| `options?` | [`ToBigNumberOptions`](interfaces/ToBigNumberOptions.md) | Represents value options. |

#### Returns

`BigNumber`

___

### toExponential

▸ **toExponential**(`decimals`): `BigNumber`

Create an exponential notation by given decimals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimals` | [`Number`](modules/Types.md#number) |

#### Returns

`BigNumber`

___

### verifyAccountId

▸ **verifyAccountId**(`hexString`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexString` | `string` |

#### Returns

`boolean`
