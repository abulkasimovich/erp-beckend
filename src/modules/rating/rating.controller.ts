import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Put,
  Delete
} from "@nestjs/common";

import { RatingService } from "./rating.service";

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiTags
} from "@nestjs/swagger";

import { AuthGuard } from "src/common/guards/jwt-auth.guard";
import { RolesGuard } from "src/common/guards/role-guard";
import { Roles } from "src/common/decorator/role";

import { Role } from "@prisma/client";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";

@Controller("rating")
@ApiTags("Rating")
@ApiBearerAuth()
export class RatingController {

  constructor(private service: RatingService) { }

  @ApiOperation({ summary: `${Role.TEACHER}, ${Role.ADMIN}, ${Role.SUPERADMIN}` })

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        teacherId: { type: "number" },
        lessonId: { type: "number" },
        score: { type: "number" }
      }
    }
  })

  @Post()
  createRating(@Body() payload: CreateRatingDto) {
    return this.service.createRating(payload);
  }

  @ApiOperation({ summary: `${Role.SUPERADMIN}, ${Role.ADMIN}, ${Role.TEACHER}` })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.SUPERADMIN, Role.ADMIN)
  @Get("teacher/:teacherId")
  getRatings(
    @Param("teacherId", ParseIntPipe) teacherId: number
  ) {
    return this.service.getRatings(teacherId);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Get(":id")
  getOneHomeworkResponse(@Param('id') id: string) {
    return this.service.getRatings(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Put(":id")
  updateLesson(@Param('id') id: string, @Body() payload: UpdateRatingDto) {
    return this.service.updateRating(+id, payload);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Delete(":id")
  deleteRating(@Param('id') id: string) {
    return this.service.deleteRating(+id);
  }
}