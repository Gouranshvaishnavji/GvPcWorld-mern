import mongoose from 'mongoose';
import type { ProductShape } from '../types.js';

const ProductSchema = new mongoose.Schema<ProductShape>(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['cpu', 'gpu', 'motherboard', 'ram', 'storage', 'psu', 'case', 'cooler'],
    },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    image: { type: String },
    description: { type: String },
    specs: {
      type: Map,
      of: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ProductShape>('Product', ProductSchema);