# Class: ICNSReverseController

ICNS Reverse Controller.
This class is responsible for handling all the requests related to the ICNS reverse registrar canister.

## Table of contents

### Constructors

- [constructor](ICNSReverseController.md#constructor)

### Methods

- [getAgentPrincipal](ICNSReverseController.md#getagentprincipal)
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
| `reverseActor` | [`ReverseActor`](../README.md#reverseactor) | actor or an anonymous will be used |

## Methods

### getAgentPrincipal

▸ **getAgentPrincipal**(): `Promise`<`Principal`\>

Get the principal of the agent.
It is going to throw if the principal is anonymous.

#### Returns

`Promise`<`Principal`\>

return Principal stored in agent

___

### getReverseName

▸ **getReverseName**(`owner`): `Promise`<`string`\>

get user's domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `Principal` | represents user identity |

#### Returns

`Promise`<`string`\>

represents  user principal => domain

___

### setReverseName

▸ **setReverseName**(`domain`): `Promise`<`void`\>

set reverse name according to domain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | represents user domain, such as: test.icp |

#### Returns

`Promise`<`void`\>

domain => user principal
