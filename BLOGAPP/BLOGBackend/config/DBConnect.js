const mongoose = require('mongoose')
async function DbConnect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/BlogDB")
        console.log("DB connected successfully")
    }catch(err){
        console.log("db connection failed");
    }
}

module.exports = DbConnect ;