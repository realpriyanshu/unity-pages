import mongoose from "mongoose";

const Connection = async (username = 'shivangverma43', password = 'eE8hBGR3cYJfiCsw') => {
    const URL = `mongodb://${username}:${password}@ac-i2wu7zy-shard-00-00.9pyvmr0.mongodb.net:27017,ac-i2wu7zy-shard-00-01.9pyvmr0.mongodb.net:27017,ac-i2wu7zy-shard-00-02.9pyvmr0.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-7i32i0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=unitypages`;
   
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
