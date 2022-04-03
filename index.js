const express = require('express')
const mongoose = require('mongoose')
const roleController = require('./controllers/roleController')
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

app.post('/roles',roleController.addRole)

app.listen(3001,function(){
    console.log("server listening on port 3001")
})