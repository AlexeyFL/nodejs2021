import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param
} from '@nestjs/common';
import { UserService } from '../nest-services/user.service';
import { User } from '../entity/User';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getOne(@Param('id') id: string | undefined) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(): string {
    return this.userService.createUser();
  }

  @Put(':id')
  updateOne(@Param('id') id: string | undefined) {
    return this.userService.updateUser(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string | undefined) {
    return this.userService.deleteUser(id);
  }
}
