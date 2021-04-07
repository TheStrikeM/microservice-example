import {Injectable} from "@nestjs/common";
import {ITodo} from "./interfaces/ITodo";
import {Metadata} from "grpc";
import {ITodoById} from "./interfaces/ITodoById";

interface IGRPCReq<T extends ITodoById | ITodo> {
    data: T
    metadata: Metadata
}


@Injectable()
export class RpcService {
    private _defaultState: ITodo[] = [
        { id: 1, title: 'Печеньки', desc: 'Покушать печеньки с чаем', completed: false, createdAt: new Date() },
        { id: 2, title: 'Конфеты', desc: 'Покушать конфеты с чаем', completed: false, createdAt: new Date() },
        { id: 3, title: 'Банан', desc: 'Покушать банан', completed: false, createdAt: new Date() }
    ]

    findOne(req: IGRPCReq<ITodoById>): ITodo {
        const { data, metadata } = req
        return this._defaultState.find(({ id }) => id === data.id)
    }

    deleteOne(req: IGRPCReq<ITodoById>): ITodo {
        const { data, metadata } = req,
        el = this.findOne(req)

        this._defaultState.filter(({id}) => id !== el.id)
        return el
    }

    create(req: IGRPCReq<ITodo>): ITodo {
        this._defaultState.push(req.data)
        return req.data
    }

    edit(req: IGRPCReq<ITodo>): ITodo {
        return req.data
    }
}