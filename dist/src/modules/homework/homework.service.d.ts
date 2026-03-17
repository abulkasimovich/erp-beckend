import { Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateHomeworkDto } from './dto/updatehomework.dto';
export declare class HomeworksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllHomeworkByGroup(groupId: number, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
        success: boolean;
        data: {
            id: number;
            title: string;
        }[];
    }>;
    createHomework(payload: any, currentUser: {
        id: number;
        role: string;
    }, filename?: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneHomework(id: number): Promise<{
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
    updateHomework(id: number, payload: UpdateHomeworkDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteHomework(id: number): Promise<void>;
}
