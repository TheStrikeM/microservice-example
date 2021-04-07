import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {RpcController} from "./rpc.controller";
import {RpcService} from "./rpc.service";

@Module({
    providers: [RpcService],
    controllers: [RpcController],
})
export class RpcModule {}