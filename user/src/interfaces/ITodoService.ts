import {ITodoById} from "./ITodoById";
import { Metadata, ServerUnaryCall } from "grpc";
import {ITodo} from "./ITodo";
import {Observable} from "rxjs";

export interface ITodoService {
    findOne: (data: ITodoById, metadata?: Metadata, call?: ServerUnaryCall<any>) => Observable<any>
    deleteOne: (data: ITodoById, metadata?: Metadata, call?: ServerUnaryCall<any>) => Observable<any>

    create: (data: ITodo, metadata?: Metadata, call?: ServerUnaryCall<any>) => Observable<any>
    edit: (data: ITodo, metadata?: Metadata, call?: ServerUnaryCall<any>) => Observable<any>
}