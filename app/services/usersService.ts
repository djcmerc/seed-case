import { db } from '../app';

interface User {
  email: string;
  password: string;
}

const usersService = () => ({
  login: async (email: string, password: string) => {
    const result: User[] = await db.query(
      'SELECT email, password from users WHERE email=$1 AND password=$2',
      [email, password]
    );
    console.log(result);
    return result;
  }
});

export default usersService;
