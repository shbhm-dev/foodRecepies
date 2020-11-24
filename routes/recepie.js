const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
var fs = require('fs'); 
var path = require('path'); 


const Recepie = require('../models/recepie')
const user = require('../models/user')

// @type    POST
//@route    /recepies/addUser
// @desc    route for personnal user recepies
// @access  PRIVATE

route.post('/recepies/addUser',(req,res)=>{

    let userId = req.body.userId
    let username = req.body.username
    user.findOne({"userId":userId})
    .then(profile => {
        if(!profile)
        {
           const newUser = new user({
                userId : userId,
                username : username
            })
            .save()
            .then(user => res.json(user))
            .catch(err => res.json(err))
        }

    })

})





// @type    GET
//@route    /recepies/all
// @desc    route for showing all recepies
// @access  Public


route.get('/recepies/all',(req,res)=>{
    
    Recepie.find()
    .sort({postDate : 'desc'})
    .then(recepie=> res.json(recepie))
    .catch(err=>res.json({error : 'Nothing to Display' }))
})

// @type    POST
//@route    /recepies/add/:id
// @desc    route for personnal user profile
// @access  PRIVATE


route.post('/recepies/add',(req,res)=>{

    let pid =  req.body.userId
 


    user.findOne({"userId":pid})
    .then(profile => {

        if(!profile)
        {
          
         
        }else
        {
           
            const newRecepie = new Recepie({
                userId : pid,
                username : req.body.username,
                title : req.body.title,
                steps : req.body.steps,

            })
            newRecepie.save()
            .then(recepie => res.json(recepie))
            .catch(err => console.log(err))


        }


    })



    })


// @type    GET
//@route    /recepies/:id
// @desc    route for personnal user recepies
// @access  PRIVATE


route.get('/recepies/:id',(req,res)=>{
    let pid = req.params.id
    Recepie.find( {"userId" : pid},function(err, result){
        res.json(result);
    })

})

// @type    Delete
//@route    /recepies/delete/:id
// @desc    route for deleteing personal user recepies
// @access  PRIVATE

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