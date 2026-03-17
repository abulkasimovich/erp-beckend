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
exports.HomeworkResultService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const client_1 = require("@prisma/client");
let HomeworkResultService = class HomeworkResultService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async giveScore(payload, currentUser) {
        const response = await this.prisma.homeworkResponse.findUnique({
            where: { id: Number(payload.responseId) }
        });
        if (!response) {
            throw new common_1.NotFoundException("Homework response topilmadi");
        }
        await this.prisma.homeworkResult.create({
            data: {
                homeworkId: response.homeworkId,
                studentId: response.studentId,
                title: payload.title,
                score: payload.score,
                status: "PENDING",
                teacherId: currentUser.role === client_1.Role.TEACHER ? currentUser.id : null,
                userId: currentUser.role !== client_1.Role.TEACHER ? currentUser.id : null
            }
        });
        return {
            success: true,
            message: "Homework baholandi"
        };
    }
    async getResults(homeworkId) {
        const results = await this.prisma.homeworkResult.findMany({
            where: { homeworkId },
            include: {
                student: true
            }
        });
        return {
            success: true,
            data: results
        };
    }
    async getOneHomeworkResult(id) {
        const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
        if (!homeworkResult) {
            throw new common_1.NotFoundException('homework result is Not found');
        }
        return {
            success: true,
            data: homeworkResult,
        };
    }
    async updateHomeworkResult(id, payload) {
        const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
        if (!homeworkResult) {
            throw new common_1.NotFoundException('homework result is Not found');
        }
        await this.prisma.homeworkResult.update({ where: { id }, data: payload });
        return {
            success: true,
            message: 'homework result updated successfully',
        };
    }
    async deleteHomeworkResult(id) {
        const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
        if (!homeworkResult) {
            throw new common_1.NotFoundException('homework result is Not found');
        }
        await this.prisma.homeworkResult.delete({ where: { id } });
    }
};
exports.HomeworkResultService = HomeworkResultService;
exports.HomeworkResultService = HomeworkResultService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HomeworkResultService);
//# sourceMappingURL=homework-result.service.js.map