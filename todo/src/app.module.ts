import {Logger, Module, OnApplicationBootstrap, OnApplicationShutdown} from "@nestjs/common";


const mainLogger = new Logger('Main')

@Module({
    imports: [],
    providers: [],
    controllers: [],
    exports: []
})
export class AppModule implements OnApplicationBootstrap, OnApplicationShutdown {
    onApplicationBootstrap(): void {
        mainLogger.log(`Server has success started!`)
    }

    onApplicationShutdown(signal?: string): void {
        mainLogger.log(`Server has success stopped!`)
    }
}