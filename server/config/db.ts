import mongoose from 'mongoose';
import config from './index.js';
import { logger } from '../util/logger.js';

export default async function connectDB(): Promise<void> {
  try {
    if (!config.mongoUrl) {
      throw new Error('MONGODB_URL is not configured');
    }

    await mongoose.connect(config.mongoUrl);
    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error(`MongoDB connection error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}