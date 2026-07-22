import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
import config from '../config/index.js';
import AppError from '../util/AppError.js';
import { context } from '../util/context.js';
import { logger } from '../util/logger.js';

export default async function isAuth(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new AppError('Authentication required.', 401);
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new AppError('Authentication required.', 401);
    }

    const decoded = jwt.verify(token, config.jwtSecret) as unknown as { id: string };

    req.user = decoded;

    const store = context.getStore();
    if (store) {
      store.set('userId', decoded.id);
    }

    logger.debug('User identity verified and context set');
    next();
  } catch (error: any) {
    if (error.name === 'JsonWebTokenError') return next(new AppError('Invalid token', 401));
    if (error.name === 'TokenExpiredError') return next(new AppError('Session expired', 401));

    next(error);
  }
}