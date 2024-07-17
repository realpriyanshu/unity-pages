import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection = async (username = 'oppriyanshu', password = 'y4IfwMkjDLvlQVby') => {
    const URL = process.env.MONGO_URL;
   
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.log("Error while connecting to the DB:", error);
    }
};

export default Connection;
