import { db } from '../app';

export interface LoginInfo {
  email: string;
  password: string;
}

export interface User extends LoginInfo {
  firstName: string;
  lastName: string;
  month: number;
  day: number;
  year: number;
}

const usersService = () => ({
  login: async (email: string, password: string) => {
    const result: LoginInfo[] = await db.query(
      'SELECT email, password from userInfo WHERE email=$1 AND password=$2',
      [email, password]
    );
    console.log(result);
    return result;
  },
  signup: async (userInfo: User) => {
    const birthday: Date = new Date(
      userInfo.year,
      userInfo.month,
      userInfo.day
    );
    const result = await db.func('registeruser', [
      userInfo.email,
      userInfo.firstName,
      userInfo.lastName,
      userInfo.password,
      birthday
    ]);
    return result[0].registeruser;
  }
});

export default usersService;
