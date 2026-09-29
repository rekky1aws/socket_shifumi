import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';

const mainRoutes = require('./routes/mainRoutes');

dotenv.config();

const port: number = Number(process.env.PORT);
const app = express();

console.log(`Started app on port : ${port}`);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port);

