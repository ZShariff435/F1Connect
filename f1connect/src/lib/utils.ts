import mongoose from "mongoose";
require("dotenv").config();

const connection = {};

export const connectToDB = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        // console.log(process.env.MONGO)
    }
    catch(error){
        console.log(error);
        throw new Error(error);
    }
}

