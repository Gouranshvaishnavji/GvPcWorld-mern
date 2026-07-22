import type { NextFunction, Request, Response } from 'express';

export default function makeProductController(productService: any) {
  return {
    create: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
      } catch (error) {
        next(error);
      }
    },

    getAll: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const products = await productService.getAllProducts(req.query);
        res.status(200).json(products);
      } catch (error) {
        next(error);
      }
    },

    getOne: async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
      try {
        const product = await productService.getProduct(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        next(error);
      }
    },

    update: async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
      try {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(product);
      } catch (error) {
        next(error);
      }
    },

    remove: async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
      try {
        const result = await productService.deleteProduct(req.params.id);
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    },
  };
}