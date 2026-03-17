import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStudentGroupDto } from './dto/create.studentgroup.dto';
import { Status } from '@prisma/client';
import { UpdateStudentGroupDto } from './dto/update.student-group.dto';

@Injectable()
export class StudentGroupService {
  constructor(private prisma: PrismaService) { }

  async createStudentGroup(
    payload: CreateStudentGroupDto,
    currentUser: { id: number },
  ) {
    const groupStudentsCount = await this.prisma.studentGroup.count({
      where: {
        groupId: payload.groupId,
      },
    });

    const existGroup = await this.prisma.group.findUnique({
      where: { id: payload.groupId, status: Status.ACTIVE },
      select: {
        room: {
          select: {
            capacity: true,
          },
        },
      },
    });

    if (!existGroup) {
      throw new NotFoundException('Group not found with this id');
    }

    const existStudent = await this.prisma.student.findUnique({
      where: { id: payload.studentId, status: Status.ACTIVE },
    });

    if (!existStudent) {
      throw new NotFoundException('Student not found with this id');
    }

    if (groupStudentsCount >= existGroup!.room.capacity) {
      throw new BadRequestException("Group limit to'lgan");
    }

    await this.prisma.studentGroup.create({
      data: {
        ...payload,
        userId: currentUser.id,
      },
    });

    return {
      success: true,
      message: 'Student added group',
    };
  }

  async getOneStudentGroup(id: number) {
    const studentGroup = await this.prisma.studentGroup.findUnique({ where: { id } });
    if (!studentGroup) {
      throw new NotFoundException('StudentGroup is Not found');
    }

    return {
      success: true,
      data: studentGroup,
    };
  }

  async updateStudentGroup(id: number, payload: UpdateStudentGroupDto) {
    const studentGroup = await this.prisma.studentGroup.findUnique({ where: { id } });
    if (!studentGroup) {
      throw new NotFoundException('StudentGroup is Not found');
    }
    await this.prisma.studentGroup.update({ where: { id }, data: payload });

    return {
      success: true,
      message: 'StudentGroup updated successfully',
    };
  }

  async deleteStudentGroup(id: number) {
    const studentGroup = await this.prisma.studentGroup.findUnique({ where: { id } });
    if (!studentGroup) {
      throw new NotFoundException('StudentGroup is Not found');
    }
    await this.prisma.studentGroup.delete({ where: { id } });
  }




}
