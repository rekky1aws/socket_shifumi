import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port: number = Number(process.env.PORT);
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port);