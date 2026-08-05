const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        console.error(`Please check your IP Whitelist on MongoDB Atlas (https://www.mongodb.com/docs/atlas/security-whitelist/) or local database status.`);
    }
};

module.exports = connectDB;
