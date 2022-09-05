import path from 'path';

import express, { Application, Request, Response } from 'express';

import userRouter from './routes/user';
import questionRouter from './routes/question';

const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app: Application = express();

const port: number = Number(process.env.PORT) || 3001;

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Leetcode Wheels (づ｡◕‿‿◕｡)づ');
});

app.use('/user', userRouter);
app.use('/question', questionRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
