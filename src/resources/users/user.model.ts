import { v4 as uuid } from 'uuid';
import {userType ,iUser} from '../../types';


class User {
  id: string | number | undefined;

  name: string | number | undefined;

  login: string | number | undefined;

  password: string | number | undefined;

  constructor({
    id = uuid(),
    name = 'TEST_USER',
    login = 'test_user',
    password = 'P@55w0rd',
  } = {} as iUser)  {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  getUser(): userType {
    return {
      id: this.id,
      name: this.name,
      login: this.login,
    } as userType;
  }

  static toResponse( user: {
    id?: string | number | undefined;
    name: string | number | undefined;
    login: string | number | undefined;
  }): userType {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
