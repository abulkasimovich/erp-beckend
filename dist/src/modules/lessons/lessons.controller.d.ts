import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonsController {
    private readonly lessonServise;
    constructor(lessonServise: LessonsService);
    getLessonById(groupId: number): Promise<{
        success: boolean;
        data: {
            id: number;
            title: string;
        }[];
    }>;
    createStudentGroup(payload: CreateLessonDto, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneHomeworkResponse(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            updated_at: Date;
            userId: number | null;
            title: string;
            teacherId: number | null;
            groupId: number;
        };
    }>;
    updateLesson(id: string, payload: UpdateLessonDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteLesson(id: string): Promise<void>;
}
