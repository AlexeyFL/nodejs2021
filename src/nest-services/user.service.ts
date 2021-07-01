import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>
  ) {}

  async getUsers() {
    return this.repo.find();
  }

  async getUser(id: string | undefined): Promise<User | undefined> {
    const user = await this.repo.findOne(id);
    if (!user) {
      return undefined;
    }
    return User.toResponse(user);
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
