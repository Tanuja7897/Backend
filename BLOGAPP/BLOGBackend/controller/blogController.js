let Blog = require("../models/blog");
const User = require("../models/user");
async function createBlog(req , res){
    try{
        //if draft == true means it is private to author
        //creator will be id only not a name 
        //we check that creator's id exist or not
        const {title , description ,draft , creator} = req.body ;
        if(!title || !description)
            return res.status(400).json({"message" : "please fill all required fields"})
        const findUser = await User.findById(creator)
        if(!findUser)
            return res.status(400).json({"message" : "User does not exist please signin"})
        let blog = await Blog.create({title , description , draft,creator})
        //user ki profile me bhi update krna h ki usne blog create kiya h
        await User.findByIdAndUpdate(creator,{$push : {blogs : blog._id}})
        return res.status(200).json({"message" : "created successfully"})
    }catch(err){
        return res.status(500).json({
            success : false ,
            message : "error while createing blog",
            err : err.message
        })
    }
    
}
async function getBlog(req , res){
    try{
        let blog = await Blog.find({draft : false}) //only public blog
        return res.status(200).json({blog});
    }catch(err){
        return res.status(500).json({
            success : false ,
            message : "error occur while fetching from database",
            err : err.message
        })
    }
}
async function getByIdBlog(req , res){
    try{
        const {id} = req.params;
        let newblog = await Blog.findById(id);
        return res.status(200).json({
            success : true ,
            newblog
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "error while fetching by id",
            err : err.message
        })
    }
}
async function updateBlog(req , res){

}
async function deleteBlog(req , res){

}

module.exports = {createBlog , getBlog , getByIdBlog , updateBlog , deleteBlog}