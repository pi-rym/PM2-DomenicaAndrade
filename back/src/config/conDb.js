require("dotenv").config();
const mongoose = require('mongoose');

//const{MONGO_URI} = process.env;

const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};

module.exports = conDb;
