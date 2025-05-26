const mongoose = require('mongoose')
async function DbConnect(){
    try{
        await mongoose.connect("String of Atlas or local mongodb")
        console.log("DB connected successfully")
    }catch(err){
        console.log("db connection failed");
    }
}

module.exports = DbConnect ;
