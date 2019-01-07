import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') app.use(errorHandler());

export default app;
