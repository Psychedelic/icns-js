import {
  AuctionExt,
  Constants,
  idlRegistryFactory,
  Info,
  RecordExt,
  Token,
  Types,
} from "@/declarations";
import { toBigNumber } from "@/utils";
import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ActorAdapter, createTokenActor, RegistryActor } from "..";
import { createRegistryActor } from "..";

declare global {
  interface Window {
    ic: any;
  }
}

/**
 * ICNS Canister Controller.
 * This class is responsible for handling all the requests related to the ICNS canister.
 */
export class RegistryCanisterController {
  info: Info | null = null;

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
  ) {}

  /**
   * Get all record info of a single domain name
   * @param {string} domainName
   */
  async getRecord({
    domainName,
  }: RegistryCanisterController.GetRecordParams): Promise<[] | [RecordExt]> {
    const response = await this.registryAnonymousActor.getRecord(domainName);
    return response;
  }

  /**
   * Get all domains' record info of a user
   * @param {string} domainName
   */
  async getUserDomains({
    user,
  }: RegistryCanisterController.GetUserDomainsParams): Promise<
    [] | [Array<RecordExt>]
  > {
    const response = await this.registryAnonymousActor.getUserDomains(user);
    return response;
  }

  /**
   * Get all domains' record info accroding to a controller
   * @param {RegistryCanisterController.GetControllerDomainsParams} params
   * @returns {[]|[Array<RecordExt>]} 
   */
  async getControllerDomains({
    controller,
  }: RegistryCanisterController.GetControllerDomainsParams): Promise<
    []|[Array<RecordExt>]
  > {
    const response = await this.registryAnonymousActor.getControllerDomains(
      controller
    );
    return response;
  }

  /**
   * Approve to a Principal id for all domain name
   * @param {RegistryCanisterController.SetApproveForAllParams} params
   * @returns {Promise<void>}
   */
  async setApproveForAll({
    op,
    approved,
  }: RegistryCanisterController.SetApproveForAllParams) {
    const response = await this.registryAnonymousActor.setApproveForAll(op, approved);
    if ("err" in response) throw new Error(JSON.stringify(response.err));
  }

  /**
   * Approve a domain name to a Principal id
   * @param {RegistryCanisterController.ApproveParams} params
   * @returns {Promise<void>}
   */
  async approve({
    name, 
    op
  }:RegistryCanisterController.ApproveParams): Promise<void>{
    const response = await this.registryAnonymousActor.approve(name, op);
    if ("err" in response) throw new Error(JSON.stringify(response.err));
  }

  /**
   * Approve a domain name to a Principal id
   * @param {RegistryCanisterController.TransferParams} params
   * @returns {Promise<void>}
   */
  async transfer({
    to,
    name
  }:RegistryCanisterController.TransferParams): Promise<void>{
    const response = await this.registryAnonymousActor.transfer(to, name);
    if ("err" in response) throw new Error(JSON.stringify(response.err));
  }

  /**
   * Approve a domain name to a Principal id
   * @param {RegistryCanisterController.TransferFromParams} params
   * @returns {Promise<void>}
   */
  async transfeFrom({
    from,
    to,
    name
  }:RegistryCanisterController.TransferFromParams): Promise<void>{
    const response = await this.registryAnonymousActor.transferFrom(from, to, name);
    if ("err" in response) throw new Error(JSON.stringify(response.err));
  }
}

/**
 * Type definition for the SwapCanisterController.
 */
export namespace RegistryCanisterController {
  /**
   * Type definition for params of the get record function
   * @param {string} domainName
   */
  export type GetRecordParams = {
    domainName: string;
  };

  /**
   * Type definition for params of getUserDomains function
   * @param {Principal} user
   */
  export type GetUserDomainsParams = {
    user: Principal;
  };

  /**
   * Type definition for params of getUserDomains function
   * @param {Principal} controller
   */
  export type GetControllerDomainsParams = {
    controller: Principal;
  };

  /**
   * Type definition for params of setApproveForAll
   * @param {Principal} op principal id that will be approved for all domains
   * @param {boolean} approved
   */
  export type SetApproveForAllParams = {
    op: Principal;
    approved: boolean;
  };

  /**
   * Type definition for params of
   * @param {string} name
   * @param {Principal} op
   */
  export type ApproveParams = {
    name: string;
    op: Principal;
  };

  /**
   * Type definition for params of
   * @param {Principal} to
   * @param {string} name
   */
  export type TransferParams = {
    to: Principal;
    name: string;
  };

  /**
   * Type definition for params of
   * @param {Principal} from
   * @param {Principal} to
   * @param {string} name
   */
  export type TransferFromParams = {
    from: Principal;
    to: Principal;
    name: string;
  };
}
