const userModel = require('../models/users')
const bcrypt = require('bcrypt')

module.exports.login = function(req,res){
    let isLoggedIn = false
    let email = req.body.email
    let password = req.body.password
    userModel.findOne({email:email}).populate('role').exec(function(err,data){
        if(data){
            let checkPassword = bcrypt.compareSync(password, data.password);
            if(checkPassword==true){
                isLoggedIn = true
            }
        }
        if(isLoggedIn==false){
            res.json({msg:"Invalid Credentials!",status:-1,data:err})
        }
        else{
            res.json({msg:"Login Successful!",status:200,data:data})
        }
    })
}