import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateHomeworkDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    lessonId: number;

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    groupId: number;

}
