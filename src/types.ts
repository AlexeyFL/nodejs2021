interface iUser {
  id?: string | undefined;
  name?: string | undefined;
  login?: string | undefined;
  password?: string | undefined;
}

type userType = {
  id?: string | number | undefined;
  name: string | number | undefined;
  login: string | number | undefined;
  password?: string | number | undefined;
};

type mapUser = (value: userType, index: number, array: userType[]) => userType;


type findUser = (value: string, index: number, array: userType[]) => userType;

export { iUser, userType, mapUser, findUser };
