import {Request, Response} from 'express';
import * as express from 'express';
import * as cors from 'cors';
import { createBet, getBetsFromThemeId, startBet } from './controllers/bet';
import { createTheme, getThemes } from './controllers/theme';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/bet/start", async (req: Request, res: Response) => await startBet(req, res));
app.post("/bet/accept", async (req: Request, res: Response) => await createBet(req, res));
app.get("/bets/:themeId", async (req: Request, res: Response) => await getBetsFromThemeId(req, res));

app.get("/themes", async (req: Request, res: Response) => await getThemes(req, res));
app.post("/theme", async (req: Request, res: Response) => await createTheme(req, res));

export default app;