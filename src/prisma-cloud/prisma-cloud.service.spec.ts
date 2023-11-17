import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCloudService } from './prisma-cloud.service';

describe('PrismaCloudService', () => {
  let service: PrismaCloudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCloudService],
    }).compile();

    service = module.get<PrismaCloudService>(PrismaCloudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
