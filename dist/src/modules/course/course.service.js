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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let CourseService = class CourseService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCourse() {
        const courses = await this.prisma.course.findMany({
            where: { status: 'ACTIVE' },
        });
        return {
            success: true,
            data: courses,
        };
    }
    async createCourse(payload) {
        const existCourse = await this.prisma.course.findUnique({
            where: { name: payload.name },
        });
        if (existCourse) {
            throw new common_1.ConflictException('Course name alread exist');
        }
        await this.prisma.course.create({
            data: payload,
        });
        return {
            success: true,
            message: 'Course created',
        };
    }
    async getOneCourse(id) {
        const course = await this.prisma.course.findUnique({ where: { id } });
        if (!course) {
            throw new common_1.NotFoundException('course is Not found');
        }
        return {
            success: true,
            data: course,
        };
    }
    async updateCourse(id, payload) {
        const course = await this.prisma.course.findUnique({ where: { id } });
        if (!course) {
            throw new common_1.NotFoundException('course is Not found');
        }
        await this.prisma.course.update({ where: { id }, data: payload });
        return {
            success: true,
            message: 'course updated successfully',
        };
    }
    async deleteCourse(id) {
        const course = await this.prisma.course.findUnique({ where: { id } });
        if (!course) {
            throw new common_1.NotFoundException('course is Not found');
        }
        const groups = await this.prisma.group.findMany({
            where: { courseId: id },
            select: { id: true },
        });
        const groupIds = groups.map(g => g.id);
        if (groupIds.length > 0) {
            await this.prisma.studentGroup.deleteMany({ where: { groupId: { in: groupIds } } });
            await this.prisma.lesson.deleteMany({ where: { groupId: { in: groupIds } } });
            await this.prisma.group.deleteMany({ where: { courseId: id } });
        }
        await this.prisma.course.delete({ where: { id } });
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CourseService);
//# sourceMappingURL=course.service.js.map