import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Role } from "@prisma/client";
import { UpdateHomeworkResponseDto } from "./dto/update-homework-response.dto";

@Injectable()
export class homeworkResponseService {
  constructor(private prisma: PrismaService) {}

  async createResponse(payload: any, currentUser: { id: number; role: Role }, filename?: string) {

    const existHomework = await this.prisma.homework.findUnique({
      where: { id: Number(payload.homeworkId) }
    });

    if (!existHomework) {
      throw new NotFoundException("Homework not found");
    }

    const student = await this.prisma.student.findUnique({
      where: {
        id: payload.studentId
      }
    });

    if (!student) {
  throw new NotFoundException("Student topilmadi");
}

    await this.prisma.homeworkResponse.create({
      data: {
        homeworkId: payload.homeworkId,
        studentId: student.id,
        title: payload.title,
        file: filename || null,
        status: "COMPLETED"
      }
    });

    return {
      success: true,
      message: "Homework response yuborildi"
    };
  }

  async getResponses(homeworkId: number) {
    const responses = await this.prisma.homeworkResponse.findMany({
      where: { homeworkId },
      include: {
        student: true
      }
    });

    return {
      success: true,
      data: responses
    };
  }

  async getOneHomeworkResponse(id: number) {
      const homeworkResponse = await this.prisma.homeworkResponse.findUnique({ where: { id } });
      if (!homeworkResponse) {
        throw new NotFoundException('homework response response is Not found');
      }
  
      return {
        success: true,
        data: homeworkResponse,
      };
    }
  
    async updateHomeworkResponse(id: number, payload: UpdateHomeworkResponseDto) {
      const homeworkResponse = await this.prisma.homeworkResponse.findUnique({ where: { id } });
      if (!homeworkResponse) {
        throw new NotFoundException('homework response is Not found');
      }
      await this.prisma.homeworkResponse.update({ where: { id }, data: payload });

      return {
        success: true,
        message: 'homework response updated successfully',
      };
    }

    async deleteHomeworkResponse(id: number) {
      const homeworkResponse = await this.prisma.homeworkResponse.findUnique({ where: { id } });
      if (!homeworkResponse) {
        throw new NotFoundException('homework response is Not found');
      }
      await this.prisma.homeworkResponse.delete({ where: { id } });
        
      }
      
}