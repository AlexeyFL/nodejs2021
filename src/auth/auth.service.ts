import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// import { User } from '../entity/User';
import { UserService } from '../user/user.service';
import { User } from '../entity/User';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(loginDto: User) {
    const { login } = loginDto;

    const user = await this.userService.findByLogin(login);
    if (user) {
      console.log(user);
      const payload = {
        id: user?.id,
        login: user?.login,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    return null;
  }

  /*   async validateUser(loginDto: CreateUserDto): Promise<User> {}
    
  */
}
