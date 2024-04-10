import mongoose from "mongoose";
// db connection
export function connectDB(){
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb Database Connected")
    } catch (error) {
        console.log("Connection error")
        
    }
}