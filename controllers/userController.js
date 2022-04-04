const userModel = require('../models/users')
const bcrypt = require('bcrypt')


module.exports.addUser = function(req,res){
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role
    let hashPassword = bcrypt.hashSync(password, 10);

    let user = new userModel({
        name:name,
        email:email,
        password:hashPassword,
        role:role
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"User added!",status:200,data:data})
        }
    })
}

module.exports.viewAllUsers = function(req,res){
    userModel.find().populate('role').exec(function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"Users",status:200,data:data})
        }
    })
}

module.exports.viewOneUser = function(req,res){
    let userId = req.params.userId
    userModel.findById(userId).populate('role').exec(function(err,data){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"One User",status:200,data:data})
        }
    })
}

module.exports.updateUser = function(req,res){
    let userId = req.params.userId
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    userModel.findOneAndUpdate({_id:userId},{name:name,email:email,password:password,role:role},function(err,data){
        if(err){
            res.json({msg:"Error",status:-1,data:err})
        }
        else{
            res.json({msg:"User Updated!",status:200,data:data})
        }
    })
}

module.exports.deleteUser = function(req,res){
    let userId = req.params.userId
    userModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            res.json({msg:"User Deleted!",status:200,data:data})
        }
    })
}