# Namespace: Types

## Table of contents

### Type aliases

- [Amount](Types.md#amount)
- [Decimals](Types.md#decimals)
- [DomainList](Types.md#domainlist)
- [Host](Types.md#host)
- [Number](Types.md#number)
- [RecordParams](Types.md#recordparams)

## Type aliases

### Amount

Ƭ **Amount**: `string`

It is a string that represents the number that is shown on user interfaces. (e.g. token amount, money amount)

___

### Decimals

Ƭ **Decimals**: `number`

It is always a integer that represents the decimals allowed on a DIP20 token.

___

### DomainList

Ƭ **DomainList**: `string`[]

Type definition for a user's domains.

___

### Host

Ƭ **Host**: { `url`: `string`  } \| { `canister`: `Principal`  }

Type definition for Host of domains. It is a url or a principal id.

**`param`**

**`param`**

___

### Number

Ƭ **Number**: `BigInt` \| `string` \| `number` \| `BigNumber`

It receives all possible representations of a number. (e.g. integer, float, percentage, bigint)

___

### RecordParams

Ƭ **RecordParams**: `Object`

Type definition for params of the record function.

**`param`** record infos

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiry` | `bigint` |
| `node` | `string` |
| `owner` | `Principal` |
| `registry` | `Principal` |
| `sublabel?` | `string` |
| `ttl` | `bigint` |
