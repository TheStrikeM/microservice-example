import {Module, OnApplicationBootstrap} from '@nestjs/common';
import {RedisModule, RedisService} from "nestjs-redis";
import {RpcClientController} from "./rpc-client.controller";
import {RpcClientService} from "./rpc-client.service";
import {TestController} from "./test.controller";

@Module({
  imports: [
      RedisModule.register({
        url: 'redis://localhost:10000/1'
      })
  ],
  controllers: [RpcClientController, TestController],
  providers: [RpcClientService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly redisService: RedisService) {}

  onApplicationBootstrap(): void {
    let i: number = 0

    setInterval(() => {
      i++
      const client = this.redisService.getClient()
      client.rpush("queue:mail.send", JSON.stringify({
        email: "dinkodanil@gmail.com",
        code: `Code-${i}`
      }))
    }, 3000)
  }
}
