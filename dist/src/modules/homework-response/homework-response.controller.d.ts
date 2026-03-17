import { homeworkResponseService } from "./homework-response.service";
import { CreateHomeworkResponseDto } from "./dto/create-homework-response.dto";
import { UpdateHomeworkResponseDto } from "./dto/update-homework-response.dto";
export declare class HomeworkResponseController {
    private service;
    constructor(service: homeworkResponseService);
    createResponse(payload: CreateHomeworkResponseDto, req: Request, file?: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
    }>;
    getResponses(homeworkId: number): Promise<{
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
            status: import("@prisma/client").$Enums.HomeworkStatusStudent;
            created_at: Date;
            updated_at: Date;
            title: string;
            studentId: number;
            file: string | null;
            homeworkId: number;
        })[];
    }>;
    getOneHomeworkResponse(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.HomeworkStatusStudent;
            created_at: Date;
            updated_at: Date;
            title: string;
            studentId: number;
            file: string | null;
            homeworkId: number;
        };
    }>;
    updateHomeworkResponse(id: string, payload: UpdateHomeworkResponseDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomeworkResponse(id: string): Promise<void>;
}
