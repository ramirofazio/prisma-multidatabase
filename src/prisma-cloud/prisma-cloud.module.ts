import { Module } from '@nestjs/common';
import { PrismaCloudService } from './prisma-cloud.service';

@Module({
  providers: [PrismaCloudService],
  exports: [PrismaCloudService],
})
export class PrismaCloudModule {}
