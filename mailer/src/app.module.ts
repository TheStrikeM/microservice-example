import {Module} from "@nestjs/common";
import {PugAdapter} from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import {MailerModule} from "@nestjs-modules/mailer";

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
        })
    ],
    providers: []
})
export class AppModule {}