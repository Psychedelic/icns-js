import { ICNSConstants, DefaultInfoExt, idlResolverFactory } from "@/declarations";
import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ActorAdapter, createRegistryActor, ResolverActor } from "../..";
import { formatsByName } from '@ensdomains/address-encoder';

import { addIcpSuffix, verifyAccountId, VerifyDomainName } from "@/utils/format";

/**
 * ICNS Resolver Controller.
 * This class is responsible for handling all the requests related to the ICNS resolver canister.
 */
export class ICNSResolverController {
  DefaultInfo: DefaultInfoExt | null = null; //record user common info in resolver canister

  /**
   * Create an instance that communicates with icns resolver canister.
   * Some of the functions uses the actor agent identity to identify the user that is interacting.
   * @param {ResolverActor} resolverActor actor or an anonymous will be used
   */
  constructor(
    private resolverActor: ResolverActor = ActorAdapter.createAnonymousActor<ResolverActor>(
      ICNSConstants.canisterIds.resolver,
      idlResolverFactory
    )
  ) { }

  /**
   * Get the principal of the agent.
   * It is going to throw if the principal is anonymous.
   * @returns {Promise<Principal>}
   */
  async getAgentPrincipal(): Promise<Principal> {
    const agent = Actor.agentOf(this.resolverActor);
    if (!agent) throw new Error('Agent principal not found');

    const principal = await agent.getPrincipal();

    if (principal.toString() === Principal.anonymous().toString())
      throw new Error("Agent principal is anonymous");

    return agent.getPrincipal();
  }

