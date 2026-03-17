import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create.room.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateRatingDto } from '../rating/dto/update-rating.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async getAllRoom() {
    const rooms = await this.prisma.room.findMany({
      where: { status: 'ACTIVE' },
    });

    return {
      success: true,
      data: rooms,
    };
  }

  async createRoom(payload: CreateRoomDto) {
    const existRoom = await this.prisma.room.findUnique({
      where: { name: payload.name },
    });
    if (existRoom) {
      throw new ConflictException('Room name alread exist');
    }

    await this.prisma.room.create({
      data: payload,
    });

    return {
      success: true,
      message: 'Room created',
    };
  }

  async getOneRoom(id: number) {
      const room = await this.prisma.room.findUnique({ where: { id } });
      if (!room) {
        throw new NotFoundException('rating is Not found');
      }
  
      return {
        success: true,
        data: room,
      };
    }
  
    async updateRoom(id: number, payload: UpdateRoomDto) {
      const room = await this.prisma.room.findUnique({ where: { id } });
      if (!room) {
        throw new NotFoundException('room is Not found');
      }
      await this.prisma.room.update({ where: { id }, data: payload });
  
      return {
        success: true,
        message: 'room updated successfully',
      };
    }
  
    async deleteRoom(id: number) {
      const room = await this.prisma.room.findUnique({ where: { id } });
      if (!room) {
        throw new NotFoundException('room is Not found');
      }
      await this.prisma.room.delete({ where: { id } });

    }
}
