import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Application = express();

app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(app.get('port'), 'localhost', () => {
  console.log(
    `The server is now running at http://localhost:${app.get(
      'port',
    )} in ${app.get('env')} mode.`,
  );
  console.log('Press CTRL-C to stop.\n');
});
