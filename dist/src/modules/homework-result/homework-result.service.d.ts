import { PrismaService } from "src/database/prisma.service";
import { Role } from "@prisma/client";
import { UpdateHomeworkResultDto } from "./dto/update-homework-result.dto";
export declare class HomeworkResultService {
    private prisma;
    constructor(prisma: PrismaService);
    giveScore(payload: any, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
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
    getOneHomeworkResult(id: number): Promise<{
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
    updateHomeworkResult(id: number, payload: UpdateHomeworkResultDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomeworkResult(id: number): Promise<void>;
}
