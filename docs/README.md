# icns

## Table of contents

### Classes

- [ActorAdapter](classes/ActorAdapter.md)
- [ICNSRegistrarController](classes/ICNSRegistrarController.md)
- [ICNSResolverController](classes/ICNSResolverController.md)
- [ICNSregistryController](classes/ICNSregistryController.md)

### Namespaces

- [ActorAdapter](modules/ActorAdapter.md)
- [ICNSRegistrarController](modules/ICNSRegistrarController.md)
- [ICNSRegistryController](modules/ICNSRegistryController.md)
- [ICNSResolverController](modules/ICNSResolverController.md)
- [Token](modules/Token.md)
- [Types](modules/Types.md)

### Interfaces

- [AuctionExt](interfaces/AuctionExt.md)
- [BidExt](interfaces/BidExt.md)
- [CreateCanisterActorOptions](interfaces/CreateCanisterActorOptions.md)
- [DefaultInfoExt](interfaces/DefaultInfoExt.md)
- [ICNSFavorite](interfaces/ICNSFavorite.md)
- [ICNSRegistrar](interfaces/ICNSRegistrar.md)
- [ICNSRegistry](interfaces/ICNSRegistry.md)
- [ICNSReserveName](interfaces/ICNSReserveName.md)
- [ICNSResolver](interfaces/ICNSResolver.md)
- [ICNSReverseRegistrar](interfaces/ICNSReverseRegistrar.md)
- [ICNSToken](interfaces/ICNSToken.md)
- [Info](interfaces/Info.md)
- [Metadata](interfaces/Metadata.md)
- [RecordExt](interfaces/RecordExt.md)
- [ToBigNumberOptions](interfaces/ToBigNumberOptions.md)
- [TokenInfo](interfaces/TokenInfo.md)

### Type aliases

