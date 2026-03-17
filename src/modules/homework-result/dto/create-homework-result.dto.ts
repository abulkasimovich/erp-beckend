import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateHomeworkResultDto {
    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    responseId: number;

    @ApiProperty()
    @IsNumber()
    score: number;

    @ApiProperty()
    @IsString()
    title: string;
}