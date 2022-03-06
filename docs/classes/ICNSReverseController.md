# Class: ICNSReverseController

ICNS Reverse Controller.
This class is responsible for handling all the requests related to the ICNS reverse registrar canister.

## Table of contents

### Constructors

- [constructor](ICNSReverseController.md#constructor)

### Methods

- [getReverseName](ICNSReverseController.md#getreversename)
- [setReverseName](ICNSReverseController.md#setreversename)

## Constructors

### constructor

• **new ICNSReverseController**(`reverseActor?`)

Create an instance that communicates with icns reverse registrar canister.
Some of the functions uses the actor agent identity to identify the user that is interacting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reverseActor` | `ReverseActor` | actor or an anonymous will be used |

## Methods

### getReverseName

▸ **getReverseName**(`owner`): `Promise`<`string`\>

get user's domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `Principal` | Represents user identity |

#### Returns

`Promise`<`string`\>

Represents  user principal => domain

___

### setReverseName

▸ **setReverseName**(`domain`): `Promise`<`void`\>

set reverse name according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Represents user domain, such as: 'test.icp' |

#### Returns

`Promise`<`void`\>

domain => user principal
