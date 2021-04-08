import {Controller, Get, Logger, Param, Req} from "@nestjs/common";
import {Observable} from "rxjs";
import {RpcClientService} from "./rpc-client.service";
import {Request} from "express";

@Controller()
export class RpcClientController {
    private readonly logger: Logger = new Logger('RpcClientController')
    constructor(private readonly rpcClientService: RpcClientService) {}

    @Get('get/:id')
    findOne(@Param('id') id: number): Observable<any> {
        return this.rpcClientService.findOne(id)
    }
}