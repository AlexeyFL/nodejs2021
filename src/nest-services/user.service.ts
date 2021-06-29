import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'All users!';
  }

  getUser(id: string | undefined): string | undefined {
    return `User by id ${id}!`;
  }

  createUser(): string {
    return 'Create user!';
  }

  updateUser(id: string | undefined): string | undefined {
    return `Update user ${id}!`;
  }

  deleteUser(id: string | undefined): string | undefined {
    return `Delete user ${id}!`;
  }
}
