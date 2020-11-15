const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
var fs = require('fs'); 
var path = require('path'); 


const Recepie = require('../models/recepie')
const user = require('../models/user')
route.get('/recepies/all',(req,res)=>{
    
    Recepie.find()
    .sort({postDate : 'desc'})
    .then(recepie=> res.json(recepie))
    .catch(err=>res.json({error : 'Nothing to Display' }))
})


route.put('/recepies/add/:id',(req,res)=>{

    let pid =  req.params.id
 


    user.findOne({"userId":pid})
    .then(profile => {

        if(!profile)
        {
          
            const newUser = new user({
                userId : pid,
                username : req.body.username
            })
            .save()
            .then(prof => console.log(prof))
    

            const newRecepie = new Recepie({
                userId : pid,
                title : req.body.title,
                steps : req.body.steps,

            })
            newRecepie.save()
            .then(recepie => res.json(recepie))
            .catch(err => console.log(err))

        }else
        {
           
            const newRecepie = new Recepie({
                userId : pid,
                title : req.body.title,
                steps : req.body.steps,

            })
            newRecepie.save()
            .then(recepie => res.json(recepie))
            .catch(err => console.log(err))


        }


    })



    })


// Showing particular user id's recepies

route.get('/recepies/:id',(req,res)=>{
    let pid = req.params.id
    Recepie.find( {"userId" : pid},function(err, result){
        res.json(result);
    })

})

// deleting particular user recepie

route.delete('/recepies/delete/:id',(req,res)=>{

    let pid = req.params.id
    console.log(pid)
    Recepie.findOneAndRemove({"userId" : pid})
    .then(
        profile => {
            if(!profile)
            {
                res.json({
                    Fail : "deletion unsuccessful"
                })

            }else
            {
                res.json({
                    sucess : "deletion successful"
                })
            }
        }

     
    )
    .catch(err => console.log(err));


})




module.exports = route