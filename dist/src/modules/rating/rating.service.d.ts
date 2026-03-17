import { PrismaService } from "src/database/prisma.service";
import { UpdateRatingDto } from "./dto/update-rating.dto";
export declare class RatingService {
    private prisma;
    constructor(prisma: PrismaService);
    createRating(payload: any): Promise<{
        success: boolean;
        message: string;
    }>;
    getRatings(teacherId: number): Promise<{
        success: boolean;
        data: ({
            lesson: {
                id: number;
                created_at: Date;
                updated_at: Date;
                userId: number | null;
                title: string;
                teacherId: number | null;
                groupId: number;
            };
        } & {
            id: number;
            created_at: Date;
            teacherId: number;
            lessonId: number;
            score: number;
        })[];
    }>;
    getOneRating(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            teacherId: number;
            lessonId: number;
            score: number;
        };
    }>;
    updateRating(id: number, payload: UpdateRatingDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteRating(id: number): Promise<void>;
}
