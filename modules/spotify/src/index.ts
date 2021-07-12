import express from 'express';
import indexRouter from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/', indexRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`Listten in http://localhost:${process.env.APP_PORT}`)
});
