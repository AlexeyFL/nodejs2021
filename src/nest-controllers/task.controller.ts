import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TaskService } from '../nest-services/task.service';

@Controller(':id')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Get('tasks/:id')
  getOne(@Param('id') id: string | undefined) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(): string {
    return this.taskService.createTask();
  }

  @Put('tasks/:id')
  updateOne(@Param('id') id: string | undefined) {
    return this.taskService.updateTask(id);
  }

  @Delete('tasks/:id')
  deleteOne(@Param('id') id: string | undefined) {
    return this.taskService.deleteTask(id);
  }
}
