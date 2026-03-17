import { CreateLessonVideoDto } from './dto/create-lesson-video.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Role } from '@prisma/client';
import { UpdateLessonVideoDto } from './dto/update-lesson-video.dto';
export declare class LessonVideoService {
    private prisma;
    constructor(prisma: PrismaService);
    getLessonVideoByGroupId(groupId: number, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
        success: boolean;
        data: {
            lesson: {
                title: string;
            };
            id: number;
            file: string;
        }[];
    }>;
    createLessonVideos(payload: CreateLessonVideoDto, currentUser: {
        id: number;
        role: Role;
    }, filename: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneLessonVideo(id: number): Promise<{
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
    updateLessonVideo(id: number, payload: UpdateLessonVideoDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteLessonVideo(id: number): Promise<void>;
}
