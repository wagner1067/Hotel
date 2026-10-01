import { Module } from '@nestjs/common';
import { PrismaModule } from './models/prisma/prisma.module';
import { UserModule } from './models/users/user.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
