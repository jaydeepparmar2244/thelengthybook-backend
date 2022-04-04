const express = require('express')
const mongoose = require('mongoose')
const roleController = require('./controllers/roleController')
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const sessionController = require('./controllers/sessionController')
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

//sessions
app.post('/login',sessionController.login)

//roles
app.post('/roles',roleController.addRole)
app.get('/roles',roleController.viewRoles)

//users
app.post('/users',userController.addUser)
app.get('/users',userController.viewAllUsers)
app.put('/users/:userId',userController.updateUser)
app.delete('/users/:userId',userController.deleteUser)
app.get('/users/:userId',userController.viewOneUser)

//posts
app.post('/posts',postController.addPost)
app.get('/posts',postController.viewAllposts)
app.get('/posts/:postId',postController.viewOnePost)
app.put('/posts/:postId',postController.updatePost)
app.delete('/posts/:postId',postController.deletePost)

app.listen(3001,function(){
    console.log("server listening on port 3001")
})