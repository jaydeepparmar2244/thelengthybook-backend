const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.Types.ObjectId,
        ref:'roles'
    }
})

let userModel = mongoose.model('users',userSchema)

module.exports = userModel