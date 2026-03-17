"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let RatingService = class RatingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRating(payload) {
        const teacher = await this.prisma.teacher.findUnique({
            where: { id: Number(payload.teacherId) }
        });
        if (!teacher) {
            throw new common_1.NotFoundException("Teacher topilmadi");
        }
        await this.prisma.rating.create({
            data: {
                teacherId: payload.teacherId,
                lessonId: payload.lessonId,
                score: payload.score
            }
        });
        return {
            success: true,
            message: "Rating qo'shildi"
        };
    }
    async getRatings(teacherId) {
        const ratings = await this.prisma.rating.findMany({
            where: { teacherId },
            include: {
                lesson: true
            }
        });
        return {
            success: true,
            data: ratings
        };
    }
    async getOneRating(id) {
        const rating = await this.prisma.rating.findUnique({ where: { id } });
        if (!rating) {
            throw new common_1.NotFoundException('rating is Not found');
        }
        return {
            success: true,
            data: rating,
        };
    }
    async updateRating(id, payload) {
        const rating = await this.prisma.rating.findUnique({ where: { id } });
        if (!rating) {
            throw new common_1.NotFoundException('rating is Not found');
        }
        await this.prisma.rating.update({ where: { id }, data: payload });
        return {
            success: true,
            message: 'rating updated successfully',
        };
    }
    async deleteRating(id) {
        const rating = await this.prisma.rating.findUnique({ where: { id } });
        if (!rating) {
            throw new common_1.NotFoundException('rating is Not found');
        }
        await this.prisma.rating.delete({ where: { id } });
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RatingService);
//# sourceMappingURL=rating.service.js.map