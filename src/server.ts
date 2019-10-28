import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import articlesRouter from './modules/articles/articles.router';

import logger from './utils/logger';
import { connect } from './database';

const app: Application = express();

app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/articles', articlesRouter);

(async () => {
    const port = app.get('port');
    const env = app.get('env');

    try {
        await connect();
        app.listen(port, 'localhost', () => {
            logger.log(`The server is now running at http://localhost:${port} in ${env} mode.`);
            logger.log('Press CTRL-C to stop.\n');
        });
    } catch (error) {
        logger.error(error);
    }
})();
