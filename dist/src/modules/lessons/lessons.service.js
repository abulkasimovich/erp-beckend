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
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../database/prisma.service");
let LessonsService = class LessonsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLessonById(groupId) {
        const existGroup = await this.prisma.group.findUnique({
            where: { id: groupId, status: client_1.Status.ACTIVE }
        });
        if (!existGroup) {
            throw new common_1.NotFoundException("Group not found with this id");
        }
        const lessons = await this.prisma.lesson.findMany({
            where: {
                groupId
            },
            select: {
                id: true,
                title: true,
            }
        });
        return {
            success: true,
            data: lessons
        };
    }
    async createLesson(payload, currentUser) {
        const existGroup = await this.prisma.group.findUnique({
            where: { id: payload.groupId, status: client_1.Status.ACTIVE }
        });
        if (!existGroup) {
            throw new common_1.NotFoundException("Group not found with this id");
        }
        await this.prisma.lesson.create({
            data: {
                ...payload,
                teacherId: currentUser.role == client_1.Role.TEACHER ? currentUser.id : null,
                userId: currentUser.role != client_1.Role.TEACHER ? currentUser.id : null
            }
        });
        return {
            success: true,
            message: "Lesson created successfully"
        };
    }
    async getOneLesson(id) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new common_1.NotFoundException('lesson is Not found');
        }
        return {
            success: true,
            data: lesson,
        };
    }
    async updateLesson(id, payload) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new common_1.NotFoundException('lesson is Not found');
        }
        await this.prisma.lesson.update({ where: { id }, data: payload });
        return {
            success: true,
            message: 'lesson updated successfully',
        };
    }
    async deleteLesson(id) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new common_1.NotFoundException('lesson is Not found');
        }
        await this.prisma.lesson.delete({ where: { id } });
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map