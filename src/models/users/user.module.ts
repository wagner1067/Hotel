import { Module } from '@nestjs/common';
import { UsersService } from './user.services';
import { UsersController } from './user.controllers';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
