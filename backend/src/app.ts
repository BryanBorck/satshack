import {Request, Response} from 'express';
import * as express from 'express';
import * as cors from 'cors';
import { createBet } from './controllers/bet';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/bet", async (req: Request, res: Response) => await createBet(req, res));

export default app;