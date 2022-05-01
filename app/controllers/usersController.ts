import { Request, Response } from 'express';
import usersService from '../services/usersService';

const usersController = () => ({
  login: async (req: Request, res: Response) => {
    try {
      const result = await usersService().login(
        req.query.email.toString(),
        req.query.password.toString()
      );
      return res.send(result);
    } catch (err) {
      console.error(`Error while getting login credentials`, err.message);
    }
  }
});

export default usersController;
