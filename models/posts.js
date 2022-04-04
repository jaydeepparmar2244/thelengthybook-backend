const mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    postTitle:{
        type:String
    },
    postContent:{
        type:String
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    category:{
        type:String
    }
})

let postModel = mongoose.model('posts',postSchema)

module.exports = postModel