// db-merge.module.ts
import { Module } from '@nestjs/common';
import { DbMergeService } from './db-merge.service';
import { PrismaCloudModule } from 'src/prisma-cloud/prisma-cloud.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaCloudModule, PrismaModule], // No es necesario importar PrismaModule si no lo usas aquí
  providers: [DbMergeService],
})
export class DbMergeModule {}
