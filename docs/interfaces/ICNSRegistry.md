# Interface: ICNSRegistry

## Table of contents

### Methods

- [addWhitelist](ICNSRegistry.md#addwhitelist)
- [approve](ICNSRegistry.md#approve)
- [balanceOf](ICNSRegistry.md#balanceof)
- [controller](ICNSRegistry.md#controller)
- [expiry](ICNSRegistry.md#expiry)
- [exportOwnerDomains](ICNSRegistry.md#exportownerdomains)
- [getApproved](ICNSRegistry.md#getapproved)
- [getControllerDomains](ICNSRegistry.md#getcontrollerdomains)
- [getInfo](ICNSRegistry.md#getinfo)
- [getRecord](ICNSRegistry.md#getrecord)
- [getUserDomains](ICNSRegistry.md#getuserdomains)
- [isApproved](ICNSRegistry.md#isapproved)
- [isApprovedForAll](ICNSRegistry.md#isapprovedforall)
- [isWhitelisted](ICNSRegistry.md#iswhitelisted)
- [owner](ICNSRegistry.md#owner)
- [recordExists](ICNSRegistry.md#recordexists)
- [removeWhitelist](ICNSRegistry.md#removewhitelist)
- [resolver](ICNSRegistry.md#resolver)
- [setApprovalForAll](ICNSRegistry.md#setapprovalforall)
- [setController](ICNSRegistry.md#setcontroller)
- [setOwner](ICNSRegistry.md#setowner)
- [setRecord](ICNSRegistry.md#setrecord)
- [setResolver](ICNSRegistry.md#setresolver)
- [setSubnodeExpiry](ICNSRegistry.md#setsubnodeexpiry)
- [setSubnodeOwner](ICNSRegistry.md#setsubnodeowner)
- [setSubnodeRecord](ICNSRegistry.md#setsubnoderecord)
- [setTTL](ICNSRegistry.md#setttl)
- [transfer](ICNSRegistry.md#transfer)
- [transferFrom](ICNSRegistry.md#transferfrom)
- [ttl](ICNSRegistry.md#ttl)

## Methods

### addWhitelist

▸ **addWhitelist**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### approve

▸ **approve**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`TxReceipt`\>

___

### balanceOf

▸ **balanceOf**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<`bigint`\>

___

### controller

▸ **controller**(`arg_0`): `Promise`<[] \| [`Principal`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`Principal`]\>

___

### expiry

▸ **expiry**(`arg_0`): `Promise`<[] \| [`bigint`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`bigint`]\>

___

### exportOwnerDomains

▸ **exportOwnerDomains**(): `Promise`<[`Principal`, `string`[]][]\>

#### Returns

`Promise`<[`Principal`, `string`[]][]\>

___

### getApproved

▸ **getApproved**(`arg_0`): `Promise`<[] \| [`Principal`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`Principal`]\>

___

### getControllerDomains

▸ **getControllerDomains**(`arg_0`): `Promise`<[] \| [[`RecordExt`](RecordExt.md)[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[] \| [[`RecordExt`](RecordExt.md)[]]\>

___

### getInfo

▸ **getInfo**(): `Promise`<`Info`\>

#### Returns

`Promise`<`Info`\>

___

### getRecord

▸ **getRecord**(`arg_0`): `Promise`<[] \| [[`RecordExt`](RecordExt.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [[`RecordExt`](RecordExt.md)]\>

___

### getUserDomains

▸ **getUserDomains**(`arg_0`): `Promise`<[] \| [[`RecordExt`](RecordExt.md)[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[] \| [[`RecordExt`](RecordExt.md)[]]\>

___

### isApproved

▸ **isApproved**(`arg_0`, `arg_1`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### isApprovedForAll

▸ **isApprovedForAll**(`arg_0`, `arg_1`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`boolean`\>

___

### isWhitelisted

▸ **isWhitelisted**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### owner

▸ **owner**(`arg_0`): `Promise`<[] \| [`Principal`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`Principal`]\>

___

### recordExists

▸ **recordExists**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### removeWhitelist

▸ **removeWhitelist**(`arg_0`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### resolver

▸ **resolver**(`arg_0`): `Promise`<[] \| [`Principal`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`Principal`]\>

___

### setApprovalForAll

▸ **setApprovalForAll**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `boolean` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setController

▸ **setController**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setOwner

▸ **setOwner**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setRecord

▸ **setRecord**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |
| `arg_2` | `Principal` |
| `arg_3` | `bigint` |
| `arg_4` | `bigint` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setResolver

▸ **setResolver**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `Principal` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setSubnodeExpiry

▸ **setSubnodeExpiry**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | `bigint` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setSubnodeOwner

▸ **setSubnodeOwner**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | `Principal` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setSubnodeRecord

▸ **setSubnodeRecord**(`arg_0`, `arg_1`, `arg_2`, `arg_3`, `arg_4`, `arg_5`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | `Principal` |
| `arg_3` | `Principal` |
| `arg_4` | `bigint` |
| `arg_5` | `bigint` |

#### Returns

`Promise`<`TxReceipt`\>

___

### setTTL

▸ **setTTL**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `bigint` |

#### Returns

`Promise`<`TxReceipt`\>

___

### transfer

▸ **transfer**(`arg_0`, `arg_1`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `string` |

#### Returns

`Promise`<`TxReceipt`\>

___

### transferFrom

▸ **transferFrom**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`TxReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `Principal` |
| `arg_2` | `string` |

#### Returns

`Promise`<`TxReceipt`\>

___

### ttl

▸ **ttl**(`arg_0`): `Promise`<[] \| [`bigint`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [`bigint`]\>
