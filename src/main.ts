// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
//
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//
//
//   await app.listen(4000);
// }
// bootstrap();
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
//
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const client = require("redis").createClient({
//     host: 'localhost',
//     port: 6379
//   });
//
//
//   await client.on("connect",()=>{
//     console.log("connected to redis");
//   });
//   await app.listen(4000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const service = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await service.listen(()=>{
    console.log("Service Start");});
  const app = await NestFactory.create(AppModule);
  await app.listen(4000, () => console.log('ok'));
}
bootstrap();


