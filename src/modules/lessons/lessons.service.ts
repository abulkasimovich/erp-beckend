import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Role, Status } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateLessonVideoDto } from '../lesson-video/dto/update-lesson-video.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';


@Injectable()
export class LessonsService {
    constructor(private prisma: PrismaService) { }

    async getLessonById(groupId: number) {
        const existGroup = await this.prisma.group.findUnique({
            where: { id: groupId, status: Status.ACTIVE }
        })

        if (!existGroup) {
            throw new NotFoundException("Group not found with this id")
        }

        const lessons = await this.prisma.lesson.findMany({
            where: {
                groupId
            },
            select: {
                id: true,
                title: true,
            }
        })
        return {
            success: true,
            data: lessons
        }
    }

    async createLesson(payload: CreateLessonDto, currentUser: { id: number, role: Role }) {
        const existGroup = await this.prisma.group.findUnique({
            where: { id: payload.groupId, status: Status.ACTIVE }
        })

        if (!existGroup) {
            throw new NotFoundException("Group not found with this id")
        }

        await this.prisma.lesson.create({
            data: {
                ...payload,
                teacherId: currentUser.role == Role.TEACHER ? currentUser.id : null,
                userId: currentUser.role != Role.TEACHER ? currentUser.id : null
            }
        })
        return {
            success: true,
            message: "Lesson created successfully"
        }
    }

    async getOneLesson(id: number) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new NotFoundException('lesson is Not found');
        }

        return {
            success: true,
            data: lesson,
        };
    }

    async updateLesson(id: number, payload: UpdateLessonDto) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new NotFoundException('lesson is Not found');
        }
        await this.prisma.lesson.update({ where: { id }, data: payload });

        return {
            success: true,
            message: 'lesson updated successfully',
        };
    }

    async deleteLesson(id: number) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson) {
            throw new NotFoundException('lesson is Not found');
        }
        await this.prisma.lesson.delete({ where: { id } });

    }
}