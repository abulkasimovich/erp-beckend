import { Module } from '@nestjs/common';
import { homeworkResponseService } from './homework-response.service';
import { HomeworkResponseController } from './homework-response.controller';

@Module({
  controllers: [HomeworkResponseController],
  providers: [homeworkResponseService],
})
export class HomeworkResponseModule {}
