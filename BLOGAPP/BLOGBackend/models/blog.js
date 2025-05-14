const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema(
    {
        title : {
            type : String ,
            trim : true , //validation  remove leading and trealing whitespace
            require : true
        }, 
        description : {
            type : String ,
            require : true
        },
        draft :{
            type :Boolean,   //2 field bnegi created at and updated at in database automatically
            default : false
        } ,
        creator:{ 
            //creator will be user
            //connection ..
            type : mongoose.Schema.Types.ObjectId,
            ref : "User", //refresces to User collection
            required : true
        }
    },
    {
        timestamps:true
    }
)

const Blog = mongoose.model("Blog" , BlogSchema);

module.exports = Blog ;