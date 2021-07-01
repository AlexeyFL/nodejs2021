import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import {
  POSTGRES_DB,
  POSTGRESS_HOST,
  POSTGRESS_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from './common/config';
import { UserController } from './nest-controllers/user.controller';
import { BoardController } from './nest-controllers/board.controller';
import { TaskController } from './nest-controllers/task.controller';
import { UserService } from './nest-services/user.service';
import { BoardService } from './nest-services/board.service';
import { TaskService } from './nest-services/task.service';

import { User } from './entity/User';

@Module({
  imports: [
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
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController, BoardController, TaskController],
  providers: [UserService, BoardService, TaskService],
})
export class AppModule {}
