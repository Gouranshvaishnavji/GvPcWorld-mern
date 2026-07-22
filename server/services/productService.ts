import AppError from '../util/AppError.js';
import { logger } from '../util/logger.js';

export default function makeProductService(productRepository: any) {
  return {
    createProduct: async (productData: any) => {
      logger.info(`Creating new product: ${productData.name}`);
      return await productRepository.create(productData);
    },

    getAllProducts: async (filters: any) => {
      return await productRepository.findAll(filters);
    },

    getProduct: async (id: string) => {
      const product = await productRepository.findById(id);
      if (!product) {
        throw new AppError('Product not found', 404);
      }
      return product;
    },

    updateProduct: async (id: string, updates: any) => {
      logger.info(`Updating product: ${id}`);
      const updatedProduct = await productRepository.updateById(id, updates);
      if (!updatedProduct) {
        throw new AppError('Product not found', 404);
      }
      return updatedProduct;
    },

    deleteProduct: async (id: string) => {
      logger.warn(`Deleting product: ${id}`);
      const deleted = await productRepository.deleteById(id);
      if (!deleted) {
        throw new AppError('Product not found', 404);
      }
      return { message: 'Product deleted successfully' };
    },
  };
}