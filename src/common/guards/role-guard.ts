import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    // agar route da role berilmagan bo‘lsa
    if (!roles) {
      return true;
    }

    // agar user yo‘q bo‘lsa
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    if (!roles.includes(user.role)) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}