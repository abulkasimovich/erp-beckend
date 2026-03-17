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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../database/prisma.service");
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAttendanceByLesson(lessonId) {
        const existLesson = await this.prisma.lesson.findUnique({
            where: {
                id: lessonId
            }
        });
        if (!existLesson) {
            throw new common_1.NotFoundException("Lesson not found with this id");
        }
        const lessonStudents = await this.prisma.attendance.findMany({
            where: {
                lessonId: lessonId
            },
            select: {
                isPresent: true,
                student: {
                    select: {
                        id: true,
                        fullName: true,
                        photo: true
                    }
                }
            }
        });
        return {
            success: true,
            data: lessonStudents
        };
    }
    async createAttendance(payload, currentUser) {
        const existLesson = await this.prisma.lesson.findUnique({
            where: {
                id: payload.lessonId
            },
            select: {
                id: true,
                group: {
                    select: {
                        teacherId: true
                    }
                }
            }
        });
        if (!existLesson) {
            throw new common_1.NotFoundException("Lesson not found with this id");
        }
        if (currentUser.role == client_1.Role.TEACHER && existLesson.group.teacherId != currentUser.id) {
            throw new common_1.NotFoundException("Bu sening darsing emas");
        }
        const existStudent = await this.prisma.student.findUnique({
            where: {
                id: payload.studentId,
                status: "ACTIVE"
            }
        });
        if (!existStudent) {
            throw new common_1.NotFoundException("Student not found with this id");
        }
        await this.prisma.attendance.create({
            data: {
                ...payload,
                teacherId: currentUser.role == client_1.Role.TEACHER ? currentUser.id : null,
                userId: currentUser.role != client_1.Role.TEACHER ? currentUser.id : null
            }
        });
        return {
            success: true,
            message: "Attendance created successfully"
        };
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map