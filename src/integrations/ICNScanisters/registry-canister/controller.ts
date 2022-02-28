import {
  Constants,
  idlRegistryFactory,
  RecordExt,
} from '@/declarations';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  RegistryActor,
} from '../..';

import { addIcpSuffix, VerifyDomainName } from '@/utils/format'

/**
 * ICNS Registry Controller.
 * This class is responsible for handling all the requests related to the ICNS registry canister.
 */
export class ICNSregistryController {

  /**
   * Create an instance that communicates with icns registry canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {RegistryActor} registryActor actor or an anonymous will be used
   */
  constructor(
    private registryActor: RegistryActor = ActorAdapter.createAnonymousActor<RegistryActor>(
      Constants.canisterIds.registry,
      idlRegistryFactory
    )
  ) { }

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
    * Get record in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<RecordExt | null>}
    */
  async getDomainRecord(domain: string): Promise<RecordExt | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.getRecord(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain resolver in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<Principal | null>}
    */
  async getDomainResolver(domain: string): Promise<Principal | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.resolver(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain owner in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<Principal | null>}
    */
  async getDomainOwner(domain: string): Promise<Principal | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.owner(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain controller in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<Principal  | null>}
    */
  async getDomainController(domain: string): Promise<Principal | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.controller(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain ttl in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<bigint | null>}
    */
  async getDomainTTL(domain: string): Promise<bigint | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.ttl(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain expiry in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<bigint | null>}
    */
  async getDomainExpiry(domain: string): Promise<bigint | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.expiry(name)
    return response[0] ? response[0] : null
  }

  /**
    * Get domain record exist in registry canister.
    * @param {domain} represents user domain, such as: test.icp
    * @returns {Promise<boolean>}
    */
  async IsRecordExists(domain: string): Promise<boolean> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const response = await this.registryActor.recordExists(name)
    return response
  }

  /**
   * set record according to domain.
   * @param {ICNSRegistryController.RecordParams} params recoed type
   * @returns {Promise<void>}
   */
  async setRecord(params: ICNSRegistryController.RecordParams): Promise<void> {
    if (!VerifyDomainName(params.node))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(params.node) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setRecord(name, params.owner, params.registry, params.ttl, params.expiry)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set subnoderecord according to domain.
   * @param {ICNSRegistryController.RecordParams} params recoed type
   * @returns {Promise<void>}
   */
  async setSubnodeRecord(params: ICNSRegistryController.RecordParams): Promise<void> {
    if (!VerifyDomainName(params.node))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(params.node) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setSubnodeRecord(name, params.sublabel!, params.owner, params.registry, params.ttl, params.expiry)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set domain owner according to domain.
   * @param {domain} represents user domain, such as: test.icp
   * @param {owner} represents new owner
   * @returns {Promise<void>}
   */
  async setDomainOwner(domain: string, owner: Principal): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setOwner(name, owner)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set domain controller according to domain.
   * @param {domain} represents user domain, such as: test.icp
   * @param {controller} represents new controller
   * @returns {Promise<void>}
   */
  async setDomainController(domain: string, controller: Principal): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setController(name, controller)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
    * set domain resolver according to domain.
    * @param {domain} represents user domain, such as: test.icp
    * @param {resolver} represents new resolver
    * @returns {Promise<void>}
    */
  async setDomainResolver(domain: string, resolver: Principal): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setResolver(name, resolver)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set domain ttl according to domain.
   * @param {domain} represents user domain, such as: test.icp
   * @param {ttl} represents new ttl
   * @returns {Promise<void>}
   */
  async setDomainTTL(domain: string, ttl: bigint): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setTTL(name, ttl)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
    * set sub domain owner according to domain.
    * @param {domain} represents user domain, such as: test.icp
    * @param {sublabel} represents sublabel, such as: hello.test.icp
    * @param {owner} represents new owner
    * @returns {Promise<void>}
    */
  async setSubDomainOwner(domain: string, sublabel: string, owner: Principal): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setSubnodeOwner(name, sublabel, owner)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set sub domain expiry according to domain.
   * @param {domain} represents user domain, such as: test.icp
   * @param {sublabel} represents sublabel, such as: hello.test.icp
   * @param {newExpiry} represents new expiry
   * @returns {Promise<void>}
   */
  async setSubDomainExpiry(domain: string, sublabel: string, newExpiry: bigint): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(this.registryActor) // get pulg wallet identity
    const result = await this.registryActor.setSubnodeExpiry(name, sublabel, newExpiry)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  // =========================================================================================== //
  //                               DIP721 interface
  // =========================================================================================== //

  /**
   * get approve for all.
   * @param {owner} represents user identity
   * @param {operator} represents who can transfer owner's domains
   * @returns {Promise<boolean>}
   */
  async isApproveForAll(owner: Principal, operator: Principal): Promise<boolean> {
    return await this.registryActor.isApprovedForAll(owner, operator)
  }

  /**
   * get approve for domain.
   * @param {domain} represents domain
   * @param {who} represents who gets approved
   * @returns {Promise<boolean>}
   */
  async isApproved(domain: string, who: Principal): Promise<boolean> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    return await this.registryActor.isApproved(name, who)
  }

  /**
  * get approv for domain.
  * @param {domain} represents domain
  * @returns {Promise<Principal | null>}
  */
  async getApproved(domain: string): Promise<Principal | null> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix
    const result = await this.registryActor.getApproved(name)
    return result[0] ? result[0] : null
  }

  /**
  * get user's domain.
  * @param {owner} represents user identity
  * @returns {Promise<bigint>}
  */
  async getDomainBalanceOf(owner: Principal): Promise<bigint> {
    return await this.registryActor.balanceOf(owner)
  }


  /**
   * Approve transfers domian from registrar canister.
   * This function uses the actor agent identity.
   * This function needs to be called before operate with registry canister.
   * @param {domain} represents domain
   * @param {operator} represents approve who can operate owner's domain
   * @returns {Promise<void>}
   */
  async approve(
    domain: string,
    operator: Principal,
  ): Promise<void> {

    await this.getAgentPrincipal(this.registryActor);

    const result = await this.registryActor.approve(
      domain,
      operator
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * Approve transfers domain from registrar canister.
   * This function uses the actor agent identity.
   * This function needs to be called before operate with registry canister.
   * @param {approved} represents whether approve operator transfer all domians
   * @param {operator} represents approve who can operate owner's domain
   * @returns {Promise<void>}
   */
  async setApprovalForAll(
    approved: boolean,
    operator: Principal,
  ): Promise<void> {

    await this.getAgentPrincipal(this.registryActor);

    const result = await this.registryActor.setApprovalForAll(
      operator,
      approved,
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * transfers domain from owner to others.
   * This function uses the actor agent identity.
   * This function needs to be called before operate with registry canister.
   * @param {domain} represents domain
   * @param {to} represents who will get the domain
   * @returns {Promise<void>}
   */
  async transfer(
    domain: string,
    to: Principal,
  ): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix

    const principal = await this.getAgentPrincipal(this.registryActor);
    if (principal !== await this.getDomainOwner(name))
      throw new Error('not domain owner')

    const result = await this.registryActor.transfer(
      to,
      name,
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * allow operator transfers domain from owner to others.
   * This function uses the actor agent identity.
   * This function needs to be called before operate with registry canister.
   * @param {domain} represents domain
   * @param {from} represents domain owner
   * @param {to} represents who will get the domain
   * @returns {Promise<void>}
   */
  async transferFrom(
    domain: string,
    from: Principal,
    to: Principal,
  ): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Wrong domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix

    const principal = await this.getAgentPrincipal(this.registryActor);

    if (principal !== await this.getApproved(name))
      throw new Error('not allowed !!!')

    const result = await this.registryActor.transferFrom(
      from,
      to,
      name,
    );

    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

}

/**
 * Type definition for the ICNSRegistryController.
 */
export namespace ICNSRegistryController {

  /**
   * Type definition for params of the record function.
   * @param {RecordParams} represents record infos
   */
  export type RecordParams = {
    node: string,
    owner: Principal,
    registry: Principal,
    ttl: bigint,
    expiry: bigint,
    sublabel?: string,
  }

}