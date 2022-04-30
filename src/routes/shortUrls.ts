import { Router } from 'express';
import { create, getFullURL } from '../controllers/shortUrls';

const shortUrlRouter = Router();

shortUrlRouter.post('/create', create);
shortUrlRouter.get('/:keyId', getFullURL);

export default shortUrlRouter;
