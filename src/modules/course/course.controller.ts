import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.course.dto';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/common/decorator/role';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateCourseDto } from './dto/update.course.dto';

@Controller('course')
@ApiBearerAuth()
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get('all')
  getAllCourse() {
    return this.courseService.getAllCourse();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Post()
  createCourse(@Body() payload: CreateCourseDto) {
    return this.courseService.createCourse(payload);
  }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneCourse(@Param('id') id: string) {
    return this.courseService.getOneCourse(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateCourse(@Param('id') id: string, @Body() payload: UpdateCourseDto) {
    return this.courseService.updateCourse(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(+id);
  }
}
