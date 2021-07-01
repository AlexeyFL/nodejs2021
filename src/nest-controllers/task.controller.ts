import {
  HttpCode,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { TaskService } from '../nest-services/task.service';

@Controller('/boards/:boardId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @HttpCode(200)
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getOne(@Param('id') id: string | undefined) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(): string {
    return this.taskService.createTask();
  }

  @Put(':id')
  updateOne(@Param('id') id: string | undefined) {
    return this.taskService.updateTask(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string | undefined) {
    return this.taskService.deleteTask(id);
  }
}
