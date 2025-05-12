const mongoose = require('mongoose')
async function DbConnect(){
    try{
        await mongoose.connect("mongodb+srv://tanuja7897:5kqS7FI0cPzAtIcQ@cluster0.qzpiim2.mongodb.net/BlogDatabase")
        console.log("DB connected successfully")
    }catch(err){
        console.log("db connection failed");
    }
}

module.exports = DbConnect ;