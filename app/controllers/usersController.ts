import { Request, Response } from 'express';
import usersService from '../services/usersService';

const usersController = () => ({
  login: async (req: Request, res: Response) => {
    try {
      const result = await usersService().login(
        req.body.email,
        req.body.password
      );

      if (result.length !== 0) {
        return res.send({ email: result[0].email });
      } else {
        return res.sendStatus(400);
      }
    } catch (err) {
      console.error(`Error while getting login credentials`, err.message);
    }
  }
});

export default usersController;
