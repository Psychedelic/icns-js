# Interface: ICNSFavorite

## Table of contents

### Methods

- [addFavoriteName](ICNSFavorite.md#addfavoritename)
- [getUserFavoriteNames](ICNSFavorite.md#getuserfavoritenames)
- [isFavorite](ICNSFavorite.md#isfavorite)
- [removeFavoriteName](ICNSFavorite.md#removefavoritename)
- [setFavoriteLimit](ICNSFavorite.md#setfavoritelimit)

## Methods

### addFavoriteName

▸ **addFavoriteName**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result`\>

___

### getUserFavoriteNames

▸ **getUserFavoriteNames**(`arg_0`): `Promise`<[] \| [`string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |

#### Returns

`Promise`<[] \| [`string`[]]\>

___

### isFavorite

▸ **isFavorite**(`arg_0`, `arg_1`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `Principal` |
| `arg_1` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### removeFavoriteName

▸ **removeFavoriteName**(`arg_0`): `Promise`<`Result`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `string` |

#### Returns

`Promise`<`Result`\>

___

### setFavoriteLimit

▸ **setFavoriteLimit**(`arg_0`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg_0` | `bigint` |

#### Returns

`Promise`<`bigint`\>
