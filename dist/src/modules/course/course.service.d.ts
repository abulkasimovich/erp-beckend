import { PrismaService } from 'src/database/prisma.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { UpdateCourseDto } from './dto/update.course.dto';
export declare class CourseService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCourse(): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.Status;
            created_at: Date;
            updated_at: Date;
            name: string;
            description: string | null;
            durationMonth: number;
            durationLesson: number;
            level: import("@prisma/client").$Enums.CourseLevel | null;
            price: import("@prisma/client-runtime-utils").Decimal;
        }[];
    }>;
    createCourse(payload: CreateCourseDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneCourse(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.Status;
            created_at: Date;
            updated_at: Date;
            name: string;
            description: string | null;
            durationMonth: number;
            durationLesson: number;
            level: import("@prisma/client").$Enums.CourseLevel | null;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    }>;
    updateCourse(id: number, payload: UpdateCourseDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteCourse(id: number): Promise<void>;
}
