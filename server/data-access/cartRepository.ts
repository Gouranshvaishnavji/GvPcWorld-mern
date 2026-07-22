export default function makeCartRepository(CartModel: any) {
  return {
    findByUserId: async (userId: string) => {
      return await CartModel.findOne({ userId }).populate(
        'items.components.cpu items.components.gpu items.components.ram items.components.motherboard items.components.storage items.components.psu items.components.case'
      );
    },
    update: async (userId: string, cartData: any) => {
      return await CartModel.findOneAndUpdate({ userId }, { $set: cartData }, { upsert: true, new: true });
    },
    clear: async (userId: string) => {
      return await CartModel.findOneAndDelete({ userId });
    },
  };
}