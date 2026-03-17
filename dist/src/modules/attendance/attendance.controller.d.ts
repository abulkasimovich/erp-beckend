import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAttendanceByLesson(lessonId: number): Promise<{
        success: boolean;
        data: {
            student: {
                fullName: string;
                id: number;
                photo: string | null;
            };
            isPresent: boolean;
        }[];
    }>;
    createAttendance(payload: CreateAttendanceDto, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
}
