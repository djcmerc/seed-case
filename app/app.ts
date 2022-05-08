import Express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
const app = Express();
const pgp = pgPromise();
const db = pgp({ connectionString: process.env.CONNECTION_STRING });
const port = 5000;

app.use(cors());
app.use(Express.json());
const userRouter = require('./routes/usersRoutes');

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export { db };
