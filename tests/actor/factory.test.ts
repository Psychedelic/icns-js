import { createRegistrarActor, 
  createTokenActor,
  createRegistryActor,
  createResolverActor,
 } from '@/integrations';

describe('createRegistrarActor', () => {
  test('should create an actor', async () => {
    const actor = await createRegistrarActor();
    expect(actor).toBeDefined();
  });
});

describe('createRegistryActor', () => {
  test('should create an actor', async () => {
    const actor = await createRegistryActor();
    expect(actor).toBeDefined();
  });
});

describe('createResolverActor', () => {
  test('should create an resolver actor', async () => {
    const actor = await createResolverActor();
    expect(actor).toBeDefined();
  });
});

describe('createTokenActor', () => {
  test('should create a token actor', async () => {
    const actor = await createTokenActor({
      canisterId: 'aanaa-xaaaa-aaaah-aaeiq-cai',
    });
    expect(actor).toBeDefined();
  });
});
