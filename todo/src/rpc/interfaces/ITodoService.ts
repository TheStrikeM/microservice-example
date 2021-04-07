import {ITodoById} from "./ITodoById";
import { Metadata, ServerUnaryCall } from "grpc";
import {ITodo} from "./ITodo";

export interface ITodoService {
    findOne: (data: ITodoById, metadata?: Metadata, call?: ServerUnaryCall<any>) => ITodo
    deleteOne: (data: ITodoById, metadata?: Metadata, call?: ServerUnaryCall<any>) => ITodo

    create: (data: ITodo, metadata?: Metadata, call?: ServerUnaryCall<any>) => ITodo
    edit: (data: ITodo, metadata?: Metadata, call?: ServerUnaryCall<any>) => ITodo
}