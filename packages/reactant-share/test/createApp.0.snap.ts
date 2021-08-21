 import { createSharedApp, injectable, state, action, proxify } from 'reactant-share';
 import { mockPairPorts, createTransport } from 'data-transport';

 @injectable()
 class Counter {
   name = 'counter';

   @state
   count = 0;

   @action
   _increase() {
     this.count += 1;
   }

   @proxify
   async increase() {
     this._increase();
   }
 }

 (async () => {
   const ports = mockPairPorts();

   const server = await createSharedApp({
     modules: [],
     main: Counter,
     render: () => {},
     share: {
       name: 'counter',
       type: 'Base',
       port: 'server',
       transports: {
         server: createTransport('Base', ports[0]),
       },
     },
   });

   const client = await createSharedApp({
     modules: [],
     main: Counter,
     render: () => {},
     share: {
       name: 'counter',
       type: 'Base',
       port: 'client',
       transports: {
         client: createTransport('Base', ports[1]),
       },
     },
   });

   await client.instance.increase();

   expect(client.instance.count).toBe(1);
   expect(server.instance.count).toBe(1);

   global.done();
 })();