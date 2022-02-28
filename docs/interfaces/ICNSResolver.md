# Interface: ICNSResolver

## Table of contents

### Methods

- [getAddr](ICNSResolver.md#getaddr)
- [getCanister](ICNSResolver.md#getcanister)
- [getExtensionLimit](ICNSResolver.md#getextensionlimit)
- [getHost](ICNSResolver.md#gethost)
- [getInfo](ICNSResolver.md#getinfo)
- [getLengthLimit](ICNSResolver.md#getlengthlimit)
- [getText](ICNSResolver.md#gettext)
- [getUserDefaultInfo](ICNSResolver.md#getuserdefaultinfo)
- [setAddr](ICNSResolver.md#setaddr)
- [setCanister](ICNSResolver.md#setcanister)
- [setExtensionLimit](ICNSResolver.md#setextensionlimit)
- [setHost](ICNSResolver.md#sethost)
- [setLengthLimit](ICNSResolver.md#setlengthlimit)
- [setText](ICNSResolver.md#settext)

## Methods

### getAddr

▸ **getAddr**(`arg_0`, `arg_1`): `Promise`<[] \| [`string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |

#### Returns

`Promise`<[] \| [`string`]\>

___

### getCanister

▸ **getCanister**(`arg_0`, `arg_1`): `Promise`<[] \| [`Principal`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |

#### Returns

`Promise`<[] \| [`Principal`]\>

___

### getExtensionLimit

▸ **getExtensionLimit**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getHost

▸ **getHost**(`arg_0`): `Promise`<[] \| [{ `url`: `string`  } \| { `canister`: `Principal`  }]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [{ `url`: `string`  } \| { `canister`: `Principal`  }]\>

___

### getInfo

▸ **getInfo**(): `Promise`<`Info`\>

#### Returns

`Promise`<`Info`\>

___

### getLengthLimit

▸ **getLengthLimit**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

___

### getText

▸ **getText**(`arg_0`, `arg_1`): `Promise`<[] \| [`string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |

#### Returns

`Promise`<[] \| [`string`]\>

___

### getUserDefaultInfo

▸ **getUserDefaultInfo**(`arg_0`): `Promise`<[] \| [[`DefaultInfoExt`](DefaultInfoExt.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<[] \| [[`DefaultInfoExt`](DefaultInfoExt.md)]\>

___

### setAddr

▸ **setAddr**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | [] \| [`string`] |

#### Returns

`Promise`<`Result`\>

___

### setCanister

▸ **setCanister**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | [] \| [`Principal`] |

#### Returns

`Promise`<`Result`\>

___

### setExtensionLimit

▸ **setExtensionLimit**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### setHost

▸ **setHost**(`arg_0`, `arg_1`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | [] \| [{ `url`: `string`  } \| { `canister`: `Principal`  }] |

#### Returns

`Promise`<`Result`\>

___

### setLengthLimit

▸ **setLengthLimit**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>

___

### setText

▸ **setText**(`arg_0`, `arg_1`, `arg_2`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |
| `arg_1` | `string` |
| `arg_2` | [] \| [`string`] |

#### Returns

`Promise`<`Result`\>
