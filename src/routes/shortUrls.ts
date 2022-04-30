import { Router } from 'express';
import { create } from '../controllers/shortUrls';

const shortUrlRouter = Router();

shortUrlRouter.post('/create', create);

export default shortUrlRouter;
