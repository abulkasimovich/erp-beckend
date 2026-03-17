import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { UpdateCourseDto } from './dto/update.course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
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
    getOneCourse(id: string): Promise<{
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
    updateCourse(id: string, payload: UpdateCourseDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteCourse(id: string): Promise<void>;
}
