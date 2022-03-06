# Class: ICNSRegistryController

ICNS Registry Controller.
This class is responsible for handling all the requests related to the ICNS registry canister.

## Table of contents

### Methods

- [approve](ICNSRegistryController.md#approve)
- [balanceOf](ICNSRegistryController.md#balanceof)
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name to be approved. |
| `operator` | `Principal` | Represents approve who can operate owner's domain. |

#### Returns

`Promise`<`void`\>

Return void promise.

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

### getApproved

▸ **getApproved**(`domain`): `Promise`<``null`` \| `Principal`\>

get approved operator of a domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name. |

#### Returns

`Promise`<``null`` \| `Principal`\>

Return Principal id of the approved operator. Return null if no one got approved.

___

### getController

▸ **getController**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain controller in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<``null`` \| `Principal`\>

Return the Principal id of this name's controller, return null if not set.

___

### getExpiry

▸ **getExpiry**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain expiry in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |

#### Returns

`Promise`<``null`` \| `bigint`\>

Return the expiry time of this domain name, return null if not timed.

___

### getOwner

▸ **getOwner**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain owner in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<``null`` \| `Principal`\>

Return the Principal id of this name's owner, return null if not set.

___

### getRecord

▸ **getRecord**(`domain`): `Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

Get record in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<``null`` \| [`RecordExt`](../interfaces/RecordExt.md)\>

Return record data object. Return null if not set.

___

### getResolver

▸ **getResolver**(`domain`): `Promise`<``null`` \| `Principal`\>

Get domain resolver in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<``null`` \| `Principal`\>

Return the Principal id resolved from this domain name, return null if not set.

___

### getTTL

▸ **getTTL**(`domain`): `Promise`<``null`` \| `bigint`\>

Get domain ttl in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |

#### Returns

`Promise`<``null`` \| `bigint`\>

Return TTL value.

___

### getUserNames

▸ **getUserNames**(`user`): `Promise`<[`DomainList`](../modules/Types.md#domainlist)\>

Get user's all registed domains in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `Principal` | Represents the Principal id of the user. |

#### Returns

`Promise`<[`DomainList`](../modules/Types.md#domainlist)\>

Return record data object.

___

### isApproved

▸ **isApproved**(`domain`, `who`): `Promise`<`boolean`\>

Get whether someone is approved for specific domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name. |
| `who` | `Principal` | Represents the principal id of the one to get checked. |

#### Returns

`Promise`<`boolean`\>

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`): `Promise`<`boolean`\>

Get whether someone is approved for all domains of an owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `Principal` | Represents the Principal id of the owner. |
| `operator` | `Principal` | Represents the principal id of the one to get checked. |

#### Returns

`Promise`<`boolean`\>

___

### recordExists

▸ **recordExists**(`domain`): `Promise`<`boolean`\>

Check if domain record exist in registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<`boolean`\>

Return whether its record exists

___

### setApprovalForAll

▸ **setApprovalForAll**(`approved`, `operator`): `Promise`<`void`\>

Approve transfers domain from registrar canister.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `approved` | `boolean` | Represents whether the approve operator are approved for all domians. |
| `operator` | `Principal` | Represents the Principal id of the operator. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setController

▸ **setController**(`domain`, `controller`): `Promise`<`void`\>

Set domain controller according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `controller` | `Principal` | Represents new controller. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setOwner

▸ **setOwner**(`domain`, `owner`): `Promise`<`void`\>

Set domain owner according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `owner` | `Principal` | Represents the Principal id of the new owner. |

#### Returns

`Promise`<`void`\>

Return void promise

___

### setRecord

▸ **setRecord**(`params`): `Promise`<`void`\>

Set record according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`RecordParams`](../modules/Types.md#recordparams) | The data of the record. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setResolver

▸ **setResolver**(`domain`, `resolver`): `Promise`<`void`\>

Set domain's resolver according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `resolver` | `Principal` | Represents new resolver. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setSubDomainExpiry

▸ **setSubDomainExpiry**(`domain`, `sublabel`, `newExpiry`): `Promise`<`void`\>

Set subdomain expiry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `sublabel` | `string` | Represents sublabel, such as: 'hello.test.icp'. |
| `newExpiry` | `bigint` | Represents the new expiry. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setSubDomainOwner

▸ **setSubDomainOwner**(`domain`, `sublabel`, `owner`): `Promise`<`void`\>

Set sub domain owner according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `sublabel` | `string` | Represents sublabel, such as: 'hello.test.icp'. |
| `owner` | `Principal` | Represents the Principal id of the thenew owner. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setSubnodeRecord

▸ **setSubnodeRecord**(`params`): `Promise`<`void`\>

Set subnoderecord according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`RecordParams`](../modules/Types.md#recordparams) | The data of the record. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setTTL

▸ **setTTL**(`domain`, `ttl`): `Promise`<`void`\>

set domain ttl according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents the domain name, such as: 'test.icp'. |
| `ttl` | `bigint` | Represents the new ttl. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### transfer

▸ **transfer**(`domain`, `to`): `Promise`<`void`\>

transfers domain from owner to others.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name |
| `to` | `Principal` | Represents who will get the domain |

#### Returns

`Promise`<`void`\>

Return void promise

___

### transferFrom

▸ **transferFrom**(`domain`, `from`, `to`): `Promise`<`void`\>

allow operator transfers domain from owner to others.
This function uses the actor agent identity.
This function needs to be called before operate with registry canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name. |
| `from` | `Principal` | Represents the domain's owner. |
| `to` | `Principal` | Represents who will get the domain. |

#### Returns

`Promise`<`void`\>

Return void promise.

## Constructors

### constructor

• **new ICNSRegistryController**(`registryActor?`)

Create an instance that communicates with icns registry canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `registryActor` | [`RegistryActor`](../README.md#registryactor) | actor or an anonymous will be used |
