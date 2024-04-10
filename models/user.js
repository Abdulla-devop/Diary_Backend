import mongoose, { model } from "mongoose";

// user schema for diary app
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:24,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
             type:String,
             required:true,
    }
},{
    collection:"users",
    timestamps:true
});

// const User = mongoose.model("users",userSchema)

// export default  { User };

export default model('users',userSchema )