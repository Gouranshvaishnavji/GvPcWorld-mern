import express from 'express';
import User from '../models/User.js';
import makeUserRepository from '../data-access/userRepository.js';
import makeAuthService from '../services/authService.js';
import makeAuthController from '../controllers/authController.js';

const router = express.Router();

const userRepository = makeUserRepository(User);
const authService = makeAuthService(userRepository);
const authController = makeAuthController(authService);

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;