import express from 'express';
import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
if (process.env.NODE_ENV === 'development') app.use(errorHandler());

useExpressServer(app, {
  controllers: [__dirname + '/presentation/*.controller.js']
});

export default app;
