import { RatingService } from "./rating.service";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
export declare class RatingController {
    private service;
    constructor(service: RatingService);
    createRating(payload: CreateRatingDto): Promise<{
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
    getOneHomeworkResponse(id: string): Promise<{
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
    updateLesson(id: string, payload: UpdateRatingDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteRating(id: string): Promise<void>;
}
