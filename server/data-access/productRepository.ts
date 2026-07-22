export default function makeProductRepository(ProductModel: any) {
  return {
    create: async (productData: any) => {
      const product = new ProductModel(productData);
      return await product.save();
    },
    findById: async (id: string) => {
      return await ProductModel.findById(id);
    },
    findAll: async (query: any = {}) => {
      return await ProductModel.find(query);
    },
    updateById: async (id: string, updates: any) => {
      return await ProductModel.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteById: async (id: string) => {
      return await ProductModel.findByIdAndDelete(id);
    },
  };
}