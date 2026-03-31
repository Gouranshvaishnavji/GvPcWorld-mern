import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true, default: 'India' },
  isDefault: { type: Boolean, default: false }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true, // now this is something we need to look upto
    
    lowercase: true 
  },
  password: { type: String, required: true, select: false }, // Prevent accidental exposure
  role: { 
    type: String, 
    enum: ['customer', 'admin', 'vendor'], 
    default: 'customer' 
  },
  addresses: [addressSchema],
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);