const mongoose = require("mongoose");
const Blog = require("./blog");
const UserSchema = new mongoose.Schema({
    name : String , 
    email : {
        type : String,
        unique : true
    } ,
    password : String,
    //single user can create multiple blog
    blogs : [{
        //not necessary because some user without login read .
        type : mongoose.Schema.Types.ObjectId,
        ref : Blog,
    }]   
})

const User = mongoose.model("User" , UserSchema);

module.exports = User
