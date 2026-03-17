import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
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
    createAttendance(payload: CreateAttendanceDto, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
}
