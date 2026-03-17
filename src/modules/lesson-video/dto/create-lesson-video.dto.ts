import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class CreateLessonVideoDto {

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    lessonId: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    groupId: number
}
