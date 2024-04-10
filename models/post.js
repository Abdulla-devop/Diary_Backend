import { ObjectId } from "bson";
import { Schema,model } from "mongoose";

// post schema for diary app
const PostSchema = new Schema({
  post_Date:{
   type:String,
   required:true,
   default:Date
  },
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  user: {
    type:ObjectId,
    ref:"users"
  }
},{
    collection:"posts",
    timestamps:true
});


export default model('Post',PostSchema );