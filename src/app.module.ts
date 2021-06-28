import { Module } from '@nestjs/common';
import { UserController } from './nest-controllers/user.controller';
import { UserService } from './nest-services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}