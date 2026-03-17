import { ApiProperty } from "@nestjs/swagger";
import {IsBoolean, IsInt, IsNotEmpty} from "class-validator"


export class CreateAttendanceDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    lessonId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    studentId: number;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isPresent: boolean;
    
}
