# Class: ICNSRegistrarController

ICNS Registrar Canister Controller.
This class is responsible for handling all the requests related to the ICNS registrar canister.

## Table of contents

### Methods

- [approve](ICNSRegistrarController.md#approve)
- [claim](ICNSRegistrarController.md#claim)
- [domainIsAvailable](ICNSRegistrarController.md#domainisavailable)
- [getAuciton](ICNSRegistrarController.md#getauciton)
- [getRegistrarInfo](ICNSRegistrarController.md#getregistrarinfo)
- [getUserBalance](ICNSRegistrarController.md#getuserbalance)
- [placeBid](ICNSRegistrarController.md#placebid)
- [renew](ICNSRegistrarController.md#renew)
- [withdraw](ICNSRegistrarController.md#withdraw)

### Constructors

- [constructor](ICNSRegistrarController.md#constructor)

### Properties

- [info](ICNSRegistrarController.md#info)

## Methods

### approve

▸ **approve**(`__namedParameters`): `Promise`<`void`\>

Approve transfers from token to registrar canister.
This function uses the actor agent identity.
This function needs to be called before operate with registrar canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ApproveParams`](../modules/ICNSRegistrarController.md#approveparams) |

#### Returns

`Promise`<`void`\>

___

### claim

▸ **claim**(`domain`): `Promise`<`void`\>

Claim into canister.
This function uses the actor agent identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | domain name to be claimed |

#### Returns

`Promise`<`void`\>

___

### domainIsAvailable

▸ **domainIsAvailable**(`domain`): `Promise`<`string` \| `boolean`\>

Verify domain available or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<`string` \| `boolean`\>

___

### getAuciton

▸ **getAuciton**(`domain`): `Promise`<[] \| [[`AuctionExt`](../interfaces/AuctionExt.md)]\>

Verify domain is onAuction or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<[] \| [[`AuctionExt`](../interfaces/AuctionExt.md)]\>

___

### getRegistrarInfo

▸ **getRegistrarInfo**(): `Promise`<[`Info`](../interfaces/Info.md)\>

Get the Common Info from registrar canister.

#### Returns

`Promise`<[`Info`](../interfaces/Info.md)\>

___

### getUserBalance

▸ **getUserBalance**(`principalId`): `Promise`<[`Balance`](../modules/Token.md#balance)\>

Get one token balance for a given principal id (wicp as default).

#### Parameters

| Name | Type |
| :------ | :------ |
| `principalId` | `string` |

#### Returns

`Promise`<[`Balance`](../modules/Token.md#balance)\>

___

### placeBid

▸ **placeBid**(`__namedParameters`): `Promise`<`void`\>

Place Bid into canister.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PlaceBidParams`](../modules/ICNSRegistrarController.md#placebidparams) |

#### Returns

`Promise`<`void`\>

___

### renew

▸ **renew**(`__namedParameters`): `Promise`<`void`\>

Renew into canister.
This function uses the actor agent identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RenewParams`](../modules/ICNSRegistrarController.md#renewparams) |

#### Returns

`Promise`<`void`\>

___

### withdraw

▸ **withdraw**(): `Promise`<`void`\>

Withdraw wicp tokens from registrar canister.
This function uses the actor agent identity.

#### Returns

`Promise`<`void`\>

## Constructors

### constructor

• **new ICNSRegistrarController**(`registrarActor?`)

Create an instance that communicates with icns registrar canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `registrarActor` | [`RegistrarActor`](../README.md#registraractor) | actor or an anonymous will be used |

## Properties

### info

• **info**: ``null`` \| [`Info`](../interfaces/Info.md) = `null`
