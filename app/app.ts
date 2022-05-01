import Express from 'express';
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
const app = Express();
const pgp = pgPromise();
const db = pgp({ connectionString: process.env.CONNECTION_STRING });
const port = 5000;

const userRouter = require('./routes/usersRoutes');

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { db };
