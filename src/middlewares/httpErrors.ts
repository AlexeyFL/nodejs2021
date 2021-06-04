import { Response, NextFunction } from 'express';

import Logger from './log';

const httpErrors = (err: Error, res: Response, next: NextFunction) => {
  if (err) {
    Logger.error(`${err}: ${err.message}`);
    res.status(500).send(err.message);
  } else {
    // Logger.error(`${err}: ${err.message}`);
    res.status(500).send(`status 500`);
  }
  next();
};

export { httpErrors };
