import { Controller, Post, Body, Req, UseGuards, Get, Param, ParseIntPipe, Put, Delete } from "@nestjs/common";
import { HomeworkResultService } from "./homework-result.service";
import { AuthGuard } from "src/common/guards/jwt-auth.guard";
import { RolesGuard } from "src/common/guards/role-guard";
import { Roles } from "src/common/decorator/role";
import { Role } from "@prisma/client";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation } from "@nestjs/swagger";
import { UpdateHomeworkResultDto } from "./dto/update-homework-result.dto";

@Controller("homework-result")
@ApiBearerAuth()
export class HomeworkResultController {

  constructor(private service: HomeworkResultService) { }

  @ApiOperation({ summary: `${Role.TEACHER}, ${Role.ADMIN}, ${Role.SUPERADMIN}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.TEACHER, Role.ADMIN, Role.SUPERADMIN)


  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        responseId: { type: 'number' },
        title: { type: 'string' },
        score: { type: 'number' }
      }
    }
  })

  @Post()
  giveScore(@Body() payload: any, @Req() req: Request) {
    return this.service.giveScore(payload, req["user"]);
  }

  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @Get("homework/:homeworkId")
  getResults(@Param("homeworkId", ParseIntPipe) homeworkId: number) {
    return this.service.getResults(homeworkId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneHomeworkResult(@Param('id') id: string) {
    return this.service.getOneHomeworkResult(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateHomeworkResult(@Param('id') id: string, @Body() payload: UpdateHomeworkResultDto) {
    return this.service.updateHomeworkResult(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteHomeworkResult(@Param('id') id: string) {
    return this.service.deleteHomeworkResult(+id);
  }
}