- [BidState](README.md#bidstate)
- [FavoriteActor](README.md#favoriteactor)
- [Operation](README.md#operation)
- [RegistrarActor](README.md#registraractor)
- [RegistryActor](README.md#registryactor)
- [ReserveNameActor](README.md#reservenameactor)
- [ResolverActor](README.md#resolveractor)
- [Result](README.md#result)
- [ReverseActor](README.md#reverseactor)
- [TokenActor](README.md#tokenactor)
- [TxReceipt](README.md#txreceipt)
- [WICPTxReceipt](README.md#wicptxreceipt)

### Variables

- [Constants](README.md#constants)

### Functions

- [VerifyDomainName](README.md#verifydomainname)
- [addIcpSuffix](README.md#addicpsuffix)
- [createFavoriteActor](README.md#createfavoriteactor)
- [createRegistrarActor](README.md#createregistraractor)
- [createRegistryActor](README.md#createregistryactor)
- [createReserveNameActor](README.md#createreservenameactor)
- [createResolverActor](README.md#createresolveractor)
- [createReverseActor](README.md#createreverseactor)
- [createTokenActor](README.md#createtokenactor)
- [formatAmount](README.md#formatamount)
- [getDeadline](README.md#getdeadline)
- [idlFavoriteFactory](README.md#idlfavoritefactory)
- [idlRegistrarFactory](README.md#idlregistrarfactory)
- [idlRegistryFactory](README.md#idlregistryfactory)
- [idlReserveNameFactory](README.md#idlreservenamefactory)
- [idlResolverFactory](README.md#idlresolverfactory)
- [idlReverseRegistrarFactory](README.md#idlreverseregistrarfactory)
- [idlWICPFactory](README.md#idlwicpfactory)
- [init](README.md#init)
- [removeIcpSuffix](README.md#removeicpsuffix)
- [toBigNumber](README.md#tobignumber)
- [toExponential](README.md#toexponential)

## Type aliases

### BidState

Ƭ **BidState**: { `win`: ``null``  } \| { `lost`: ``null``  } \| { `processing`: ``null``  }

___

### FavoriteActor

Ƭ **FavoriteActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSFavorite`](interfaces/ICNSFavorite.md)\>

Type of FavoriteActor.

___

### Operation

Ƭ **Operation**: { `transferFrom`: ``null``  } \| { `burn`: ``null``  } \| { `mint`: ``null``  } \| { `approve`: ``null``  } \| { `transfer`: ``null``  }

___

### RegistrarActor

Ƭ **RegistrarActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSRegistrar`](interfaces/ICNSRegistrar.md)\>

Type of RegistrarActor.

___

### RegistryActor

Ƭ **RegistryActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSRegistry`](interfaces/ICNSRegistry.md)\>

Type of RegistryActor.

___

### ReserveNameActor

Ƭ **ReserveNameActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSReserveName`](interfaces/ICNSReserveName.md)\>

Type of ReserveNameActor.

___

### ResolverActor

Ƭ **ResolverActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSResolver`](interfaces/ICNSResolver.md)\>

Type of ResolverActor.

___

### Result

Ƭ **Result**: { `ok`: `string`  } \| { `err`: `string`  }

___

### ReverseActor

Ƭ **ReverseActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSReverseRegistrar`](interfaces/ICNSReverseRegistrar.md)\>

Type of ReverseActor.

___

### TokenActor

Ƭ **TokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`ICNSToken`](interfaces/ICNSToken.md)\>

Type of WICPActor.

___

### TxReceipt

Ƭ **TxReceipt**: { `ok`: `bigint`  } \| { `err`: `string`  }

___

### WICPTxReceipt

Ƭ **WICPTxReceipt**: { `Ok`: `bigint`  } \| { `Err`: { `InsufficientAllowance`: ``null``  } \| { `InsufficientBalance`: ``null``  } \| { `ErrorOperationStyle`: ``null``  } \| { `Unauthorized`: ``null``  } \| { `LedgerTrap`: ``null``  } \| { `ErrorTo`: ``null``  } \| { `Other`: ``null``  } \| { `BlockUsed`: ``null``  } \| { `AmountTooSmall`: ``null``  }  }

## Variables

### Constants

• `Const` **Constants**: `Object`

Constants values used on ICNS-js library.

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

▸ **createFavoriteActor**(`options`): `Promise`<[`FavoriteActor`](README.md#favoriteactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the FavoriteActor |

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
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the RegistrarActor |

#### Returns

`Promise`<[`RegistrarActor`](README.md#registraractor)\>

actor instance

___

### createRegistryActor

▸ **createRegistryActor**(`options`): `Promise`<[`RegistryActor`](README.md#registryactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the RegistryActor |

#### Returns

`Promise`<[`RegistryActor`](README.md#registryactor)\>

actor instance

___

### createReserveNameActor

▸ **createReserveNameActor**(`options`): `Promise`<[`RegistryActor`](README.md#registryactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the ReserveNameActor |

#### Returns

`Promise`<[`RegistryActor`](README.md#registryactor)\>

actor instance

___

### createResolverActor

▸ **createResolverActor**(`options`): `Promise`<[`ResolverActor`](README.md#resolveractor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the ResolverActor |

#### Returns

`Promise`<[`ResolverActor`](README.md#resolveractor)\>

actor instance

___

### createReverseActor

▸ **createReverseActor**(`options`): `Promise`<[`ReverseActor`](README.md#reverseactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the ReverseActor |

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
| `options` | [`CreateCanisterActorOptions`](interfaces/CreateCanisterActorOptions.md) | Options for creating the TokenActor |

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

### getDeadline

▸ **getDeadline**(): `bigint`

Get deadline for swap canister requests.

#### Returns

`bigint`

___

### idlFavoriteFactory

▸ **idlFavoriteFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlRegistrarFactory

▸ **idlRegistrarFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlRegistryFactory

▸ **idlRegistryFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlReserveNameFactory

▸ **idlReserveNameFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlResolverFactory

▸ **idlResolverFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlReverseRegistrarFactory

▸ **idlReverseRegistrarFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### idlWICPFactory

▸ **idlWICPFactory**(`__namedParameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`

___

### init

▸ **init**(`__namedParameters`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`any`[]

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

| Name | Type |
| :------ | :------ |
| `num?` | [`Number`](modules/Types.md#number) |
| `options?` | [`ToBigNumberOptions`](interfaces/ToBigNumberOptions.md) |

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
