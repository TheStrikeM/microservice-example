import {Injectable, Logger} from "@nestjs/common";
import {RedisService} from "nestjs-redis";
import {Interval} from "@nestjs/schedule";
import {MailerService} from "@nestjs-modules/mailer";
import {SendDto} from "./dto/send-dto";

@Injectable()
export class AppService {
    private readonly logger: Logger = new Logger('AppService')

    constructor(
        private readonly redisService: RedisService,
        private readonly mailerService: MailerService
    ) {}

    @Interval(1000)
    public async manageItem(): Promise<void> {
        try {
            const client = this.redisService.getClient()

            const res: string = await client.lpop('queue:mail.send')
            const parsedToJson: SendDto = JSON.parse(res)
            if (!parsedToJson) return null

            this._sendMail(parsedToJson)
        } catch (e) {
            this.logger.error(e.message)
        }
    }

    protected _sendMail({ email, code }: SendDto): void {
        const result = `Code: ${code}, To Email: ${email}, `
        this.mailerService.sendMail({
            to: email,
            from: 'thestrikem@gmail.com',
            subject: 'Registration code',
            text: `Copy & enter this registration code in site UI inputs and start using this service!`,
            html: '<b>Code</b>'
        })
            .then(() => this.logger.log(result + 'Status: Success'))
            .catch(() => this.logger.log(result + 'Status: Error'))
    }
}