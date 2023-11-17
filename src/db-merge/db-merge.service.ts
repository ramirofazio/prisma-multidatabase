// db-merge.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaCloudService } from 'src/prisma-cloud/prisma-cloud.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbMergeService {
  constructor(
    private readonly cloudPrisma: PrismaCloudService,
    private readonly localPrisma: PrismaService, // Asegúrate de tener un servicio Prisma local
  ) {}

  async mergeData() {
    try {
      // Consultar datos desde la base de datos en la nube
      const cloudData = await this.cloudPrisma
        .$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;

      console.log('--->', cloudData);

      //! cloudData es un objeo con los nombres de las tablas. necesito mapearlos y crear esas tablas en la DB local

      return 'Datos fusionados exitosamente';
    } catch (error) {
      throw new Error(`Error al fusionar datos: ${error.message}`);
    }
  }
}
