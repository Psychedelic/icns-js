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
- [FavoriteActor](README.md#favoriteactor)
- [Operation](README.md#operation)
- [RegistrarActor](README.md#registraractor)
- [RegistryActor](README.md#registryactor)
- [ResolverActor](README.md#resolveractor)
- [ReverseActor](README.md#reverseactor)
- [TokenActor](README.md#tokenactor)
- [TxReceipt](README.md#txreceipt)

### Variables

- [ICNSConstants](README.md#icnsconstants)

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
- [createFavoriteActor](README.md#createfavoriteactor)
- [createRegistrarActor](README.md#createregistraractor)
- [createRegistryActor](README.md#createregistryactor)
- [createResolverActor](README.md#createresolveractor)
- [createReverseActor](README.md#createreverseactor)
- [createTokenActor](README.md#createtokenactor)
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

### FavoriteActor

Ƭ **FavoriteActor**: `ActorAdapter.Actor`<`ICNSFavorite`\>

Type of FavoriteActor.

___

### Operation

Ƭ **Operation**: { `transferFrom`: ``null``  } \| { `burn`: ``null``  } \| { `mint`: ``null``  } \| { `approve`: ``null``  } \| { `transfer`: ``null``  }

___

### RegistrarActor

Ƭ **RegistrarActor**: `ActorAdapter.Actor`<`ICNSRegistrar`\>

Type of RegistrarActor.

___

### RegistryActor

Ƭ **RegistryActor**: `ActorAdapter.Actor`<`ICNSRegistry`\>

Type of RegistryActor.

___

### ResolverActor

Ƭ **ResolverActor**: `ActorAdapter.Actor`<`ICNSResolver`\>

Type of ResolverActor.

___

### ReverseActor

Ƭ **ReverseActor**: `ActorAdapter.Actor`<`ICNSReverseRegistrar`\>

Type of ReverseActor.

___

### TokenActor

Ƭ **TokenActor**: `ActorAdapter.Actor`<`ICNSToken`\>

Type of WICPActor.

___

### TxReceipt

Ƭ **TxReceipt**: { `ok`: `bigint`  } \| { `err`: `string`  }

## Variables

### ICNSConstants

• `Const` **ICNSConstants**: `Object`

ICNSConstants values used on ICNS-js library.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterIds` | { `WICP`: `string` ; `favorite`: `string` ; `registrar`: `string` ; `registry`: `string` ; `resolver`: `string` ; `reverse_registrar`: `string`  } |
| `canisterIds.WICP` | `string` |
| `canisterIds.favorite` | `string` |
| `canisterIds.registrar` | `string` |
| `canisterIds.registry` | `string` |
| `canisterIds.resolver` | `string` |
| `canisterIds.reverse_registrar` | `string` |
| `host` | `string` |
| `wicpDecimal` | `number` |

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

### createFavoriteActor

▸ **createFavoriteActor**(`options?`): `Promise`<[`FavoriteActor`](README.md#favoriteactor)\>

Creates a Favorite canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the FavoriteActor |

#### Returns

`Promise`<[`FavoriteActor`](README.md#favoriteactor)\>

actor instance

___

### createRegistrarActor

▸ **createRegistrarActor**(`options?`): `Promise`<[`RegistrarActor`](README.md#registraractor)\>

Creates a Registrar canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the RegistrarActor |

#### Returns

`Promise`<[`RegistrarActor`](README.md#registraractor)\>

actor instance

___

### createRegistryActor

▸ **createRegistryActor**(`options?`): `Promise`<[`RegistryActor`](README.md#registryactor)\>

Creates a Registry canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the RegistryActor |

#### Returns

`Promise`<[`RegistryActor`](README.md#registryactor)\>

actor instance

___

### createResolverActor

▸ **createResolverActor**(`options?`): `Promise`<[`ResolverActor`](README.md#resolveractor)\>

Creates a Resolver canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the ResolverActor |

#### Returns

`Promise`<[`ResolverActor`](README.md#resolveractor)\>

actor instance

___

### createReverseActor

▸ **createReverseActor**(`options?`): `Promise`<[`ReverseActor`](README.md#reverseactor)\>

Creates a Reverse canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the ReverseActor |

#### Returns

`Promise`<[`ReverseActor`](README.md#reverseactor)\>

actor instance

___

### createTokenActor

▸ **createTokenActor**(`options`): `Promise`<[`TokenActor`](README.md#tokenactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `CreateCanisterActorOptions` | Options for creating the TokenActor |

#### Returns

`Promise`<[`TokenActor`](README.md#tokenactor)\>

actor instance

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
