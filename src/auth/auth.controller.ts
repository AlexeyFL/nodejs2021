import { Body, Controller, Get, Post, UseGuards, Res } from '@nestjs/common';

import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../entity/User';
import { JwtAuthGuard } from './auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() loginDto: User, @Res() res: Response) {
    const accessToken = await this.authService.login(loginDto);
    if (!accessToken) {
      res.status(401).json('No auth');
    }
    res.status(200).json(accessToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}
