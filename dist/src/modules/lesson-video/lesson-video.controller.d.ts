import { LessonVideoService } from './lesson-video.service';
import { CreateLessonVideoDto } from './dto/create-lesson-video.dto';
import { UpdateLessonVideoDto } from './dto/update-lesson-video.dto';
export declare class LessonVideoController {
    private readonly lessonVideoService;
    constructor(lessonVideoService: LessonVideoService);
    getLessonVideoByGroupId(groupId: number, req: Request): Promise<{
        success: boolean;
        data: {
            lesson: {
                title: string;
            };
            id: number;
            file: string;
        }[];
    }>;
    createHomework(payload: CreateLessonVideoDto, req: Request, file: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneLessonVideo(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            userId: number | null;
            teacherId: number | null;
            lessonId: number;
            groupId: number;
            file: string;
        };
    }>;
    updateLessonVideo(id: string, payload: UpdateLessonVideoDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomeworkResponse(id: string): Promise<void>;
}
