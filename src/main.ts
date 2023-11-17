import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbMergeService } from './db-merge/db-merge.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.get(DbMergeService).mergeData();
  await app.listen(3000);
}
bootstrap();
