import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { StudentGroupService } from './student-group.service';
import { CreateStudentGroupDto } from './dto/create.studentgroup.dto';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Roles } from 'src/common/decorator/role';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { UpdateStudentGroupDto } from './dto/update.student-group.dto';

@Controller('student-group')
@ApiBearerAuth()
export class StudentGroupController {
  constructor(private readonly studentGroupServise: StudentGroupService) { }

  @ApiOperation({
    summary: `${Role.SUPERADMIN}, ${Role.ADMIN}`,
  })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN')
  @Post()
  createStudentGroup(
    @Body() payload: CreateStudentGroupDto,
    @Req() req: Request,
  ) {
    return this.studentGroupServise.createStudentGroup(payload, req['user']);
  }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneStudentGroup(@Param('id') id: string) {
    return this.studentGroupServise.getOneStudentGroup(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateStudentGroup(@Param('id') id: string, @Body() payload: UpdateStudentGroupDto) {
    return this.studentGroupServise.updateStudentGroup(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteStudentGroup(@Param('id') id: string) {
    return this.studentGroupServise.deleteStudentGroup(+id);
  }
}
