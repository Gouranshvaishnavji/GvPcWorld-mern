import type { NextFunction, Request, Response } from 'express';
import AppError from '../util/AppError.js';
import type { AuthPayload } from '../types.ts';

export default function makeCartController(cartService: any) {
  return {
    get: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const userId = (req.user as AuthPayload | undefined)?.id;
        if (!userId) {
          throw new AppError('Authentication required.', 401);
        }

        const cart = await cartService.getCart(userId);
        res.status(200).json(cart);
      } catch (error) {
        next(error);
      }
    },

    add: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const userId = (req.user as AuthPayload | undefined)?.id;
        if (!userId) {
          throw new AppError('Authentication required.', 401);
        }

        const cart = await cartService.addItemToCart(userId, req.body);
        res.status(200).json(cart);
      } catch (error) {
        next(error);
      }
    },

    remove: async (req: Request<{ itemId: string }>, res: Response, next: NextFunction) => {
      try {
        const userId = (req.user as AuthPayload | undefined)?.id;
        if (!userId) {
          throw new AppError('Authentication required.', 401);
        }

        const cart = await cartService.removeItem(userId, req.params.itemId);
        res.status(200).json(cart);
      } catch (error) {
        next(error);
      }
    },
  };
}