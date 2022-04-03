const roleModel = require('../models/roles')

module.exports.addRole = function(req,res){
    let roleName = req.body.roleName
    let role = new roleModel({roleName:roleName})
    role.save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}