import Post from '../models/post.js';

//user post function
export function getUserPost(req){
    return Post
    .find({user:req.user})
    .populate("user","name")
}
//create post function
export function createPost(req){
    return new Post({
        ...req.body,
        user:req.user
    }).save();
}
//edit post function
export function editPost(req){
    return Post.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        {new:true}
    )
}
//delete post function
export function deletePost(req){
    return Post.findByIdAndDelete({_id: req.params.id});
}




