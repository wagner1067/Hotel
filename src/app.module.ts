import { Module } from '@nestjs/common';
import { PrismaModule } from './models/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
