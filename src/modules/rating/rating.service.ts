import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { UpdateRatingDto } from "./dto/update-rating.dto";

@Injectable()
export class RatingService {

  constructor(private prisma: PrismaService) { }

  async createRating(payload: any) {

    const teacher = await this.prisma.teacher.findUnique({
      where: { id: Number(payload.teacherId) }
    });

    if (!teacher) {
      throw new NotFoundException("Teacher topilmadi");
    }

    await this.prisma.rating.create({
      data: {
        teacherId: payload.teacherId,
        lessonId: payload.lessonId,
        score: payload.score
      }
    });

    return {
      success: true,
      message: "Rating qo'shildi"
    };
  }

  async getRatings(teacherId: number) {

    const ratings = await this.prisma.rating.findMany({
      where: { teacherId },
      include: {
        lesson: true
      }
    });

    return {
      success: true,
      data: ratings
    };
  }

  async getOneRating(id: number) {
    const rating = await this.prisma.rating.findUnique({ where: { id } });
    if (!rating) {
      throw new NotFoundException('rating is Not found');
    }

    return {
      success: true,
      data: rating,
    };
  }

  async updateRating(id: number, payload: UpdateRatingDto) {
    const rating = await this.prisma.rating.findUnique({ where: { id } });
    if (!rating) {
      throw new NotFoundException('rating is Not found');
    }
    await this.prisma.rating.update({ where: { id }, data: payload });

    return {
      success: true,
      message: 'rating updated successfully',
    };
  }

  async deleteRating(id: number) {
    const rating = await this.prisma.rating.findUnique({ where: { id } });
    if (!rating) {
      throw new NotFoundException('rating is Not found');
    }
    await this.prisma.rating.delete({ where: { id } });

  }
}