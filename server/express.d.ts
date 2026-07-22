import type { AuthPayload } from './types.js';

declare global {
  namespace Express {
    interface User extends AuthPayload {}

    interface Request {
      user?: User;
    }
  }
}

export {};