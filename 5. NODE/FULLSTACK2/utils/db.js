import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Successfully Connected to MongoDB");
    })
    .catch((err)=>{
        console.log("Error Connecting to MongoDB");
    })
}

export default db;