import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readystate){
        return handler(req,res)
    }
        await mongoose.connect(process.env.MONGO_URI)
        return handler(req,res);
}
export default connectDb;

// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/iNotebook?directConnection=true&tls=false&readPreference=primary";
// const connectToMongo =()=>{
//     mongoose.set('strictQuery', true);
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully.");
//     });
// }
// module.exports = connectToMongo;