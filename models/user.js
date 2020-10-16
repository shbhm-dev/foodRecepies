const mongoose = require('mongoose')
var Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema
const user = new Schema({

name:{
    type:String,
    required : true,
    trime :true
},
email: {
    type: String,
    required: true,
    unique: true

},
password: {
    type: String,
    required: true
}, photo: {
    data: Buffer,
    contentType: String
}
})
module.exports = User = mongoose.model("User",user)