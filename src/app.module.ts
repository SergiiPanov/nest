import { Module, CacheModule, NestModule, MiddlewareConsumer, CACHE_MANAGER, Inject, OnModuleDestroy} from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService, CatsService } from './app.service';
import { LoggerMiddleware } from './app.middleware';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { Cache } from 'cache-manager'
import * as redisStore from 'cache-manager-ioredis';

//
//
// @Module({
//   imports: [
//     CacheModule.register({
//       store: redisStore,
//       host: 'localhost',
//       port: 6379,
//     }),
//   ],
//   controllers: [AppController, CatsController],
//   providers: [AppService, CatsService],
// })
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes(CatsController);
//   }
// }

// @Module({
//   imports: [
//     CacheModule.registerAsync({
//       useFactory: () => {
//         return {
//           store: redisStore,
//           host: 'localhost',
//           port: 6379,
//         }
//       },
//     }),
//   ],
//   controllers: [AppController, CatsController],
//   providers: [AppService, CatsService],
// })
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes(CatsController);
//   }
// }

@Module({
    imports: [
      // ClientsModule.register([
      //   { name: 'HELLO_SERVICE',
      //      transport: Transport.REDIS,
      //     options: {
      //        url: 'redis://localhost:6379/',
      //     }},
      // ]),
    ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}
