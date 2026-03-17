import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/common/config/bcrypt';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private async generateToken(payload: {
    id: number;
    email: string;
    role: Role;
  }) {
    return await this.jwtService.sign(payload);
  }

  async login(payload: LoginDto) {
    const existEmail = await this.prisma.user.findFirst({
      where: {
        email: payload.login,
      },
    });

    if (!existEmail) {
      throw new BadRequestException('Login or password wrong');
    }

    if (!(await bcrypt.compare(payload.password, existEmail.password))) {
      throw new BadRequestException('Login or password wrong');
    }

    const accessToken = await this.generateToken({
      id: existEmail.id,
      email: existEmail.email,
      role: existEmail.role,
    });

    return {
      success: true,
      accessToken,
      role: existEmail.role
    };
  }

  async loginTeacher(payload: LoginDto) {
    const existEmail = await this.prisma.teacher.findFirst({
      where: {
        email: payload.login,
      },
    });

    if (!existEmail) {
      throw new BadRequestException('Login or password wrong');
    }

    if (!(await bcrypt.compare(payload.password, existEmail.password))) {
      throw new BadRequestException('Login or password wrong');
    }

    const accessToken = await this.generateToken({
      id: existEmail.id,
      email: existEmail.email,
      role: Role.TEACHER,
    });

    return {
      success: true,
      accessToken,
      role: Role.TEACHER
    };
  }

  async loginStudent(payload: LoginDto) {
    const existEmail = await this.prisma.student.findFirst({
      where: {
        email: payload.login,
      },
    });

    if (!existEmail) {
      throw new BadRequestException('Login or password wrong');
    }

    if (!(await bcrypt.compare(payload.password, existEmail.password))) {
      throw new BadRequestException('Login or password wrong');
    }

    const accessToken = await this.generateToken({
      id: existEmail.id,
      email: existEmail.email,
      role: Role.STUDENT,
    });

    return {
      success: true,
      accessToken,
      role: Role.STUDENT
      
    };
  }
}
