let Blog = require("../models/blog")
async function createBlog(req , res){
    Blog.create()
    return res.status(200).json({"message" : "created successfully"})
}
async function getBlog(req , res){

}
async function getByIdBlog(req , res){

}
async function updateBlog(req , res){

}
async function deleteBlog(req , res){

}