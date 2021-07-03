import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { CustomExceptionFilter } from '../exception-filter/exception.filter';
import { CreateTaskDto } from '../dto/task.dto';
import { TaskService } from './task.service';
import { Task } from '../entity/Task';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('boards/:boardId')
@UseGuards(JwtAuthGuard)
@UseFilters(new CustomExceptionFilter())
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  @HttpCode(200)
  async getTasks() {
    const tasks = await this.taskService.getTasks();

    if (!tasks) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return tasks.map(Task.toResponse);
  }

  @Get('/tasks/:id')
  @HttpCode(200)
  async getOne(@Param('id') id: string): Promise<Task | undefined> {
    const task = await this.taskService.getTask(id);
    if (!task) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return Task.toResponse(task);
  }

  @Post('/tasks')
  @HttpCode(201)
  async createTask(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto
  ): Promise<Task | undefined> {
    const response = await this.taskService.createTask(boardId, createTaskDto);
    if (!response) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return Task.toResponse(response);
  }

  @Put('/tasks/:id')
  @HttpCode(200)
  updateOne(
    @Body() updateTaskDto: CreateTaskDto,
    @Param('id') id: string | undefined
  ) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/tasks/:id')
  @HttpCode(200)
  async deleteOne(@Param('id') id: string | number) {
    const deleted = await this.taskService.deleteTask(id);

    if (!deleted.affected) {
      throw new HttpException('No Content!', HttpStatus.NO_CONTENT);
    }

    return null;
  }
}
