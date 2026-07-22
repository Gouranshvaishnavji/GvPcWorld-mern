import type { NextFunction, Request, Response } from 'express';
import type { LoginBody, RegisterBody } from '../types.js';

export default function makeAuthController(authService: any) {
  return {
    register: async (req: Request<{}, any, RegisterBody>, res: Response, next: NextFunction) => {
      try {
        const { name, email, password } = req.body;
        const result = await authService.register(name, email, password);
        res.status(201).json(result);
      } catch (error) {
        next(error);
      }
    },

    login: async (req: Request<{}, any, LoginBody>, res: Response, next: NextFunction) => {
      try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    },
  };
}