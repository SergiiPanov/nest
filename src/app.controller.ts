import { Controller, Get, Post, Scope, Req, Body, Inject, CACHE_MANAGER } from '@nestjs/common';
import { AppService, CatsService } from './app.service';
import {RedisContext,Ctx} from "@nestjs/microservices"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
}

@Controller({
  path : "cats"
})
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async getHelloCats( @Ctx() context: RedisContext,@Req() payload: any): Promise<any> {
    const res = this.catsService.getHelloCats()
    console.log('res =>', res)
    return res
  }
}


