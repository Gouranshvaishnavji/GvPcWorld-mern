const mongoose = require('mongoose');

const googleUserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Full name of the user
    username: { type: String, unique: true, required: true }, // Email as the unique username
    ownerImg:  [String] , // Profile picture URL
    role: { type: String, default: 'user' }, // User role, default is 'user'
    fcmTokens: { type: [String] }, // Firebase Cloud Messaging tokens for notifications
    IsOnline: { type: Boolean, default: false }, // Online status
}, { timestamps: true });

const GoogleUser = mongoose.model('GoogleUser', googleUserSchema);

const userModel = GoogleUser;

module.exports = { userModel };
