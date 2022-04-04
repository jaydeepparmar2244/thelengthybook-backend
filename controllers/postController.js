const postModel = require('../models/posts')

module.exports.addPost = function(req,res){
    let postTitle = req.body.postTitle
    let postContent = req.body.postContent
    let category = req.body.category
    let author = req.body.author
    
    let post = new postModel({
        postTitle:postTitle,
        postContent:postContent,
        category:category,
        author:author
    })

    post.save(function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"Post Added!",status:200,data:data})
        }
    })

}

module.exports.viewAllposts = function(req,res){
    postModel.find().populate('author').exec(function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"ALl Posts",status:200,data:data})
        }
    })
}

module.exports.viewOnePost = function(req,res){
    let postId = req.params.postId
    postModel.findById(postId).populate('author').exec(function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"One Post",status:200,data:data})
        }
    })
}

module.exports.updatePost = function(req,res){
    let postId = req.params.postId
    let postTitle = req.body.postTitle
    let postContent = req.body.postContent
    let category = req.body.category
    postModel.updateOne({_id:postId},{postTitle:postTitle,postContent:postContent,category:category},function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"Post Updated!",status:200,data:data})
        }
    })
}

module.exports.deletePost = function(req,res){
    let postId = req.params.postId
    postModel.deleteOne({_id:postId},function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"Post Deleted!",status:200,data:data})
        }
    })
}