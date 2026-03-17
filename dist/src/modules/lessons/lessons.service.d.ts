import { CreateLessonDto } from './dto/create-lesson.dto';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonsService {
    private prisma;
    constructor(prisma: PrismaService);
    getLessonById(groupId: number): Promise<{
        success: boolean;
        data: {
            id: number;
            title: string;
        }[];
    }>;
    createLesson(payload: CreateLessonDto, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneLesson(id: number): Promise<{
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
    updateLesson(id: number, payload: UpdateLessonDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteLesson(id: number): Promise<void>;
}
