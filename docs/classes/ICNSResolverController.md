# Class: ICNSResolverController

ICNS Resolver Controller.
This class is responsible for handling all the requests related to the ICNS resolver canister.

## Table of contents

### Properties

- [DefaultInfo](ICNSResolverController.md#defaultinfo)

### Constructors

- [constructor](ICNSResolverController.md#constructor)

### Methods

- [getAgentPrincipal](ICNSResolverController.md#getagentprincipal)
- [getHost](ICNSResolverController.md#gethost)
- [getPrincipalId](ICNSResolverController.md#getprincipalid)
- [getUserDefaultInfo](ICNSResolverController.md#getuserdefaultinfo)
- [setDefaultInfo](ICNSResolverController.md#setdefaultinfo)
- [setHost](ICNSResolverController.md#sethost)

## Properties

### DefaultInfo

• **DefaultInfo**: ``null`` \| [`DefaultInfoExt`](../interfaces/DefaultInfoExt.md) = `null`

## Constructors

### constructor

• **new ICNSResolverController**(`resolverActor?`)

Create an instance that communicates with icns resolver canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolverActor` | [`ResolverActor`](../README.md#resolveractor) | actor or an anonymous will be used |

## Methods

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

### getHost

▸ **getHost**(`domain`): `Promise`<`string` \| `Principal`\>

Get host according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<`string` \| `Principal`\>

___

### getPrincipalId

▸ **getPrincipalId**(`domain`): `Promise`<`Principal`\>

Get principal id according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<`Principal`\>

___

### getUserDefaultInfo

▸ **getUserDefaultInfo**(`domain`): `Promise`<`void`\>

Get user default info setted in resolver canister.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |

#### Returns

`Promise`<`void`\>

___

### setDefaultInfo

▸ **setDefaultInfo**(`domain`, `type`, `value`, `extensionType?`): `Promise`<`void`\>

set default info according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `type` | [`DefaultInfo`](../enums/ICNSResolverController.DefaultInfo.md) |
| `value` | `string` |
| `extensionType?` | `string` |

#### Returns

`Promise`<`void`\>

___

### setHost

▸ **setHost**(`domain`, `params?`): `Promise`<`void`\>

set host according to domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `params?` | [`HostParams`](../modules/ICNSResolverController.md#hostparams) |

#### Returns

`Promise`<`void`\>
