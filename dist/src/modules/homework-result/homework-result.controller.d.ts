import { HomeworkResultService } from "./homework-result.service";
import { UpdateHomeworkResultDto } from "./dto/update-homework-result.dto";
export declare class HomeworkResultController {
    private service;
    constructor(service: HomeworkResultService);
    giveScore(payload: any, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
    getResults(homeworkId: number): Promise<{
        success: boolean;
        data: ({
            student: {
                fullName: string;
                email: string;
                password: string;
                id: number;
                photo: string | null;
                status: import("@prisma/client").$Enums.UserStatus;
                created_at: Date;
                updated_at: Date;
                birth_date: Date;
            };
        } & {
            id: number;
            status: import("@prisma/client").$Enums.HomeworkStatus;
            created_at: Date;
            updated_at: Date;
            userId: number | null;
            title: string;
            teacherId: number | null;
            studentId: number;
            score: number;
            file: string | null;
            homeworkId: number;
        })[];
    }>;
    getOneHomeworkResult(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.HomeworkStatus;
            created_at: Date;
            updated_at: Date;
            userId: number | null;
            title: string;
            teacherId: number | null;
            studentId: number;
            score: number;
            file: string | null;
            homeworkId: number;
        };
    }>;
    updateHomeworkResult(id: string, payload: UpdateHomeworkResultDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomeworkResult(id: string): Promise<void>;
}
