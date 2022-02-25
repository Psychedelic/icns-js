import { AuctionExt, Constants, idlRegistrarFactory, Info, Token, Types } from '@/declarations';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  createTokenActor,
  RegistrarActor,
  RegistryActor,
  ReserveNameActor,
  ReverseActor,
  FavoriteActor,
  TokenActor,
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
export class ICNSCanisterController {
  info: Info | null = null

  /**
   * Create an instance that communicates with icns canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {RegistrarActor} registrarAnonymousActor actor or an anonymous will be used
   */
  constructor(
    private registrarAnonymousActor: RegistrarActor = ActorAdapter.createAnonymousActor<RegistrarActor>(
      Constants.canisterIds.registrar,
      idlRegistrarFactory
    )
  ) { }

  /**
   * Get the Common Info from registrar canister.
   * @returns {Promise<Info>}
   */
  async getICNSInfo(): Promise<Info> {
    const response = await this.registrarAnonymousActor.getInfo();
    this.info = response;
    return response;
  }

  /**
   * Verify domain available or not.
   * @returns {Promise<boolean | string>}
   */
  async domainIsAvailable(domain: string): Promise<boolean | string> {
    const response = await this.registrarAnonymousActor.available(domain);
    return 'ok' in response ? response['ok'] : response['err']
  }

  /**
   * Verify domain is onAuction or not.
   * @returns {Promise<[] | [AuctionExt]>}
   */
  async getAuciton(domain: string): Promise<[] | [AuctionExt]> {
    const response = await this.registrarAnonymousActor.getAuction(domain);
    return response
  }


  /**
   * Get one token balance for a given principal id (wicp as default).
   * @param {principalId} params represents user identity
   * @returns {Promise<Token.Balance>}
   */
  async getUserBalance(principalId: string): Promise<Token.Balance> {
    const principal = Principal.fromText(principalId);
    const tokenActor = await createTokenActor({}); // default anonymous actor
    const tokenDecimals = await tokenActor.decimals();

    const plugBalance = toBigNumber(
      await tokenActor.balanceOf(principal)
    ).applyDecimals(tokenDecimals);

    const icnsBalance = toBigNumber(
      await this.registrarAnonymousActor.getBalance(principal)
    ).applyDecimals(tokenDecimals);

    return {
      plug: plugBalance,
      icns: icnsBalance,
      total: plugBalance.plus(icnsBalance),
    };
  }

  /**
   * Get the principal of the agent.
   * It is going to throw if the principal is anonymous.
   * @param {Actor} params represents an actor
   * @returns {Promise<Principal>}
   */
  async getAgentPrincipal(actor: Actor): Promise<Principal> {
    const agent = Actor.agentOf(actor);
    if (!agent) throw new Error('Agent principal not found');

    const principal = await agent.getPrincipal();

    if (principal.toString() === Principal.anonymous().toString())
      throw new Error('Agent principal is anonymous');

    return agent.getPrincipal();
  }

  /**
   * Approve transfers from token to registrar canister.
   * This function uses the actor agent identity.
   * This function needs to be called before operate with registrar canister.
   * @param {ICNSCanisterController.ApproveParams} params
   * @returns {Promise<void>}
   */
  async approve({
    tokenId,
    amount,
  }: ICNSCanisterController.ApproveParams): Promise<void> {

    const tokenActor = await createTokenActor({
      canisterId: tokenId,
      actorAdapter: new ActorAdapter(window.ic?.plug),
    });

    const principal = await this.getAgentPrincipal(tokenActor);
    const tokenDecimals = await tokenActor.decimals();

    const registrarPrincipal = Principal.fromText(Constants.canisterIds.registrar);
    const parsedAmount = toBigNumber(amount).removeDecimals(tokenDecimals);

    const parsedAllowance = toBigNumber(
      await tokenActor.allowance(principal, registrarPrincipal)
    );

    if (parsedAllowance.gte(parsedAmount)) return; // if enough allowance, return

    const result = await tokenActor.approve(
      registrarPrincipal,
      parsedAmount.toBigInt()
    );

    if ('Err' in result) throw new Error(JSON.stringify(result.Err));
  }

  /**
   * Place Bid into canister.
   * This function uses the actor agent identity.
   * @param {ICNSCanisterController.PlaceBidParams} params
   * @returns {Promise<void>}
   */
  async placeBid({
    domain,
    amount,
  }: ICNSCanisterController.PlaceBidParams): Promise<void> {

    const registrarActor = await createRegistrarActor({
      actorAdapter: new ActorAdapter(window.ic?.plug)
    });
    await this.getAgentPrincipal(registrarActor);

    await this.approve({ tokenId: Constants.canisterIds.WICP, amount});

    const parsedAmount = toBigNumber(amount).removeDecimals(Constants.wicpDecimal);

    const result = await registrarActor.placeBid(
      domain,
      parsedAmount.toBigInt()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
 * Renew into canister.
 * This function uses the actor agent identity.
 * @param {ICNSCanisterController.RenewParams} params
 * @returns {Promise<void>}
 */
  async renew({
    domain,
    duration,
  }: ICNSCanisterController.RenewParams): Promise<void> {

    const registrarActor = await createRegistrarActor({
      actorAdapter: new ActorAdapter(window.ic?.plug)
    });
    await this.getAgentPrincipal(registrarActor);
    await this.getICNSInfo()

    let renewPrice = this.info?.renewPrices

    if (domain.length === 0 || !renewPrice)
      throw new Error('Wrong value')

    let unitPrice = domain.length >= renewPrice.length ? renewPrice[renewPrice.length - 1] : renewPrice[domain.length - 1]
    let amount = (Number(duration) * unitPrice).toString()

    await this.approve({ tokenId: Constants.canisterIds.WICP, amount});

    const result = await registrarActor.renew(
      domain,
      toBigNumber(duration).toBigInt()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
 * Claim into canister.
 * This function uses the actor agent identity.
 * @param {String} params
 * @returns {Promise<void>}
 */
  async claim(domain: string): Promise<void> {

    const registrarActor = await createRegistrarActor({
      actorAdapter: new ActorAdapter(window.ic?.plug)
    });
    await this.getAgentPrincipal(registrarActor);

    const result = await registrarActor.claimName(domain);

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * Withdraw wicp tokens from registrar canister.
   * This function uses the actor agent identity.
   * @returns {Promise<void>}
   */
  async withdraw(): Promise<void> {
    const registrarActor = await createRegistrarActor({
      actorAdapter: new ActorAdapter(window.ic?.plug)
    });
    await this.getAgentPrincipal(registrarActor);

    const result = await registrarActor.withdraw();

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }
}

/**
 * Type definition for the SwapCanisterController.
 */
export namespace ICNSCanisterController {
  /**
   * Type definition for params of the approve function.
   * @param {Types.Amount} amount
   * @param {string} tokenId
   */
  export type ApproveParams = {
    amount: Types.Amount;
    tokenId?: string;
  };

  /**
   * Type definition for params of the placebid function.
   * @param {Types.Amount} amount
   * @param {string} domian
   */
  export type PlaceBidParams = {
    amount: Types.Amount;
    domain: string;
  };

  /**
   * Type definition for params of the renew function.
   * @param {Types.Number} duration
   * @param {string} domain
   */
  export type RenewParams = {
    duration: Types.Number;
    domain: string;
  };

}
