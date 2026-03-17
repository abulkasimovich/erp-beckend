import { Module } from '@nestjs/common';
import { HomeworksService } from './homework.service';
import { HomeworkController } from './homework.controller';

@Module({
  controllers: [HomeworkController],
  providers: [HomeworksService],
})
export class HomeworkModule {}
