import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/common/decorator/role';
import { CreateRoomDto } from './dto/create.room.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
@ApiBearerAuth()
export class RoomsController {
  constructor(private readonly roomService: RoomsService) { }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get('all')
  getAllRoom() {
    return this.roomService.getAllRoom();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Post()
  createRoom(@Body() payload: CreateRoomDto) {
    return this.roomService.createRoom(payload);
  }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneRoom(@Param('id') id: string) {
    return this.roomService.getOneRoom(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateRoom(@Param('id') id: string, @Body() payload: UpdateRoomDto) {
    return this.roomService.updateRoom(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteRoom(@Param('id') id: string) {
    return this.roomService.deleteRoom(+id);
  }
}
