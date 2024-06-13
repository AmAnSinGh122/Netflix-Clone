import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
}).parsed;

const db = process.env.MONGO_URI;

const databaseConnection = () =>{
    mongoose.connect(db).then(()=>{
        console.log("database connected");
    }).catch((error)=>{
        console.log(error);
    })
};

export default databaseConnection;



