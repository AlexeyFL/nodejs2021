import { Module } from '@nestjs/common';
import { UserController } from './nest-controllers/user.controller';
import { BoardController } from './nest-controllers/board.controller';
import { TaskController } from './nest-controllers/task.controller';
import { UserService } from './nest-services/user.service';
import { BoardService } from './nest-services/board.service';
import { TaskService } from './nest-services/task.service';

@Module({
  imports: [],
  controllers: [UserController, BoardController, TaskController],
  providers: [UserService, BoardService, TaskService],
})
export class AppModule {}