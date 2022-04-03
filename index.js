const express = require('express')
const mongoose = require('mongoose')
const roleController = require('./controllers/roleController')
const userController = require('./controllers/userController')
const app = express()

mongoose.connect('mongodb://localhost:27017/thelengthybook',function(err){
    if(err){
        console.log(err)
        console.log('Database not Connected!')
    }
    else{
        console.log("Database connected!")
    }
})

app.use(express.json()) //accepts json data from req and set data into body 
app.use(express.urlencoded({extended:true})) // web--> accept url encoded data from request and set data into body
// app.use(cors())

//roles
app.post('/roles',roleController.addRole)
app.get('/roles',roleController.viewRoles)

//users
app.post('/users',userController.addUser)
app.get('/users',userController.viewUsers)
app.put('/users/:userId',userController.updateUser)
app.delete('/users/:userId',userController.deleteUser)

app.listen(3001,function(){
    console.log("server listening on port 3001")
})