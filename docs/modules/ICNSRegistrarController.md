# Namespace: ICNSRegistrarController

Type definition for the ICNSRegistrarController.

## Table of contents

### Type aliases

- [ApproveParams](ICNSRegistrarController.md#approveparams)
- [PlaceBidParams](ICNSRegistrarController.md#placebidparams)
- [RenewParams](ICNSRegistrarController.md#renewparams)

## Type aliases

### ApproveParams

Ƭ **ApproveParams**: `Object`

Type definition for params of the approve function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `tokenId?` | `string` |

___

### PlaceBidParams

Ƭ **PlaceBidParams**: `Object`

Type definition for params of the placebid function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Amount`](Types.md#amount) |
| `domain` | `string` |

___

### RenewParams

Ƭ **RenewParams**: `Object`

Type definition for params of the renew function.

**`param`**

**`param`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `duration` | [`Number`](Types.md#number) |
