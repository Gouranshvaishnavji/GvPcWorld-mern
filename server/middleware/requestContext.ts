import type { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { context } from '../util/context.js';

export default function requestContext(_req: Request, _res: Response, next: NextFunction): void {
  const store = new Map<string, string>();
  store.set('requestId', randomUUID());

  context.run(store, () => {
    next();
  });
}