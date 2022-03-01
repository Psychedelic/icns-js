import { Constants } from '@/declarations';
import {
  idlFavoriteFactory,
  idlRegistrarFactory,
  idlRegistryFactory,
  idlResolverFactory,
  idlReverseRegistrarFactory,
  idlWICPFactory
 } from '@/declarations/did';

import {
  ICNSFavorite,
  ICNSRegistrar,
  ICNSRegistry,
  ICNSResolver,
  ICNSReverseRegistrar,
  ICNSToken
} from "@/declarations/did/models"
import { ActorAdapter } from './adapter';

/**
 * Options for creating an CanisterActor.
 * @param {string} canisterId  Canister ID, default is applied
 * @param {ActorAdapter} actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
export interface CreateCanisterActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

/**
 * Type of RegistrarActor.
 */
export type RegistrarActor = ActorAdapter.Actor<ICNSRegistrar>;

/**
 * Creates a Registrar canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param {CreateCanisterActorOptions} options Options for creating the RegistrarActor
 * @returns {RegistrarActor} actor instance
 */
export const createRegistrarActor = ({
  canisterId = Constants.canisterIds.registrar,
  actorAdapter = new ActorAdapter(), // defalut anonymous
}: CreateCanisterActorOptions = {}): Promise<RegistrarActor> => {
  return actorAdapter.createActor(canisterId, idlRegistrarFactory);
};


/**
 * Type of RegistryActor.
 */
export type RegistryActor = ActorAdapter.Actor<ICNSRegistry>;

/**
 * Creates a Registry canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param {CreateCanisterActorOptions} options Options for creating the RegistryActor
 * @returns {RegistryActor} actor instance
 */
export const createRegistryActor = ({
  canisterId = Constants.canisterIds.registry,
  actorAdapter = new ActorAdapter(),
}: CreateCanisterActorOptions): Promise<RegistryActor> => {
  return actorAdapter.createActor(canisterId, idlRegistryFactory);
};

 /**
 * Type of ResolverActor.
 */
export type ResolverActor = ActorAdapter.Actor<ICNSResolver>;

/**
 * Creates a Resolver canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param {CreateCanisterActorOptions} options Options for creating the ResolverActor
 * @returns {ResolverActor} actor instance
 */
export const createResolverActor = ({
  canisterId = Constants.canisterIds.resolver,
  actorAdapter = new ActorAdapter(),
}: CreateCanisterActorOptions): Promise<ResolverActor> => {
  return actorAdapter.createActor(canisterId, idlResolverFactory);
};

 /**
 * Type of ReverseActor.
 */
  export type ReverseActor = ActorAdapter.Actor<ICNSReverseRegistrar>;

  /**
   * Creates a Reverse canister actor.
   * If no option is provided, the actor will be created using the default canister options.
   * @param {CreateCanisterActorOptions} options Options for creating the ReverseActor
   * @returns {ReverseActor} actor instance
   */
  export const createReverseActor = ({
    canisterId = Constants.canisterIds.reverse_registrar,
    actorAdapter = new ActorAdapter(),
  }: CreateCanisterActorOptions): Promise<ReverseActor> => {
    return actorAdapter.createActor(canisterId, idlReverseRegistrarFactory);
  };

/**
 * Type of FavoriteActor.
 */
 export type FavoriteActor = ActorAdapter.Actor<ICNSFavorite>;

 /**
  * Creates a Favorite canister actor.
  * If no option is provided, the actor will be created using the default canister options.
  * @param {CreateCanisterActorOptions} options Options for creating the FavoriteActor
  * @returns {FavoriteActor} actor instance
  */
 export const createFavoriteActor = ({
   canisterId = Constants.canisterIds.favorite,
   actorAdapter = new ActorAdapter(),
 }: CreateCanisterActorOptions): Promise<FavoriteActor> => {
   return actorAdapter.createActor(canisterId, idlFavoriteFactory);
 };

 /**
 * Type of WICPActor.
 */
export type TokenActor = ActorAdapter.Actor<ICNSToken>;

/**
 * Creates a DIP20 Token canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param {CreateCanisterActorOptions} options Options for creating the TokenActor
 * @returns {TokenActor} actor instance
 */
export const createTokenActor = ({
  canisterId = Constants.canisterIds.WICP,
  actorAdapter = new ActorAdapter(),
}: CreateCanisterActorOptions): Promise<TokenActor> => {
  return actorAdapter.createActor(canisterId, idlWICPFactory);
};
