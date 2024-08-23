const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const URI = process.env.MONGO_URI;
const connectDB = async () => {
    try {
      
      await mongoose.connect(URI, { dbName: "Pcworld" });
      console.log("Connection successful");
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };module.exports = connectDB;