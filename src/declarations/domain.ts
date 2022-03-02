import { DefaultInfoExt} from '@/declarations';

export namespace Domain {
  /**
   * Type definition for a user's domains.
   */
  export type List = Array<string>;

  /**
   * It is key-object that maps a list of  domain's `DefaultInfoExt`.
   */
  export type InfoList = {
    [domain: string]: DefaultInfoExt
  };

}