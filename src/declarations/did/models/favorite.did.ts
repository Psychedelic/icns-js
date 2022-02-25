import type { Principal } from '@dfinity/principal';
export interface ICNSFavorite {
  'addFavoriteName' : (arg_0: string) => Promise<Result>,
  'getUserFavoriteNames' : (arg_0: Principal) => Promise<[] | [Array<string>]>,
  'isFavorite' : (arg_0: Principal, arg_1: string) => Promise<boolean>,
  'removeFavoriteName' : (arg_0: string) => Promise<Result>,
  'setFavoriteLimit' : (arg_0: bigint) => Promise<bigint>,
}
type Result = { 'ok' : boolean } |
  { 'err' : string };
interface _SERVICE extends ICNSFavorite {}
