const mongoose = require('mongoose')
var Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema
const Recepie = new Schema({
    userId : {
        type : String
    },
    username:{
        type:String
    },
    title:{
        type : String,
        require : true
    },
    steps : {
        type : String,
        require : true

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