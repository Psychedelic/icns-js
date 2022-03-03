import { ICNSConstants, DefaultInfoExt, idlResolverFactory } from "@/declarations";
import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ActorAdapter, createRegistryActor, ResolverActor } from "../..";

import { addIcpSuffix, VerifyDomainName } from "@/utils/format";

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
  ) {}

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

  // TODO: 
  // 1. add functions: getAddr, getCanister, getText, setAddr, setCanister, setAddr
  // 2. check record validity: coin address validity, text record length, etc.

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
