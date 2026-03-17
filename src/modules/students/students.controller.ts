import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
} from '@nestjs/swagger';
import { Role, Status } from '@prisma/client';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Roles } from 'src/common/decorator/role';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateUserDto } from '../users/dto/update.user.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
@ApiBearerAuth()
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @ApiOperation({
    summary: `${Role.SUPERADMIN}, ${Role.ADMIN}`,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fullName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        birth_date: { type: 'string', example: '2026-01-02' },
        photo: { type: 'string', format: 'binary', nullable: true },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = Date.now() + '.' + file.originalname;
          cb(null, filename);
        },
      }),
    }),
  )
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Post()
  createStudent(
    @Body() payload: CreateStudentDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.studentsService.createStudent(payload, file?.filename);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get('all')
  getAllStudent() {
    return this.studentsService.getAllStudents();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(':id')
  getOneStudent(@Param('id') id: string) {
    return this.studentsService.getOneStudent(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.SUPERADMIN)
    @Put(":id")
    updateStudent(@Param('id') id: string, @Body() payload: UpdateStudentDto) {
      return this.studentsService.updateStudent(+id, payload);
    }
  
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.SUPERADMIN)
    @Delete(":id")
    deleteStudent(@Param('id') id: string) {}
}
