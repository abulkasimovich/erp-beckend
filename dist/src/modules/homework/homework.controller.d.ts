import { CreateHomeworkDto } from './dto/create-homework.dto';
import { HomeworksService } from './homework.service';
import { UpdateHomeworkDto } from './dto/updatehomework.dto';
export declare class HomeworkController {
    private readonly homeworkService;
    constructor(homeworkService: HomeworksService);
    getAllHomeworksByGroup(groupId: number, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            title: string;
        }[];
    }>;
    createHomework(payload: CreateHomeworkDto, req: Request, file?: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneHomework(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            updated_at: Date;
            userId: number | null;
            title: string;
            teacherId: number | null;
            lessonId: number;
            groupId: number;
            file: string | null;
            durationTime: number;
        };
    }>;
    updateHomework(id: string, payload: UpdateHomeworkDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomework(id: string): Promise<void>;
}
