const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MONGODB CONNECTED SUCCESSFULLY')
    } catch (error) {
        console.log('Error connecting mongo db',error);
        process.exit(1);
    }
}

module.exports = connectDB;