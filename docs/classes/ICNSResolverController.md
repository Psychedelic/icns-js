# Class: ICNSResolverController

ICNS Resolver Controller.
This class is responsible for handling all the requests related to the ICNS resolver canister.

## Table of contents

### Properties

- [DefaultInfo](ICNSResolverController.md#defaultinfo)

### Constructors

- [constructor](ICNSResolverController.md#constructor)

### Methods

- [getAddr](ICNSResolverController.md#getaddr)
- [getCanister](ICNSResolverController.md#getcanister)
- [getHost](ICNSResolverController.md#gethost)
- [getPrincipalId](ICNSResolverController.md#getprincipalid)
- [getText](ICNSResolverController.md#gettext)
- [getUserDefaultInfo](ICNSResolverController.md#getuserdefaultinfo)
- [setAddr](ICNSResolverController.md#setaddr)
- [setCanister](ICNSResolverController.md#setcanister)
- [setDefaultInfo](ICNSResolverController.md#setdefaultinfo)
- [setHost](ICNSResolverController.md#sethost)
- [setText](ICNSResolverController.md#settext)

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
| `resolverActor` | `ResolverActor` | actor or an anonymous will be used |

## Methods

### getAddr

▸ **getAddr**(`domain`, `coinType`): `Promise`<`string`\>

Get setted coin address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents domain name. |
| `coinType` | `string` | Represents coin type. |

#### Returns

`Promise`<`string`\>

Return coin address.

___

### getCanister

▸ **getCanister**(`domain`, `key`): `Promise`<`Principal`\>

Get canister id in the record.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `key` | `string` | Represents canister, such as: main. |

#### Returns

`Promise`<`Principal`\>

Return canister id in the record.

___

### getHost

▸ **getHost**(`domain`): `Promise`<`string` \| `Principal`\>

Get host record.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |

#### Returns

`Promise`<`string` \| `Principal`\>

Return host of a domain name.

___

### getPrincipalId

▸ **getPrincipalId**(`domain`): `Promise`<`Principal`\>

Get principal id by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |

#### Returns

`Promise`<`Principal`\>

Return Principal id in domain's record.

___

### getText

▸ **getText**(`domain`, `key`): `Promise`<`string`\>

Get text info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `key` | `string` | Represents user info, such as: twitter. |

#### Returns

`Promise`<`string`\>

Return user info.

___

### getUserDefaultInfo

▸ **getUserDefaultInfo**(`domain`): `Promise`<``null`` \| [`DefaultInfoExt`](../interfaces/DefaultInfoExt.md)\>

Get user default info in resolver canister.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |

#### Returns

`Promise`<``null`` \| [`DefaultInfoExt`](../interfaces/DefaultInfoExt.md)\>

Return info or null.

___

### setAddr

▸ **setAddr**(`domain`, `coinType`, `value`): `Promise`<`void`\>

Set coin addresss in user info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `coinType` | `string` | Represents user domain, such as: 'test.icp'. |
| `value` | `string` | Represents coin address. '' is allowed to unset this coinType field. Length must be less than 250. This sdk will varify the value. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setCanister

▸ **setCanister**(`domain`, `key`, `value`): `Promise`<`void`\>

Set canister id in user info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `key` | `string` | Represents user domain, such as: 'test.icp'. |
| `value` | `string` | Represents canister id. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setDefaultInfo

▸ **setDefaultInfo**(`domain`, `type`, `value`, `extensionType?`): `Promise`<`void`\>

Set default info according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `type` | `DefaultInfo` | Represents which type info user wants to set. |
| `value` | `string` | Represents the value. |
| `extensionType?` | `string` | Represents the extra type user wants to set. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setHost

▸ **setHost**(`domain`, `params?`): `Promise`<`void`\>

Set host record in user info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `params?` | [`Host`](../modules/Types.md#host) | Host value. |

#### Returns

`Promise`<`void`\>

Return void promise.

___

### setText

▸ **setText**(`domain`, `key`, `value`): `Promise`<`void`\>

Set text in user info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp'. |
| `key` | `string` | Represents user domain, such as: 'test.icp'. |
| `value` | `string` | Represents info. '' is allowed to unset this info field(if it's an extension field, it will be deleted). Length must be less than 250. |

#### Returns

`Promise`<`void`\>

Return void promise.
