import {Module} from "@nestjs/common";
import {PugAdapter} from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import {MailerModule} from "@nestjs-modules/mailer";
import {RedisModule} from "nestjs-redis";
import {ScheduleModule} from "@nestjs/schedule";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: `smtps://thestrikem@gmail.com:${process.env.PASS}@smtp.gmail.com`,
            defaults: {
                from:'No reply <thestrikem@gmail.com>',
            },
            template: {
                dir: __dirname + '/templates',
                adapter: new PugAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        RedisModule.register({
            url: 'redis://localhost:10000/1'
        }),
        ScheduleModule.forRoot()
    ],
    providers: []
})
export class AppModule {}