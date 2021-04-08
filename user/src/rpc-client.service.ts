import {Injectable, Logger, OnModuleInit} from "@nestjs/common";
import {Client, ClientGrpc, Transport} from "@nestjs/microservices";
import { join } from 'path';
import {ITodoService} from "./interfaces/ITodoService";
import {Observable} from "rxjs";
import {Metadata} from "grpc";

@Injectable()
export class RpcClientService implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: 'todo',
            protoPath: join(__dirname, '..', 'proto/todo.proto')
        }
    })
    private client: ClientGrpc

    private todoService: ITodoService
    private readonly logger: Logger = new Logger('RPCClientService')

    onModuleInit() {
        this.todoService = this.client.getService<ITodoService>('TodoService')
    }

    findOne(id: number): Observable<any> {
        const metadata = new Metadata()
        metadata.add('Set-Cookie', 'yummy_cookie=choco')
        return this.todoService.findOne({ id: id }, metadata)
    }
}