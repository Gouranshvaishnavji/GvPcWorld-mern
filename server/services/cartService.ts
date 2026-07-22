import AppError from '../util/AppError.js';
import { logger } from '../util/logger.js';

export default function makeCartService(cartRepository: any) {
  return {
    getCart: async (userId: string) => {
      const cart = await cartRepository.findByUserId(userId);
      if (!cart) return { userId, items: [] };
      return cart;
    },

    addItemToCart: async (userId: string, newItem: any) => {
      logger.info(`Adding item to cart for user: ${userId}`);

      const cart = await cartRepository.findByUserId(userId);
      const items = cart ? cart.items : [];

      items.push(newItem);

      return await cartRepository.update(userId, { items });
    },

    removeItem: async (userId: string, itemId: string) => {
      const cart = await cartRepository.findByUserId(userId);
      if (!cart) throw new AppError('Cart not found', 404);

      const filteredItems = cart.items.filter((item: any) => String(item._id) !== itemId);
      return await cartRepository.update(userId, { items: filteredItems });
    },
  };
}