import { PartialType } from '@nestjs/swagger'
import { CreateHomeworkResponseDto } from './create-homework-response.dto';


export class UpdateHomeworkResponseDto extends PartialType(CreateHomeworkResponseDto) {}
