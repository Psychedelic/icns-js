# Class: ICNSregistryController

ICNS Registry Controller.
This class is responsible for handling all the requests related to the ICNS registry canister.

## Table of contents

### Methods

- [IsRecordExists](ICNSregistryController.md#isrecordexists)
- [approve](ICNSregistryController.md#approve)
- [getAgentPrincipal](ICNSregistryController.md#getagentprincipal)
- [getApproved](ICNSregistryController.md#getapproved)
- [getDomainBalanceOf](ICNSregistryController.md#getdomainbalanceof)
- [getDomainController](ICNSregistryController.md#getdomaincontroller)
- [getDomainExpiry](ICNSregistryController.md#getdomainexpiry)
- [getDomainOwner](ICNSregistryController.md#getdomainowner)
- [getDomainRecord](ICNSregistryController.md#getdomainrecord)
- [getDomainResolver](ICNSregistryController.md#getdomainresolver)
- [getDomainTTL](ICNSregistryController.md#getdomainttl)
- [isApproveForAll](ICNSregistryController.md#isapproveforall)
- [isApproved](ICNSregistryController.md#isapproved)
- [setApprovalForAll](ICNSregistryController.md#setapprovalforall)
- [setDomainController](ICNSregistryController.md#setdomaincontroller)
- [setDomainOwner](ICNSregistryController.md#setdomainowner)
- [setDomainResolver](ICNSregistryController.md#setdomainresolver)
- [setDomainTTL](ICNSregistryController.md#setdomainttl)
- [setRecord](ICNSregistryController.md#setrecord)
- [setSubDomainExpiry](ICNSregistryController.md#setsubdomainexpiry)
- [setSubDomainOwner](ICNSregistryController.md#setsubdomainowner)
- [setSubnodeRecord](ICNSregistryController.md#setsubnoderecord)
- [transfer](ICNSregistryController.md#transfer)
- [transferFrom](ICNSregistryController.md#transferfrom)

### Constructors

- [constructor](ICNSregistryController.md#constructor)

## Methods

### IsRecordExists

▸ **IsRecordExists**(`domain`): `Promise`<`boolean`\>

Get domain record exist in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### approve

▸ **approve**(`domain`, `operator`): `Promise`<`void`\>

Approve transfers domian from registrar canister.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `operator` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### getAgentPrincipal

▸ **getAgentPrincipal**(`actor`): `Promise`<`Principal`\>

Get the principal of the agent.
It is going to throw if the principal is anonymous.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | `Actor` |

#### Returns

`Promise`<`Principal`\>

___

### getApproved

▸ **getApproved**(`domain`): `Promise`<``null`` \| `Principal`\>

get approv for domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `Principal`\>

___

### getDomainBalanceOf

▸ **getDomainBalanceOf**(`owner`): `Promise`<`bigint`\>

get user's domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### getDomainController

▸ **getDomainController**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain controller in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `Principal`\>

___

### getDomainExpiry

▸ **getDomainExpiry**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain expiry in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `bigint`\>

___

### getDomainOwner

▸ **getDomainOwner**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain owner in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `Principal`\>

___

### getDomainRecord

▸ **getDomainRecord**(`domain`): `Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

Get record in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

___

### getDomainResolver

▸ **getDomainResolver**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain resolver in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `Principal`\>

___

### getDomainTTL

▸ **getDomainTTL**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain ttl in registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<``null`` \| `bigint`\>

___

### isApproveForAll

▸ **isApproveForAll**(`owner`, `operator`): `Promise`<`boolean`\>

get approve for all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `Principal` |
| `operator` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### isApproved

▸ **isApproved**(`domain`, `who`): `Promise`<`boolean`\>

get approve for domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `who` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### setApprovalForAll

▸ **setApprovalForAll**(`approved`, `operator`): `Promise`<`void`\>

Approve transfers domain from registrar canister.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `approved` | `boolean` |
| `operator` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### setDomainController

▸ **setDomainController**(`domain`, `controller`): `Promise`<`void`\>

set domain controller according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `controller` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### setDomainOwner

▸ **setDomainOwner**(`domain`, `owner`): `Promise`<`void`\>

set domain owner according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `owner` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### setDomainResolver

▸ **setDomainResolver**(`domain`, `resolver`): `Promise`<`void`\>

set domain resolver according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `resolver` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### setDomainTTL

▸ **setDomainTTL**(`domain`, `ttl`): `Promise`<`void`\>

set domain ttl according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `ttl` | `bigint` |

#### Returns

`Promise`<`void`\>

___

### setRecord

▸ **setRecord**(`params`): `Promise`<`void`\>

set record according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`RecordParams`](../modules/ICNSRegistryController.md#recordparams) | recoed type |

#### Returns

`Promise`<`void`\>

___

### setSubDomainExpiry

▸ **setSubDomainExpiry**(`domain`, `sublabel`, `newExpiry`): `Promise`<`void`\>

set sub domain expiry according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `sublabel` | `string` |
| `newExpiry` | `bigint` |

#### Returns

`Promise`<`void`\>

___

### setSubDomainOwner

▸ **setSubDomainOwner**(`domain`, `sublabel`, `owner`): `Promise`<`void`\>

set sub domain owner according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `sublabel` | `string` |
| `owner` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### setSubnodeRecord

▸ **setSubnodeRecord**(`params`): `Promise`<`void`\>

set subnoderecord according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`RecordParams`](../modules/ICNSRegistryController.md#recordparams) | recoed type |

#### Returns

`Promise`<`void`\>

___

### transfer

▸ **transfer**(`domain`, `to`): `Promise`<`void`\>

transfers domain from owner to others.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `to` | `Principal` |

#### Returns

`Promise`<`void`\>

___

### transferFrom

▸ **transferFrom**(`domain`, `from`, `to`): `Promise`<`void`\>

allow operator transfers domain from owner to others.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `from` | `Principal` |
| `to` | `Principal` |

#### Returns

`Promise`<`void`\>

## Constructors

### constructor

• **new ICNSregistryController**(`registryActor?`)

Create an instance that communicates with icns registry canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `registryActor` | [`RegistryActor`](../README.md#registryactor) | actor or an anonymous will be used |
