const mongoose = require('mongoose')

let roleSchema = new mongoose.Schema({
    roleName:{
        type:String
    }
})

let roleModel = mongoose.model('roles',roleSchema)

module.exports = roleModel