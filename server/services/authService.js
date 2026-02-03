import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/index.js'; 

export default function makeAuthService(userRepository) {
  return {
    register: async (name, email, password) => {
      const existingUser = await userRepository.findByEmail(email);
      if (existingUser) throw new Error('User already exists');

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userRepository.create({ name, email, password: hashedPassword });
      return { id: user._id, email: user.email };
    },
    login: async (email, password) => {
      const user = await userRepository.findByEmail(email);
      if (!user) throw new Error('Invalid credentials');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');

      const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
      return { token, user: { id: user._id, name: user.name, email: user.email } };
    }
  };
}