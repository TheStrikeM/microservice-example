import {Controller, Logger} from "@nestjs/common";
import {RpcService} from "./rpc.service";
import {GrpcMethod} from "@nestjs/microservices";
import {ITodoService} from "./interfaces/ITodoService";
import {ITodoById} from "./interfaces/ITodoById";
import {Metadata} from "grpc";
import {ITodo} from "./interfaces/ITodo";

@Controller()
export class RpcController implements ITodoService {
    constructor(
        private readonly rpcService: RpcService,
    ) {}

    @GrpcMethod('TodoService')
    findOne(data: ITodoById, metadata: Metadata) {
        return this.rpcService.findOne({ data, metadata })
    }

    @GrpcMethod('TodoService')
    deleteOne(data: ITodoById, metadata: Metadata) {
        return this.rpcService.deleteOne({ data, metadata })
    }

    @GrpcMethod('TodoService')
    create(data: ITodo, metadata: Metadata) {
        return this.rpcService.create({ data, metadata })
    }

    @GrpcMethod('TodoService')
    edit(data: ITodo, metadata: Metadata) {
        return this.rpcService.edit({ data, metadata })
    }
}