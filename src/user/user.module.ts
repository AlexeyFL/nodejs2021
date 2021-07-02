import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import {User} from '../entity/User'
import {Task} from '../entity/Task'

@Module({
  imports: [TypeOrmModule.forFeature([User, Task])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
