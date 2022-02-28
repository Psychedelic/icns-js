import type { Principal } from '@dfinity/principal';
export interface ICNSReserveName {
  'addController' : (arg_0: Principal) => Promise<Result>,
  'addReserve' : (arg_0: string) => Promise<Result>,
  'addReserveBatch' : (arg_0: string) => Promise<Result>,
  'removeController' : (arg_0: Principal) => Promise<Result>,
  'reserve' : (arg_0: string) => Promise<boolean>,
}
type Result = { 'ok' : null } |
  { 'err' : string };
