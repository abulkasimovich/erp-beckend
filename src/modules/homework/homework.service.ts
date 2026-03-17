import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '@prisma/client';

import { PrismaService } from 'src/database/prisma.service';
import { UpdateCourseDto } from '../course/dto/update.course.dto';
import { UpdateHomeworkDto } from './dto/updatehomework.dto';

@Injectable()
export class HomeworksService {
  constructor(
    private prisma: PrismaService
  ) { }

  async getAllHomeworkByGroup(groupId: number, currentUser: { id: number, role: Role }) {
    const existGroup = await this.prisma.group.findUnique({
      where: {
        id: groupId,
        status: "ACTIVE"
      }
    })

    if (!existGroup) {
      throw new NotFoundException("Group not found")
    }

    if (currentUser.role == "TEACHER" && existGroup.teacherId != currentUser.id) {
      throw new ForbiddenException("Bu sening guruhing emas")
    }
    const homeworks = await this.prisma.homework.findMany({
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
      data: homeworks
    }

  }
  async createHomework(payload: any, currentUser: { id: number, role: string }, filename?: string) {
    const existGroup = await this.prisma.group.findUnique({
      where: {
        id: payload.groupId,
        status: "ACTIVE"
      }
    })

    if (!existGroup) {
      throw new NotFoundException("Group not found")
    }

    if (currentUser.role == "TEACHER" && existGroup.teacherId != currentUser.id) {
      throw new ForbiddenException("Bu sening guruhing emas")
    }

    const existLesson = await this.prisma.lesson.findUnique({
      where: {
        id: payload.lessonId
      }
    })

    if (!existLesson) {
      throw new NotFoundException("Lesson not found with this id")
    }

    if (existLesson.groupId != payload.groupId) {
      throw new NotFoundException("Bu lesson bu guruhga tegishli emas")
    }

    await this.prisma.homework.create({
      data: {
        title: payload.title,
        file: filename || null,
        groupId: payload.groupId,
        lessonId: payload.lessonId,
        teacherId: currentUser.role == Role.TEACHER ? currentUser.id : null,
        userId: currentUser.role != Role.TEACHER ? currentUser.id : null
      }
    })

    return {
      success: true,
      message: "Homework created successfully"
    }
  }


  async getOneHomework(id: number) {
    const homework = await this.prisma.homework.findUnique({ where: { id } });
    if (!homework) {
      throw new NotFoundException('homework is Not found');
    }

    return {
      success: true,
      data: homework,
    };
  }

  async updateHomework(id: number, payload: UpdateHomeworkDto) {
    const homework = await this.prisma.homework.findUnique({ where: { id } });
    if (!homework) {
      throw new NotFoundException('homework is Not found');
    }
    await this.prisma.homework.update({ where: { id }, data: payload });

    return {
      success: true,
      message: 'homework updated successfully',
    };
  }

  async deleteHomework(id: number) {
    const homework = await this.prisma.homework.findUnique({ where: { id } });
    if (!homework) {
      throw new NotFoundException('homework is Not found');
    }
    await this.prisma.homework.delete({ where: { id } });
  }

}
