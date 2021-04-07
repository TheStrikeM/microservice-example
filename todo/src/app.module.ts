import {Logger, Module, OnApplicationBootstrap, OnApplicationShutdown} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {RpcModule} from "./rpc/rpc.module";


const mainLogger = new Logger('AppModule')

@Module({
    imports: [RpcModule],
})
export class AppModule implements OnApplicationBootstrap, OnApplicationShutdown {
    onApplicationBootstrap(): void {
        mainLogger.log(`Server has success started!`)
    }

    onApplicationShutdown(signal?: string): void {
        mainLogger.log(`Server has success stopped!`)
    }
}