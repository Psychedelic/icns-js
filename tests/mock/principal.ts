import { Principal } from '@dfinity/principal';

export const mockPrincipalId = (): string =>
  'gtivl-de57g-wfda6-jun36-smgwb-6fql7-esrb2-gqm5q-dr2mg-fiakp-jae';

export const mockPrincipal = (): Principal =>
  Principal.fromText(mockPrincipalId());
