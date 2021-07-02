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
import { CreateUserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import { User } from '../entity/User';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers( @Res() res: Response) {

    const users = await this.userService.getUsers();

    if (!users) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(users.map(User.toResponse));
  }

  @Get(':id')
  async getOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const user = await this.userService.getUser(id);
    if (!user) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(User.toResponse(user));
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response
  ): Promise<void> {
    const response = await this.userService.createUser(createUserDto);
    res.status(201).json(User.toResponse(response));
  }

  @Put(':id')
  updateOne(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id: string | undefined
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string | number, @Res() res: Response) {
    const deleted = await this.userService.deleteUser(id);

    if (!deleted.affected) {
      res.status(204);
    }

    res.status(200).json(null);
  }
}
