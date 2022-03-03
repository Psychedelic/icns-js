import { Actor } from "@dfinity/agent";
import { createResolverActor, ICNSResolverController, ResolverActor } from "integrations";
import { mockAgent, mockResolverActor } from "../../mock/actor";

jest.mock('@/integrations/actor');
jest.mock('@dfinity/agent');

(createResolverActor as jest.Mock).mockImplementation(async () => 
  mockResolverActor()
);

(Actor.agentOf as jest.Mock).mockImplementation(async () => 
  mockAgent()
);

describe('create resolver', () => {
  let resolverActor: ResolverActor;
  let controller: ICNSResolverController;

  beforeEach(() => {
    resolverActor = mockResolverActor()
    controller = new ICNSResolverController(resolverActor)
  })

  test('test domain get host', async () => {
    const host = controller.getHost('xxxx.icp');
    console.log((await host).toString())
    expect(host).toBeDefined();
  })

})