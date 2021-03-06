const express = require('express')
const app = express()
const mongoose = require('mongoose')
const recepie = require('./routes/recepie')
const session = require('express-session')

var fs = require('fs'); 
var path = require('path'); 
mongoose.connect('mongodb://localhost:27017/recepie')

app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));


app.use('/',recepie)

app.listen(4444,()=>{
    console.log("server running")
})