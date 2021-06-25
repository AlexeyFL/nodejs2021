import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = <string>req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ message: 'No token' });
    }
    const token = <string>authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET_KEY!);
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
