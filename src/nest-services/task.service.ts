import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks(): string {
    return 'All Tasks!';
  }

  getTask(): string {
    return 'Task by id!';
  }

  createTask(): string {
    return 'Create Task!';
  }

  updateTask(): string {
    return 'Update Task!';
  }

  deleteTask(): string {
    return 'Delete Task!';
  }
}
