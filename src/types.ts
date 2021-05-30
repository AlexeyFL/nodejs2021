interface iUser {
  id?: string | undefined;
  name?: string | undefined;
  login?: string | undefined;
  password?: string | undefined;
}

type userType = {
  id: string | number;
  name: string;
  login: string;
  password?: string | undefined;
};

export { iUser, userType };
