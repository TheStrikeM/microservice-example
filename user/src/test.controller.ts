import {Controller, ForbiddenException, Get, Logger, Req, Res, UseFilters} from "@nestjs/common";
import {Request, Response} from "express";
import {ExampleExceptionFilter} from "./example.filter";

@Controller('t')
export class TestController {
    private readonly logger: Logger = new Logger('TestController')

    @Get('cook')
    getCookies(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response
    ) {
        res.cookie('huy', 'pizda')
        console.log(req.cookies)
    }

    @Get('err')
    @UseFilters(new ExampleExceptionFilter())
    errorHandler() {
        throw new ForbiddenException()
    }
}