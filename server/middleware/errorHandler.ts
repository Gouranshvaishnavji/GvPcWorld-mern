import type { NextFunction, Request, Response } from 'express';
import { logger } from '../util/logger.js';

export default function errorHandler(err: any, req: Request, res: Response, _next: NextFunction): void {
  logger.error(`${err?.message ?? 'Unknown error'} - ${req.method} ${req.originalUrl}`);

  const statusCode = err?.statusCode || 500;
  const message = err?.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}