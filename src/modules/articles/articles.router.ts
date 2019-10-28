import { Router } from 'express';

import createArticle from './controllers/create-article';
import deleteArticle from './controllers/delete-article';
import getArticle from './controllers/get-article';
import getArticles from './controllers/get-articles';
import updateArticle from './controllers/update-article';

const router = Router();

router
    .route('/')
    .get(getArticles)
    .post(createArticle);

router
    .route('/:slug')
    .get(getArticle)
    .put(updateArticle)
    .delete(deleteArticle);

export default router;
