import type { Principal } from '@dfinity/principal';
/** @internal */
export interface ICNSReverseRegistrar {
  'getName' : (arg_0: Principal) => Promise<string>,
  'setName' : (arg_0: string) => Promise<Result>,
}
type Result = { 'ok' : string } |
  { 'err' : string };
