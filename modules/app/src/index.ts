import express from 'express';
import indexRouter from './routes';

const app = express();

app.use('/', indexRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`)
});
