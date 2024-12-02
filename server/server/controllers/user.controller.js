const { userModel } = require('../models/user.model');
const { uploadOnCloudinary } = require('../utils/cloudinary');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');


class User {

    static GetUser = async (req, res) => {
        try {
            const data = await userModel.find({});
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }


    static GetOtherUser = async (req, res) => {
        try {
            const { senderId } = req.query;
            const filteredUser = await userModel.find({ _id: { $ne: senderId } }).select("-password");
            res.json(filteredUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }


static Login = async (req, res) => {
    try {
        const { username, password, fcmToken } = req.body;

        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        if (fcmToken) {
            if (!user.fcmTokens.includes(fcmToken)) {
                user.fcmTokens.push(fcmToken);
                await user.save();
            }
        }

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ message: 'Login successful', user: { _id: user._id, name: user.name, username: user.username, role: user.role } });
    } catch (error) {
        res.status(500).send('Server Error');
    }
}

   static PostUser = async (req, res) => {
    try {
        const { name, username, password, otp, validOtp, fcmToken } = req.body;


        if (!(name && username && password && otp)) {
            return res.status(400).send('All input required');
        }

        if (validOtp === otp) {
            const existUser = await userModel.findOne({ username });
            if (existUser) {
                return res.status(400).send("User Already Exist. Please Login");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await userModel.create({
                name,
                username,
                password: hashedPassword,
    
                fcmTokens: fcmToken ? [fcmToken] : [],
            });


            const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

       
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000,
            });

 
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } else {
            res.status(400).send("Invalid OTP");
        }
    } catch (error) {
        console.error(error); 
        res.status(500).send('Server Error');
    }
}

    static GetUserById = async (req, res) => {
        try {
            const id = req.params.id;
            

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: 'Invalid user ID' });
            }
    
            const filterData = await userModel.findById(id);
            

            if (!filterData) {
                return res.status(404).json({ error: 'User not found' });
            }
    
            res.json(filterData);
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    


    static PutUser = async (req, res) => {
        try {
            const id = req.params.id;
            const modifiedData = req.body;
            const files = req.files;

            if (files && files.length > 0) {
                const filePaths = files.map(file => file.path);
                const urls = await uploadOnCloudinary(filePaths);
                modifiedData.ownerImg = urls;
            }

            const updatedData = await userModel.findByIdAndUpdate(id, modifiedData, { new: true });
            res.json(updatedData);
        } catch (error) {
            console.log(error);
            res.status(500).send("Server Error");
        }
    }


   
   static Logout = (req, res) => {
    try {
       
        if (req.cookies) {
            Object.keys(req.cookies).forEach(cookie => {
                res.clearCookie(cookie, { 
                    path: '/', 
                    sameSite: 'None', 
                    secure: true        
                });
            });
        }

        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    return res.status(500).json({ message: 'Error while logging out. Please try again.', error: err });
                }
                console.log('User logged out successfully');
                return res.status(200).json({ message: 'Logged out successfully' });
            });
        } else {
            console.log('User logged out successfully (no session)');
            return res.status(200).json({ message: 'Logged out successfully' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error during logout', error });
    }
};

    
    static SuccessLogin = async (req, res) => {
        try {

            const token = req.cookies.jwt; 
    
            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }
    
            let user;
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                user = await userModel.findById(decoded.id).select('-password'); 
            } catch (error) {
                console.log("Error in finding user", error);
                return res.status(401).json({ message: "Invalid token" });
            }
    
            if (user) {
                res.json({ user });
            } else {
                res.status(400).json({ message: "Not authenticated" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    
}

module.exports = { User };
