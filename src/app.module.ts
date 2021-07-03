import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import {
  POSTGRES_DB,
  POSTGRESS_HOST,
  POSTGRESS_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from './common/config';


import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRESS_HOST,
      port: Number(POSTGRESS_PORT),
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      synchronize: true,
      // migrationsRun: true,
      entities: [join(__dirname, 'entity/*{.ts,.js}')],
      migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migrations',
      },
    }),
    UserModule,
    BoardModule,
    TaskModule,
    AuthModule
  ]
})
export class AppModule {
  
}
