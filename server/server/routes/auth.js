const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { userModel } = require('../models/user.model');
require('dotenv').config();
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const {User}  = require('../controllers/user.controller');
const auth = express();


passport.use(new OAuth2Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Find or create a user
        let user = await userModel.findOne({ username: profile.emails[0].value });

        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                username: profile.emails[0].value,
                ownerImg: profile.photos[0].value, // Assuming ownerImg is a string
                role: 'user',
            });
        }

        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Route to initiate Google authentication
auth.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route to handle Google callback
auth.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    async (req, res) => {
        try {
            // Generate JWT for authenticated user
            const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000,
                // sameSite: "None"
            });
            res.redirect('http://localhost:4500'); // Redirect to frontend
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
);

auth.get('/users',  User.GetUser);
auth.get('/user/:id',  User.GetUserById);
auth.get('/login/success', User.SuccessLogin)   
module.exports = auth;
