import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Req, UseGuards, ParseIntPipe, Put } from '@nestjs/common';

import { CreateHomeworkDto } from './dto/create-homework.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { HomeworksService } from './homework.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { title } from 'process';
import { Roles } from 'src/common/decorator/role';
import { Role } from '@prisma/client';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { group } from 'console';
import { UpdateHomeworkDto } from './dto/updatehomework.dto';

@Controller('homework')
@ApiBearerAuth()
export class HomeworkController {
  constructor(private readonly homeworkService: HomeworksService) { }

  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @Get("group/:groupId")
  getAllHomeworksByGroup(
    @Param("groupId", ParseIntPipe) groupId: number,
    @Req() req: Request
  ) {
    return this.homeworkService.getAllHomeworkByGroup(groupId, req['user'])
  }

  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: "string" },
        groupId: { type: "number" },
        lessonId: { type: "number" },
        file: { type: "string", format: "binary", nullable: true }
      }
    }

  })
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/homework',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        const filename = `${file.fieldname}-${uniqueSuffix}${ext}`
        cb(null, filename)
      }
    })
  }))

  @Post()
  createHomework(@Body() payload: CreateHomeworkDto, @Req() req: Request, @UploadedFile() file?: Express.Multer.File) {
    return this.homeworkService.createHomework(payload, req["user"], file?.filename)
  }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneHomework(@Param('id') id: string) {
    return this.homeworkService.getOneHomework(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateHomework(@Param('id') id: string, @Body() payload: UpdateHomeworkDto) {
    return this.homeworkService.updateHomework(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteHomework(@Param('id') id: string) {
    return this.homeworkService.deleteHomework(+id);
  }
}