  /**
   * Get user default info in resolver canister.
   * @param {string} domain  represents user domain, such as: test.icp
   * @returns {Promise<void>} return nothing
   */
  async getUserDefaultInfo(domain: string): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    const response = await this.resolverActor.getUserDefaultInfo(name);
    this.DefaultInfo = response[0] ? response[0] : null;
  }

  /**
   * Get principal id by name.
   * @param {string} domain  represents user domain, such as: test.icp
   * @returns {Promise<Principal>}
   */
  async getPrincipalId(domain: string): Promise<Principal> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    if (this.DefaultInfo === null) await this.getUserDefaultInfo(name);
    if (this.DefaultInfo?.pid[0]) {
      return this.DefaultInfo.pid[0];
    } else {
      const registry = await createRegistryActor({}); // default anonymous
      const record = await registry.owner(name);
      if (!record[0]) throw new Error("This name is not registered");
      return record[0];
    }
  }

  /**
   * Get setted coin address.
   * @param {string} domain represents domain name
   * @param {string} coinType represents coin type
   * @returns {Promise<string>} return coin address
   */
  async getAddr(domain: string, coinType: string): Promise<string> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    if (!coinType || coinType === '') throw new Error('coin type can not be empty')
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    const result = await this.resolverActor.getAddr(name, coinType)
    if (!result[0]) throw new Error('coin address not set')
    try {
      if (coinType === 'icp.principal') {
        Principal.fromText(result[0])
      } else if (coinType === 'icp.account') {
        verifyAccountId(result[0])
      } else {
        formatsByName[coinType.toUpperCase()].decoder(result[0])
      }
      return result[0]
    } catch {
      throw new Error('Not supported coin type ')
    }
  }

  /**
   * Get test info.
   * @param {string} domain represents user domain, such as: test.icp
   * @param {string} key represents user info, such as: twitter
   * @returns {Promise<string>} return user info
   */
  async getText(domain: string, key: string): Promise<Principal | string> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    const result = await this.resolverActor.getText(name, key)
    if (!result[0]) throw new Error(' not set')
    return result[0]
  }

  /**
   * Get canister info.
   * @param {string} domain represents user domain, such as: test.icp
   * @param {string} key represents canister, such as: main
   * @returns {Promise<Principal>} return canister id
   */
  async getCanister(domain: string, key: string): Promise<Principal> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    const result = await this.resolverActor.getCanister(name, key)
    if (!result[0]) throw new Error(' not set')
    return result[0]
  }

  /**
   * Get host record.
   * @param {string} domain represents user domain, such as: test.icp
   * @returns {Promise<Principal|string>} return host of a domain name
   */
  async getHost(domain: string): Promise<Principal | string> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    if (this.DefaultInfo === null) await this.getUserDefaultInfo(name);
    if (this.DefaultInfo?.host[0]) {
      const host = this.DefaultInfo?.host[0];
      return "url" in host ? host["url"] : host["canister"];
    } else {
      throw new Error("There is no host info");
    }
  }

  /**
   * set default info according to domain.
   * @param {string} domain  represents user domain, such as: test.icp
   * @param {ICNSResolverController.DefaultInfo} type represents which type info user wants to set
   * @param {string} value represents the value
   * @param {string} extensionType represents the extra type user wants to set
   * @returns {Promise<void>}
   */
  async setDefaultInfo(
    domain: string,
    type: ICNSResolverController.DefaultInfo,
    value: string,
    extensionType?: string
  ): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    const Types = ICNSResolverController.DefaultInfo;
    await this.getAgentPrincipal()
    switch (type) {
      case Types.btc: {
        const result = await this.resolverActor.setAddr(name, "btc", [value]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.eth: {
        const result = await this.resolverActor.setAddr(name, "eth", [value]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.icp: {
        const result = await this.resolverActor.setAddr(name, "icp.account", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.pid: {
        const result = await this.resolverActor.setAddr(name, "icp.principal", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.addrExtensions: {
        if (!extensionType) throw new Error("Please provide extension type");
        const result = await this.resolverActor.setAddr(name, extensionType, [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.twitter: {
        const result = await this.resolverActor.setText(name, "twitter", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.github: {
        const result = await this.resolverActor.setText(name, "github", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.discord: {
        const result = await this.resolverActor.setText(name, "discord", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.telegram: {
        const result = await this.resolverActor.setText(name, "telegram", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.email: {
        const result = await this.resolverActor.setText(name, "email", [value]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.url: {
        const result = await this.resolverActor.setText(name, "url", [value]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.avatar: {
        const result = await this.resolverActor.setText(name, "avatar", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.description: {
        const result = await this.resolverActor.setText(name, "description", [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.textExtensions: {
        if (!extensionType) throw new Error("Please provide extension type");
        const result = await this.resolverActor.setText(name, extensionType, [
          value,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.mainCanister: {
        const val = Principal.fromText(value);
        const result = await this.resolverActor.setCanister(name, "main", [
          val,
        ]);
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      case Types.canisterExtensions: {
        if (!extensionType) throw new Error("Please provide extension type");
        const val = Principal.fromText(value);
        const result = await this.resolverActor.setCanister(
          name,
          extensionType,
          [val]
        );
        if ("err" in result) throw new Error(JSON.stringify(result.err));
        break;
      }
      default:
        throw new Error("Wrong type");
    }
  }

  /**
   * set coin addresss.
   * @param {string} domain  represents user domain, such as: test.icp
   * @param {string} coinType  represents user domain, such as: test.icp
   * @param {string} value represents coin address
   * @returns {Promise<void>}
   */
  async setAddr(
    domain: string,
    coinType: string,
    value: string
  ): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    if(coinType.length === 0 || coinType.length > 50) throw new Error('coin name lenght should be between 1 and 50')
    if(value.length === 0 || value.length > 250) throw new Error('value lenght should be between 1 and 250')
    
    try {
      formatsByName[coinType.toUpperCase()].decoder(value);
    } catch {
      throw new Error('Wrong coin address format'); 
    }
    await this.getAgentPrincipal(); // user identity
    const result = await this.resolverActor.setAddr(name, coinType, [value]);
    if ("err" in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set user info.
   * @param {string} domain  represents user domain, such as: test.icp
   * @param {string} coinType  represents user domain, such as: test.icp
   * @param {string} value represents info
   * @returns {Promise<void>}
   */
   async setText(
    domain: string,
    key: string,
    value: string
  ): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    if(key.length === 0 || key.length > 50) throw new Error('key lenght should be between 1 and 50')
    if(value.length === 0 || value.length > 250) throw new Error('value lenght should be between 1 and 250')
    
    await this.getAgentPrincipal(); // user identity
    const result = await this.resolverActor.setText(name, key, [value]);
    if ("err" in result) throw new Error(JSON.stringify(result.err));
  }

  /**
   * set user info.
   * @param {string} domain  represents user domain, such as: test.icp
   * @param {string} coinType  represents user domain, such as: test.icp
   * @param {string} value represents canister id
   * @returns {Promise<void>}
   */
   async setCanister(
    domain: string,
    key: string,
    value: string
  ): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    if(key.length === 0 || key.length > 50) throw new Error('key lenght should be between 1 and 50')
    try {
      Principal.fromText(value);
    } catch {
      throw new Error('Wrong canister id format'); 
    }
    await this.getAgentPrincipal(); // user identity
    const result = await this.resolverActor.setCanister(name, key, [Principal.fromText(value)]);
    if ("err" in result) throw new Error(JSON.stringify(result.err));
  }


  /**
   * set host record.
   * @param {string} domain  represents user domain, such as: test.icp
   * @param {ICNSResolverController.HostParams} params host type
   * @returns {Promise<void>}
   */
  async setHost(
    domain: string,
    params?: ICNSResolverController.HostParams
  ): Promise<void> {
    if (!VerifyDomainName(domain)) throw new Error("name format error");
    const name = addIcpSuffix(domain); // guarantee the domain name with .icp suffix
    await this.getAgentPrincipal(); // user identity
    if (!params) {
      throw new Error("Wrong host info");
    } else if ("url" in params) {
      const result = await this.resolverActor.setHost(name, [params]);
      if ("err" in result) throw new Error(JSON.stringify(result.err));
    } else if ("canister" in params) {
      const result = await this.resolverActor.setHost(name, [params]);
      if ("err" in result) throw new Error(JSON.stringify(result.err));
    } else {
      throw new Error("Wrong host format");
    }
  }
}

/**
 * Type definition for the ICNSResolverController.
 */
export namespace ICNSResolverController {
  /**
   * Type definition for params of the setDefaultInfo function.
   * @param {DefaultInfo}
   */
  export enum DefaultInfo {
    btc,
    eth,
    icp,
    pid,
    url,
    twitter,
    canisterExtensions,
    description,
    email,
    textExtensions,
    addrExtensions,
    discord,
    mainCanister,
    telegram,
    github,
    avatar,
  }

  /**
   * Type definition for params of the setHost function.
   * @param {string} url
   * @param {Principal} canister
   */
  export type HostParams = { url: string } | { canister: Principal };
}
