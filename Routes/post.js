import express from 'express'
import { editPost, getUserPost } from '../Controller/post.js'
import { deletePost } from '../Controller/post.js';
import { createPost } from '../Controller/post.js';


const router = express.Router();
//All post function
 router.get('/user/all',async(req,res)=>{
   try {
      const allPost = await getUserPost(req)
      if(allPost.length <= 0){
        return res.status(404).json({error_message:"no content available"})
    } 
    res.status(200).json({message:allPost})
   } catch (error) {
    console.log(error,"error")
    res.status(500).json({error:"Internal server error"})
   }
 });

 //create post function
router.post('/create',async(req,res)=>{
    try {
        const newPost = await createPost(req)
        if(!newPost){
            res.status(404).json({error:"Error adding data"})
        }
        res.status(201).json({data:newPost,message:"Post added successfully"})
    } catch (error) {
        console.log("error",error)
        res.status(500).json({error:"error"})
    }
});

//edit post function
router.put('/edit/:id',async(req,res)=>{
        try {
            const updatePost = await editPost(req);
            if(!updatePost){
                res.status(404).json({error:"Error Editing data"})
            }
            res.status(200).json({data:updatePost,message:"Edited successfully"})
        } catch (error) {
            console.log("error",error)
            res.status(500).json({error:"error"})
        }
});

//delete post function
router.delete('/delete/:id',async(req,res)=>{
    try {
        const deletedPost = await deletePost(req)
        if(!deletedPost){
            res.status(404).json({error:"Error deleting data"})
        }
        res.status(200).json({message:"Deleted successfully"});
    } catch (error) {
        console.log("error",error)
        res.status(500).json({error:"error"})
    }
});

export default router;