import usersController from '../controllers/usersController';
import Express from 'express';
const router = Express.Router();

router.get('/login', (req, res) => usersController().login(req, res));
module.exports = router;
