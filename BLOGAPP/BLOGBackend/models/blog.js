const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema(
    {
        title : {
            type : String ,
            trim : true , //validation  remove leading and trealing whitespace
            require : true
        }, 
        description : String ,
        draft :{
            type :Boolean,
            default : false
        } 
    },
    {
        timestamps:true
    }
)

const Blog = mongoose.model("Blog" , BlogSchema);

module.export = Blog ;