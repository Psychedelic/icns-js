# Class: ICNSRegistryController

ICNS Registry Controller.
This class is responsible for handling all the requests related to the ICNS registry canister.

## Table of contents

### Methods

- [approve](ICNSRegistryController.md#approve)
- [balanceOf](ICNSRegistryController.md#balanceof)
- [getAgentPrincipal](ICNSRegistryController.md#getagentprincipal)
- [getApproved](ICNSRegistryController.md#getapproved)
- [getController](ICNSRegistryController.md#getcontroller)
- [getExpiry](ICNSRegistryController.md#getexpiry)
- [getOwner](ICNSRegistryController.md#getowner)
- [getRecord](ICNSRegistryController.md#getrecord)
- [getResolver](ICNSRegistryController.md#getresolver)
- [getTTL](ICNSRegistryController.md#getttl)
- [getUserNames](ICNSRegistryController.md#getusernames)
- [isApproved](ICNSRegistryController.md#isapproved)
- [isApprovedForAll](ICNSRegistryController.md#isapprovedforall)
- [recordExists](ICNSRegistryController.md#recordexists)
- [setApprovalForAll](ICNSRegistryController.md#setapprovalforall)
- [setController](ICNSRegistryController.md#setcontroller)
- [setOwner](ICNSRegistryController.md#setowner)
- [setRecord](ICNSRegistryController.md#setrecord)
- [setResolver](ICNSRegistryController.md#setresolver)
- [setSubDomainExpiry](ICNSRegistryController.md#setsubdomainexpiry)
- [setSubDomainOwner](ICNSRegistryController.md#setsubdomainowner)
- [setSubnodeRecord](ICNSRegistryController.md#setsubnoderecord)
- [setTTL](ICNSRegistryController.md#setttl)
- [transfer](ICNSRegistryController.md#transfer)
- [transferFrom](ICNSRegistryController.md#transferfrom)

### Constructors

- [constructor](ICNSRegistryController.md#constructor)

## Methods

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

### balanceOf

▸ **balanceOf**(`owner`): `Promise`<`bigint`\>

get user's domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### getAgentPrincipal

▸ **getAgentPrincipal**(): `Promise`<`Principal`\>

Get the principal of the agent.
It is going to throw if the principal is anonymous.

#### Returns

`Promise`<`Principal`\>

return Principal stored in agent

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

### getController

▸ **getController**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain controller in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| `Principal`\>

return the Principal id of this name's controller, return null if not set.

___

### getExpiry

▸ **getExpiry**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain expiry in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| `bigint`\>

return the expiry time of this domain name, return null if not timed.

___

### getOwner

▸ **getOwner**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain owner in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| `Principal`\>

return the Principal id of this name's owner, return null if not set.

___

### getRecord

▸ **getRecord**(`domain`): `Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

Get record in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

return record data object

___

### getResolver

▸ **getResolver**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain resolver in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| `Principal`\>

return the Principal id resolved from this name, return null if not set.

___

### getTTL

▸ **getTTL**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain ttl in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<``null`` \| `bigint`\>

___

### getUserNames

▸ **getUserNames**(`user`): `Promise`<[`List`](../modules/Domain.md#list)\>

Get user's all registed domains in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `Principal` | represents user indentity |

#### Returns

`Promise`<[`List`](../modules/Domain.md#list)\>

return record data object

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

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`): `Promise`<`boolean`\>

get approve for all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `Principal` |
| `operator` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### recordExists

▸ **recordExists**(`domain`): `Promise`<`boolean`\>

Check if domain record exist in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<`boolean`\>

return whether its record exists

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

### setController

▸ **setController**(`domain`, `controller`): `Promise`<`void`\>

set domain controller according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `controller` | `Principal` |

#### Returns

`Promise`<`void`\>

return nothing

___

### setOwner

▸ **setOwner**(`domain`, `owner`): `Promise`<`void`\>

set domain owner according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `owner` | `Principal` |

#### Returns

`Promise`<`void`\>

return nothing

___

### setRecord

▸ **setRecord**(`params`): `Promise`<`void`\>

set record according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RecordParams`](../modules/ICNSRegistryController.md#recordparams) |

#### Returns

`Promise`<`void`\>

return nothing

___

### setResolver

▸ **setResolver**(`domain`, `resolver`): `Promise`<`void`\>

set domain resolver according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `resolver` | `Principal` |

#### Returns

`Promise`<`void`\>

return nothing

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

return nothing

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

return nothing

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

return nothing

___

### setTTL

▸ **setTTL**(`domain`, `ttl`): `Promise`<`void`\>

set domain ttl according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `ttl` | `bigint` |

#### Returns

`Promise`<`void`\>

return nothing

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

• **new ICNSRegistryController**(`registryActor?`)

Create an instance that communicates with icns registry canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `registryActor` | [`RegistryActor`](../README.md#registryactor) | actor or an anonymous will be used |
