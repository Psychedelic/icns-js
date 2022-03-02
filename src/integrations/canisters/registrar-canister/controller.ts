import {
  AuctionExt,
  Constants,
  idlRegistrarFactory,
  Info,
  Token,
  Types
} from '@/declarations';
import { toBigNumber } from '@/utils';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  createTokenActor,
  RegistrarActor,
} from '../..';
import { removeIcpSuffix, VerifyDomainName } from '@/utils/format'


/**
 * ICNS Registrar Canister Controller.
 * This class is responsible for handling all the requests related to the ICNS registrar canister.
 */
export class ICNSRegistrarController {
  info: Info | null = null

  /**
   * Create an instance that communicates with icns registrar canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {RegistrarActor} registrarActor actor or an anonymous will be used
   */
  constructor(
    private registrarActor: RegistrarActor = ActorAdapter.createAnonymousActor<RegistrarActor>(
      Constants.canisterIds.registrar,
      idlRegistrarFactory
    )
  ) { }


  /**
   * Get the Common Info from registrar canister.
   * @returns {Promise<Info>}
   */
  async getICNSInfo(): Promise<Info> {
    const response = await this.registrarActor.getInfo();
    this.info = response;
    return response;
  }

  /**
   * Verify domain available or not.
   * @returns {Promise<boolean | string>}
   */
  async domainIsAvailable(domain: string): Promise<boolean | string> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = removeIcpSuffix(domain)
    const response = await this.registrarActor.available(name);
    return 'ok' in response ? response['ok'] : response['err']
  }

  /**
   * Verify domain is onAuction or not.
   * @returns {Promise<[] | [AuctionExt]>}
   */
  async getAuciton(domain: string): Promise<[] | [AuctionExt]> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = removeIcpSuffix(domain)
    const response = await this.registrarActor.getAuction(name);
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
      await this.registrarActor.getBalance(principal)
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
   * @returns {Promise<Principal>}
   */
  async getAgentPrincipal(): Promise<Principal> {
    const agent = Actor.agentOf(this.registrarActor);
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
   * @param {ICNSRegistrarController.ApproveParams} params
   * @returns {Promise<void>}
   */
  async approve({
    tokenId,
    amount,
  }: ICNSRegistrarController.ApproveParams): Promise<void> {

    const tokenActor = await createTokenActor({
      canisterId: tokenId,
      actorAdapter: ActorAdapter.adapterOf(this.registrarActor),
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
   * @param {ICNSRegistrarController.PlaceBidParams} params
   * @returns {Promise<void>}
   */
  async placeBid({
    domain,
    amount,
  }: ICNSRegistrarController.PlaceBidParams): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = removeIcpSuffix(domain)

    await this.approve({ tokenId: Constants.canisterIds.WICP, amount });

    const parsedAmount = toBigNumber(amount).removeDecimals(Constants.wicpDecimal);

    const result = await this.registrarActor.placeBid(
      name,
      parsedAmount.toBigInt()
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
 * Renew into canister.
 * This function uses the actor agent identity.
 * @param {ICNSRegistrarController.RenewParams} params
 * @returns {Promise<void>}
 */
  async renew({
    domain,
    duration,
  }: ICNSRegistrarController.RenewParams): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = removeIcpSuffix(domain)

    await this.getICNSInfo()

    let renewPrice = this.info?.renewPrices

    if (name.length === 0 || !renewPrice)
      throw new Error('Wrong value')

    let unitPrice = name.length >= renewPrice.length ? renewPrice[renewPrice.length - 1] : renewPrice[name.length - 1]
    let amount = (Number(duration) * unitPrice).toString()

    await this.approve({ tokenId: Constants.canisterIds.WICP, amount });

    const result = await this.registrarActor.renew(
      name,
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
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = removeIcpSuffix(domain)

    await this.getAgentPrincipal(this.registrarActor);

    const result = await this.registrarActor.claimName(name);

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * Withdraw wicp tokens from registrar canister.
   * This function uses the actor agent identity.
   * @returns {Promise<void>}
   */
  async withdraw(): Promise<void> {

    await this.getAgentPrincipal(this.registrarActor);

    const result = await this.registrarActor.withdraw();

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }
}

/**
 * Type definition for the ICNSRegistrarController.
 */
export namespace ICNSRegistrarController {
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
