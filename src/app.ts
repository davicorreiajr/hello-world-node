import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import { useExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
if (process.env.NODE_ENV === 'development') app.use(errorHandler());

useContainer(Container);
useExpressServer(app, {
  controllers: [__dirname + '/presentation/*.controller.js']
});

export default app;
