import { Body, Controller, Get, Post, Req, Param, ParseIntPipe, UseGuards, Put, Delete } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Roles } from 'src/common/decorator/role';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lessons')
@ApiBearerAuth()
export class LessonsController {
  constructor(private readonly lessonServise: LessonsService) { }


  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @Get(":groupId")
  getLessonById(@Param("groupId", ParseIntPipe) groupId: number) {
    return this.lessonServise.getLessonById(groupId);
  }

  @ApiOperation({
    summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}`,
  })

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN', 'TEACHER')
  @Post()
  createStudentGroup(@Body() payload: CreateLessonDto, @Req() req: Request) {
    return this.lessonServise.createLesson(payload, req['user']);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneHomeworkResponse(@Param('id') id: string) {
    return this.lessonServise.getOneLesson(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateLesson(@Param('id') id: string, @Body() payload: UpdateLessonDto) {
    return this.lessonServise.updateLesson(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteLesson(@Param('id') id: string) {
    return this.lessonServise.deleteLesson(+id);
  }
}
