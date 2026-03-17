import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role-guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/common/decorator/role';
import { CreateGroupDto } from './dto/create.group.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UpdateCourseDto } from '../course/dto/update.course.dto';
import { UpdateGroupDto } from './dto/update.group.dto';

@Controller('groups')
@ApiBearerAuth()
export class GroupsController {
  constructor(private readonly groupService: GroupsService) { }


  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @Get("students/:groupId")
  getAllStudentGroupById(
    @Param("groupId", ParseIntPipe) groupId: number
  ) {
    return this.groupService.getAllStudentGroupById(groupId)
  }

  @ApiOperation({
    summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}`,
  })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPERADMIN', 'TEACHER')
  @Get('lesson/:groupId')
  getGroupLessons(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupService.getGroupLessons(groupId, req['user']);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get('all')
  getAllGroup() {
    return this.groupService.getAllGroup();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Post()
  createGroup(@Body() payload: CreateGroupDto, @Req() req: Request) {
    return this.groupService.createGroup(payload, req['user']);
  }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneGroup(@Param('id') id: string) {
    return this.groupService.getOneGroup(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateGroup(@Param('id') id: string, @Body() payload: UpdateGroupDto) {
    return this.groupService.updateGroup(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteGroup(@Param('id') id: string) {
    return this.groupService.deleteGroup(+id);
  }
}
