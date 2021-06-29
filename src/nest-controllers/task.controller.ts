import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from '../nest-services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(): string {
    return this.taskService.getTask();
  }

  @Post('tasks')
  createTask(): string {
    return this.taskService.createTask();
  }

  @Put(':id')
  updateTask(): string {
    return this.taskService.updateTask();
  }

  @Delete(':id')
  deleteTask(): string {
    return this.taskService.deleteTask();
  }
}
