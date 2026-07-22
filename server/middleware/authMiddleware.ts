import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
import config from '../config/index.ts';

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.jwt;

  if (!token) {
    res.status(401).json({
      message: 'Authentication required',
      error: 'No token provided',
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { id: string };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: 'Invalid or expired token',
      error: error instanceof Error ? error.message : 'Invalid token',
    });
  }
};

export { authenticateToken };