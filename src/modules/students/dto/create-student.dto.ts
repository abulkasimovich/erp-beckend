import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsString,
} from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsDateString()
  birth_date: string;
}
