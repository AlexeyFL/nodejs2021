import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from '../nest-services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers(): string {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(): string {
    return this.userService.getUser();
  }

  @Post('users')
  createUser(): string {
    return this.userService.createUser();
  }

  @Put(':id')
  updateUser(): string {
    return this.userService.updateUser();
  }

  @Delete(':id')
  deleteUser(): string {
    return this.userService.deleteUser();
  }
}
