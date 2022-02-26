import { AuctionExt, Constants, idlRegistrarFactory, idlReverseRegistrarFactory, Info, Token, Types } from '@/declarations';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  createTokenActor,
  RegistrarActor,
  ReverseActor,
} from '..';
import {
  createRegistrarActor
} from '..'


declare global {
  interface Window { ic: any; }
}

/**
 * ICNS Canister Controller.
 * This class is responsible for handling all the requests related to the ICNS canister.
 */
export class ReverseCanisterController {
  info: Info | null = null

  /**
   * Create an instance that communicates with icns canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {ReverseRegistrarActor} reverseRegistrarAnonymousActor actor or an anonymous will be used
   */
  constructor(
    private reverseRegistrarAnonymousActor: ReverseActor = ActorAdapter.createAnonymousActor<ReverseActor>(
      Constants.canisterIds.reverse_registrar,
      idlReverseRegistrarFactory
    )
  ) { }

}

/**
 * Type definition for the SwapCanisterController.
 */
export namespace ReverseCanisterController {
}
