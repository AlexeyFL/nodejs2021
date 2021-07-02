import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Res,
  Body,
} from '@nestjs/common';
import {  Response } from 'express';
import { CreateTaskDto } from '../dto/task.dto';
import { TaskService } from '../nest-services/task.service';
import { Task } from '../entity/Task';

@Controller('boards/:boardId')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  async getUsers( @Res() res: Response) {

    const users = await this.taskService.getTasks();

    if (!users) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(users.map(Task.toResponse));
  }

  @Get('/tasks/:id')
  async getOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const task = await this.taskService.getTask(id);
    if (!task) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(Task.toResponse(task));
  }

  @Post('/tasks')
  async createTask(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto,
    @Res() res: Response
  ): Promise<void> {
    const response = await this.taskService.createTask(boardId, createTaskDto);
    res.status(201).json(Task.toResponse(response));
  }

  @Put('/tasks/:id')
  updateOne(
    @Body() updateTaskDto: CreateTaskDto,
    @Param('id') id: string | undefined
  ) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/tasks/:id')
  async deleteOne(@Param('id') id: string | number, @Res() res: Response) {
    const deleted = await this.taskService.deleteTask(id);

    if (!deleted.affected) {
      res.status(204);
    }

    res.status(200).json(null);
  }
}
