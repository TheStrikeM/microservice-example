import {ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger} from "@nestjs/common";
import {Request, Response} from "express";

@Catch(HttpException)
export class ExampleExceptionFilter implements ExceptionFilter {
    private readonly logger: Logger = new Logger('ExampleException')
    
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            res: Response = ctx.getResponse(),
            req: Request = ctx.getRequest(),
            status = exception.getStatus()

        this.logger.error('Произошла выдуманная ошибка')
        res
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: req.url
            })
    }
}