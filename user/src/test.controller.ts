import {Controller, Get, Logger, Req} from "@nestjs/common";
import {Request} from "express";

@Controller('cook')
export class TestController {
    private readonly logger: Logger = new Logger('TestController')

    @Get()
    getCookies(@Req() request: Request) {
        console.log(request.cookies)
    }
}