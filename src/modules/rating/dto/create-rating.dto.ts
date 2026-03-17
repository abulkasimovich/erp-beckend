import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class CreateRatingDto {
    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    teacherId: number;

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    lessonId: number;

    @ApiProperty()
    @IsNumber()
    score: number;
}