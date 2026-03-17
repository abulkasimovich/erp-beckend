import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { UpdateCourseDto } from './dto/update.course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) { }

  async getAllCourse() {
    const courses = await this.prisma.course.findMany({
      where: { status: 'ACTIVE' },
    });

    return {
      success: true,
      data: courses,
    };
  }

  async createCourse(payload: CreateCourseDto) {
    const existCourse = await this.prisma.course.findUnique({
      where: { name: payload.name },
    });
    if (existCourse) {
      throw new ConflictException('Course name alread exist');
    }

    await this.prisma.course.create({
      data: payload,
    });

    return {
      success: true,
      message: 'Course created',
    };
  }

  async getOneCourse(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) {
      throw new NotFoundException('course is Not found');
    }

    return {
      success: true,
      data: course,
    };
  }

  async updateCourse(id: number, payload: UpdateCourseDto) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) {
      throw new NotFoundException('course is Not found');
    }
    await this.prisma.course.update({ where: { id }, data: payload });

    return {
      success: true,
      message: 'course updated successfully',
    };
  }

  async deleteCourse(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) {
      throw new NotFoundException('course is Not found');
    }

    // Bog'liq guruhlarni topish
    const groups = await this.prisma.group.findMany({
      where: { courseId: id },
      select: { id: true },
    });
    const groupIds = groups.map(g => g.id);

    // Cascade o'chirish
    if (groupIds.length > 0) {
      await this.prisma.studentGroup.deleteMany({ where: { groupId: { in: groupIds } } });
      await this.prisma.lesson.deleteMany({ where: { groupId: { in: groupIds } } });
      await this.prisma.group.deleteMany({ where: { courseId: id } });
    }

    await this.prisma.course.delete({ where: { id } });
  }
}
