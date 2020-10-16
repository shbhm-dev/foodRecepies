  
const express = require('express')
const route = express.Router()

const Recepie = require('../models/recepie')

route.get('/recepies/all',(req,res)=>{
    
    Recepie.find()
    .sort({postDate : 'desc'})
    .then(recepie=> res.json(recepie))
    .catch(err=>res.json({error : 'Nothing to Display' }))
})

module.exports = route