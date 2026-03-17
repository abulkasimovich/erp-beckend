import { PrismaService } from "src/database/prisma.service";
import { Role } from "@prisma/client";
import { UpdateHomeworkResponseDto } from "./dto/update-homework-response.dto";
export declare class homeworkResponseService {
    private prisma;
    constructor(prisma: PrismaService);
    createResponse(payload: any, currentUser: {
        id: number;
        role: Role;
    }, filename?: string): Promise<{
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
    getOneHomeworkResponse(id: number): Promise<{
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
    updateHomeworkResponse(id: number, payload: UpdateHomeworkResponseDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomeworkResponse(id: number): Promise<void>;
}
