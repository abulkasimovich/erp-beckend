import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Role } from "@prisma/client";
import { UpdateHomeworkResultDto } from "./dto/update-homework-result.dto";

@Injectable()
export class HomeworkResultService {
  constructor(private prisma: PrismaService) { }

  async giveScore(payload: any, currentUser: { id: number; role: Role }) {

    const response = await this.prisma.homeworkResponse.findUnique({
      where: { id: Number(payload.responseId) }
    });

    if (!response) {
      throw new NotFoundException("Homework response topilmadi");
    }

    await this.prisma.homeworkResult.create({
      data: {
        homeworkId: response.homeworkId,
        studentId: response.studentId,
        title: payload.title,
        score: payload.score,
        status: "PENDING",
        teacherId: currentUser.role === Role.TEACHER ? currentUser.id : null,
        userId: currentUser.role !== Role.TEACHER ? currentUser.id : null
      }
    });

    return {
      success: true,
      message: "Homework baholandi"
    };
  }

  async getResults(homeworkId: number) {

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

  async getOneHomeworkResult(id: number) {
    const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
    if (!homeworkResult) {
      throw new NotFoundException('homework result is Not found');
    }

    return {
      success: true,
      data: homeworkResult,
    };
  }

  async updateHomeworkResult(id: number, payload: UpdateHomeworkResultDto) {
    const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
    if (!homeworkResult) {
      throw new NotFoundException('homework result is Not found');
    }
    await this.prisma.homeworkResult.update({ where: { id }, data: payload });

    return {
      success: true,
      message: 'homework result updated successfully',
    };
  }

  async deleteHomeworkResult(id: number) {
    const homeworkResult = await this.prisma.homeworkResult.findUnique({ where: { id } });
    if (!homeworkResult) {
      throw new NotFoundException('homework result is Not found');
    }
    await this.prisma.homeworkResult.delete({ where: { id } });

  }
}