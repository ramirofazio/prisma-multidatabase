import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-cloud/prisma/client';

@Injectable()
export class PrismaCloudService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
