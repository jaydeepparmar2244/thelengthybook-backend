const roleModel = require('../models/roles')

module.exports.addRole = function(req,res){
    let roleName = req.body.roleName
    let role = new roleModel({roleName:roleName})
    role.save(function(err,data){
        if(err){
            // console.log(err)
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            // console.log(data)
            res.json({msg:"Role Added!",status:200,data:data})
        }
    })
}

module.exports.viewRoles = function(req, res){
    roleModel.find(function(err,data){
        if(err){
            // console.log(err)
            res.json({msg:"Error!",status:-1,data:err})
        }
        else{
            // console.log(data)
            res.json({msg:"Role Added!",status:200,data:data})

        }
    })
}
