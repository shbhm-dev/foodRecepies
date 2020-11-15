const mongoose = require('mongoose')
var Schema = mongoose.Schema

const user = new Schema({
userId : {
type : String
},
username:{
    type:String,
    required : true,
    trime :true
}

})
module.exports = User = mongoose.model("User",user)