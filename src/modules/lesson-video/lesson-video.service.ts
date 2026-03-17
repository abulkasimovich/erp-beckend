import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonVideoDto } from './dto/create-lesson-video.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Role } from '@prisma/client';
import { title } from 'process';
import { UpdateLessonVideoDto } from './dto/update-lesson-video.dto';
// import { UpdateLessonVideoDto } from './dto/update-lesson-video.dto';

@Injectable()
export class LessonVideoService {
  constructor(private prisma: PrismaService) { }

  async getLessonVideoByGroupId(groupId: number, currentUser: {id: number, role: Role}){
    const existGroup = await this.prisma.group.findUnique({
      where: {
        id: groupId,
        status: "ACTIVE"
      }
    })

    if(!existGroup) {
      throw new NotFoundException("Group not found")
    }

    if (currentUser.role == "TEACHER" && existGroup.teacherId !=currentUser.id){
      throw new ForbiddenException("Bu sening guruhing emas")
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
    })

    return {
      success: true,
      data: lessonVideos
    }
  }

  async createLessonVideos(payload: CreateLessonVideoDto, currentUser: { id: number, role: Role }, filename: string) {

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
    await this.prisma.lessonVideo.create({
      data: {
        ...payload,
        file: filename,
        teacherId: currentUser.role == Role.TEACHER ? currentUser.id : null,
        userId: currentUser.role != Role.TEACHER ? currentUser.id : null

      }
    })

    return {
      success: true,
      message: "lessonvideo created successfully"
    }
  }

  async getOneLessonVideo(id: number) {
    const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
    if (!lessonVideo) {
      throw new NotFoundException('lesson video is Not found');
    }

        return {
          success: true,
          data: lessonVideo,
        };
      }

      async updateLessonVideo(id: number, payload: UpdateLessonVideoDto) {
        const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
        if (!lessonVideo) {
          throw new NotFoundException('lesson video is Not found');
        }
        await this.prisma.lessonVideo.update({ where: { id }, data: payload });
  
        return {
          success: true,
          message: 'lesson video updated successfully',
        };
      }

      async deleteLessonVideo(id: number) {
        const lessonVideo = await this.prisma.lessonVideo.findUnique({ where: { id } });
        if (!lessonVideo) {
          throw new NotFoundException('lesson video is Not found');
        }
        await this.prisma.lessonVideo.delete({ where: { id } });

      }
}
