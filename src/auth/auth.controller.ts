import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { User } from '../entity/User';
import { JwtAuthGuard } from './auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() loginDto: User) {
    const token = await this.authService.login(loginDto);
    if (!token) {
      throw new HttpException('Not authorized!', HttpStatus.UNAUTHORIZED);
    }
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}
