import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks(): string {
    return 'All Tasks!';
  }

  getTask(id: string | undefined): string | undefined {
    return `Task by id ${id}!`;
  }

  createTask(): string {
    return 'Create Task!';
  }

  updateTask(id: string | undefined): string | undefined {
    return `Update Task ${id}!`;
  }

  deleteTask(id: string | undefined): string | undefined{
    return `Delete Task ${id}!`;
  }
}
