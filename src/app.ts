import express, { Application, Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import YAML from 'yamljs';
import { StatusCodes } from 'http-status-codes';
import { morganHandler, registerExceptionHandler } from './middlewares';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/tasks.router';

import { handleError } from './utils/index';

const app: Application = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
console.log(StatusCodes)

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

registerExceptionHandler();
app.use(morganHandler);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// Promise.reject(Error('Oops'));
// throw new Error('Ooops');

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);


app.use(handleError);

export default app;
