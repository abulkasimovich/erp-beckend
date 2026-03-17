import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    let connectionString = process.env.DATABASE_URL;
    let pool = new Pool({connectionString});
    let adapter = new PrismaPg(pool);
    super({ adapter, log: ['error', 'warn'] });
  }
  async onModuleInit() {
    await this.$connect();
    Logger.log('✅ Database connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    Logger.log('❌ Database disconnected');
  }
}
