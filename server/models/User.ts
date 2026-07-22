import mongoose from 'mongoose';
import type { UserShape } from '../types.js';

const UserSchema = new mongoose.Schema<UserShape>(
  {
    name: { type: String, trim: true },
    username: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, select: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    googleId: { type: String },
    profilePicture: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<UserShape>('User', UserSchema);