import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {RpcController} from "./rpc.controller";
import {RpcService} from "./rpc.service";

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [RpcController],
    controllers: [RpcService],
})
export class RpcModule {}