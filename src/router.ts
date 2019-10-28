import { Router } from 'express';

import articlesRouter from './modules/articles/articles.router';

const router = Router();

router.use('/articles', articlesRouter);

export default router;
