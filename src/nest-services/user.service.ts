import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'All users!';
  }

  getUser(): string {
    return 'User by id!';
  }

  createUser(): string {
    return 'Create user!';
  }

  updateUser(): string {
    return 'Create user!';
  }
}
