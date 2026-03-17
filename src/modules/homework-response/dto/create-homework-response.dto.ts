import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateHomeworkResponseDto {

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    homeworkId: number;

    @ApiProperty({})
    @IsNumber()
    @Type(() => Number)
    studentId: number;

    @ApiProperty()
    @IsString()
    title: string;
}