import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MailerService } from 'src/common/email/email.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, MailerService],
})
export class StudentsModule {}
