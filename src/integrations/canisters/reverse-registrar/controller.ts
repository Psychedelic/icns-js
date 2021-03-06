import {
  ICNSConstants,
} from '@/declarations';
import { idlReverseRegistrarFactory } from '@/declarations/did/reverse_registrar.did'
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import {
  ActorAdapter,
  ReverseActor,
} from '../..';

import { addIcpSuffix, VerifyDomainName } from '@/utils/format'


/**
 * ICNS Reverse Controller.
 * This class is responsible for handling all the requests related to the ICNS reverse registrar canister.
 */
export class ICNSReverseController {

  /**
   * Create an instance that communicates with icns reverse registrar canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {ReverseActor} reverseActor actor or an anonymous will be used
   */
  constructor(
    private reverseActor: ReverseActor = ActorAdapter.createAnonymousActor<ReverseActor>(
      ICNSConstants.canisterIds.reverse_registrar,
      idlReverseRegistrarFactory
    )
  ) { }

  /**
   * Get the principal of the agent.
   * It is going to throw if the principal is anonymous.
   * @internal
   * @returns {Promise<Principal>} Return Principal of the agent
   */
   private async getAgentPrincipal(): Promise<Principal> {
    const agent = Actor.agentOf(this.reverseActor);
    if (!agent) throw new Error('Agent principal not found');

    const principal = await agent.getPrincipal();

    if (principal.toString() === Principal.anonymous().toString())
      throw new Error('Agent principal is anonymous');

    return agent.getPrincipal();
  }

  /**
   * set reverse name according to domain.
   * @param {string} domain Represents user domain, such as: 'test.icp'
   * @returns {Promise<void>} domain => user principal
   */
  async setReverseName(domain: string): Promise<void> {
    if (!VerifyDomainName(domain))
      throw new Error('Incorrect domain name')
    const name = addIcpSuffix(domain) // guarantee the domain name with .icp suffix

    await this.getAgentPrincipal() // get pulg wallet identity this.reverseActor

    const result = await this.reverseActor.setName(name)
    if ('err' in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * get user's domain.
   * @param {Principal} owner Represents user identity
   * @returns {Promise<string>} Represents  user principal => domain
   */
  async getReverseName(owner: Principal): Promise<string> {
    const result =  await this.reverseActor.getName(owner)
    return result
  }
}
