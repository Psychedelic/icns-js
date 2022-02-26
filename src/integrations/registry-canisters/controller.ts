import { AuctionExt, Constants, idlRegistryFactory, Info, Token, Types } from '@/declarations';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  createTokenActor,
  RegistryActor,
} from '..';
import {
  createRegistryActor
} from '..'


declare global {
  interface Window { ic: any; }
}

/**
 * ICNS Canister Controller.
 * This class is responsible for handling all the requests related to the ICNS canister.
 */
export class registryCanisterController {
  info: Info | null = null

  /**
   * Create an instance that communicates with icns canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {RegistryActor} registryAnonymousActor actor or an anonymous will be used
   */
  constructor(
    private registryAnonymousActor: RegistryActor = ActorAdapter.createAnonymousActor<RegistryActor>(
      Constants.canisterIds.registry,
      idlRegistryFactory
    )
  ) { }

}

/**
 * Type definition for the SwapCanisterController.
 */
export namespace registryCanisterController {


}
