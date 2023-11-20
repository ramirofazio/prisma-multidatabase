// db-merge.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaCloudService } from 'src/prisma-cloud/prisma-cloud.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { cloudUser, cloudProduct } from './db-merge.dto';

@Injectable()
export class DbMergeService {
  constructor(
    private readonly cloudPrisma: PrismaCloudService,
    private readonly localPrisma: PrismaService,
  ) {}

  async mockupData() {
    try {
      await this.cloudPrisma.users.create({
        data: {
          email: 'ramifazio@gmail.com',
          name: 'Ramiro Fazio Dattoli',
        },
      });

      await this.cloudPrisma.products.create({
        data: {
          name: 'Vaso',
          description: 'Un Vaso',
          price: 1500,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async mergeData() {
    try {
      //! Opcion para leer las tbalas, medio chino pasarlas a la db local
      //   await this.mockupData();
      //   // Consultar datos desde la base de datos en la nube
      //   const cloudData: dataRawTable[] = await this.cloudPrisma
      //     .$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
      //   for (const tableInfo of cloudData) {
      //     const tableName = tableInfo.table_name;
      //     let tableData = await this.cloudPrisma.$queryRawUnsafe(
      //       `SELECT * FROM ${tableName}`,
      //     );
      //   }

      //! Opcion manual, mas seguro pero menos dinamico
      //? Users
      const cloudUsers: cloudUser[] = await this.cloudPrisma
        .$queryRaw`SELECT * FROM Users`;
      cloudUsers.map(async (user) => {
        await this.localPrisma.user.createMany({
          data: user,
          skipDuplicates: true,
        });
      });

      //? Products
      const cloudProducts: cloudProduct[] = await this.cloudPrisma
        .$queryRaw`SELECT * FROM Products`;
      console.log('PRODUCTS --->', cloudProducts);
      cloudProducts.map(async (product) => {
        await this.localPrisma.product.createMany({
          data: product,
          skipDuplicates: true,
        });
      });
    } catch (error) {
      throw new Error(`Error al fusionar datos: ${error.message}`);
    }
  }
}
