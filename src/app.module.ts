// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaCloudModule } from './prisma-cloud/prisma-cloud.module';
import { DbMergeService } from './db-merge/db-merge.service';
import { DbMergeModule } from './db-merge/db-merge.module';

@Module({
  imports: [PrismaModule, PrismaCloudModule, DbMergeModule],
  controllers: [AppController],
  providers: [AppService, DbMergeService],
})
export class AppModule {}
