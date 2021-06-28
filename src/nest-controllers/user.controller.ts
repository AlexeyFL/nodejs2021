import { Controller, Get } from '@nestjs/common';
import { UserService } from '../nest-services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUsers(): string {
    return this.userService.getUsers();
  }

  @Get('users')
  getUser(): string {
    return this.userService.getUsers();
  }
}