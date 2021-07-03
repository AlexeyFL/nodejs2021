import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  
import { TypeOrmModule } from '@nestjs/typeorm';

import ConnectionOptions from './ormconfig';


import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ConnectionOptions),
    UserModule,
    BoardModule,
    TaskModule,
    AuthModule
  ]
})
export class AppModule {
  
}
