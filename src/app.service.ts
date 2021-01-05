import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import {ClientProxy, ClientProxyFactory, Transport} from "@nestjs/microservices"
import { promisify } from 'util'
//const client = require("redis").createClient();


//
// @Injectable()
// export class AppService {
//   private client: ClientProxy;
//
//   constructor() {
//     this.client = ClientProxyFactory.create({
//       transport: Transport.REDIS,
//       options: {
//         url: 'redis://localhost:6379',
//       }
//     });
//   }




@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // const name = await client.get("foo") || 'matthieu';
    return `Hello!`;
  }
}

@Injectable()
export class CatsService {
 private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379/',
      }
    });
  }
  //
  // async onModuleInit() {
  //   await this.client.connect()
  // }

  public getHelloCats(): any {
   // console.log(this.onModuleInit());
    // @ts-ignore
   // const qwe = promisify(this.client.set)

    // return this.client.send<string, string>('HELLO_SERVICE', 'Michael').toPromise();
  }
}






// import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
// import { Cache } from 'cache-manager';
// const redis = require("redis");
// const client = redis.createClient();
//
//
// @Injectable()
// export class AppService {
//   constructor(
//     @Inject(CACHE_MANAGER) private readonly cache: Cache,
//   ) {}
//   async getHello(): Promise<string> {
//     const name = await this.cache.get("foo") || 'matthieu';
//     return `Hello!`;
//   }
// }
//
// @Injectable()
// export class CatsService {
//   constructor(
//     @Inject(CACHE_MANAGER) private readonly cache: Cache,
//   ) {}
//   async getHelloCats(res: string): Promise<string> {
//     const name = await this.cache.set("bob", res, {ttl: 0}) || 'matthieu';
//     const aaa = await this.cache.get("bob");
//
//    // console.log(await this.cache);
//        // const aaa = await this.cache.set("aaa","bbb", { ttl: 100000 });
//     console.log(aaa);
//     return `Hello ${aaa} !`;
//   }
// }