import { Module } from '@nestjs/common';
import { MailerModule as NestMilerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports: [
    NestMilerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'qochqorboyevabbos3@gmail.com',
          pass: 'gmnxjrxjcgrmjxey',
        },
      },
      defaults: {
        from: `<n25_crm> qochqorboyevabbos3@gmail.com`,
      },
      template: {
        dir: join(process.cwd(), 'template'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
})
export class MailerModule {}
