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
exports.LessonVideoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const client_1 = require("@prisma/client");
let LessonVideoService = class LessonVideoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLessonVideoByGroupId(groupId, currentUser) {
        const existGroup = await this.prisma.group.findUnique({
            where: {
                id: groupId,
                status: "ACTIVE"
            }
        });
        if (!existGroup) {
            throw new common_1.NotFoundException("Group not found");
        }
        if (currentUser.role == "TEACHER" && existGroup.teacherId != currentUser.id) {
            throw new common_1.ForbiddenException("Bu sening guruhing emas");
        }
        const lessonVideos = await this.prisma.lessonVideo.findMany({
            where: {
                groupId
            },
            select: {
                id: true,
                file: true,
                lesson: {
                    select: {
                        title: true
                    }
                }
            }
        });
        return {
            success: true,
            data: lessonVideos
        };
    }
    async createLessonVideos(payload, currentUser, filename) {
        const existGroup = await this.prisma.group.findUnique({
            where: {
                id: payload.groupId,
                status: "ACTIVE"
            }
        });
        if (!existGroup) {
            throw new common_1.NotFoundException("Group not found");
        }
        if (currentUser.role == "TEACHER" && existGroup.teacherId != currentUser.id) {
            throw new common_1.ForbiddenException("Bu sening guruhing emas");
        }
        const existLesson = await this.prisma.lesson.findUnique({
            where: {
                id: payload.lessonId
            }
        });
        if (!existLesson) {
            throw new common_1.NotFoundException("Lesson not found with this id");
        }
        if (existLesson.groupId != payload.groupId) {
            throw new common_1.NotFoundException("Bu lesson bu guruhga tegishli emas");
        }
        await this.prisma.lessonVideo.create({
            data: {
                ...payload,
                file: filename,
                teacherId: currentUser.role == client_1.Role.TEACHER ? currentUser.id : null,
                userId: currentUser.role != client_1.Role.TEACHER ? currentUser.id : null
            }
        });
        return {
            success: true,
            message: "lessonvideo created successfully"
        };
    }
    async getOneLessonVideo(id) {
        const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
        if (!lessonVideo) {
            throw new common_1.NotFoundException('lesson video is Not found');
        }
        return {
            success: true,
            data: lessonVideo,
        };
    }
    async updateLessonVideo(id, payload) {
        const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
        if (!lessonVideo) {
            throw new common_1.NotFoundException('lesson video is Not found');
        }
        await this.prisma.lessonVideo.update({ where: { id }, data: payload });
        return {
            success: true,
            message: 'lesson video updated successfully',
        };
    }
    async deleteLessonVideo(id) {
        const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
        if (!lessonVideo) {
            throw new common_1.NotFoundException('lesson video is Not found');
        }
        await this.prisma.lessonVideo.delete({ where: { id } });
    }
};
exports.LessonVideoService = LessonVideoService;
exports.LessonVideoService = LessonVideoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonVideoService);
//# sourceMappingURL=lesson-video.service.js.map