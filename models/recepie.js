const mongoose = require('mongoose')
var Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema
const Recepie = new Schema({
    user : {
        type : ObjectId,
        ref : 'User'
    },
    title:{
        type : String,
        require : true
    },
    steps : {

    },
    foodImg : {
        data: Buffer,
        contentType: String
    },
    postDate : {
        type : Date,
        default : Date.now
    }
})
module.exports = recepie = mongoose.model("recepie",Recepie)