const express = require('express')
const route = express.Router(); 

let blogs = []

route.post("/blogs" ,)

//get if only draft == false
route.get("/blogs" , (req,res)=>{
    //showing only draft == false blogs means they are public
    let publicBlog = blogs.filter(blog => blog.draft == false)
    return res.status(200).json({publicBlog});
})

route.patch("/blogs/:id" , (req,res)=>{
    let {id} = req.params
    let idx = blogs.findIndex( blog => blog.id == id)
    console.log(idx)
    blogs[idx] = {...blogs[idx] , ...req.body}
    return res.status(200).json({"message" : "Blog updated successfully"})
})

//getting blogs throght id
route.get("/blogs/:id" , (req,res)=>{
    let publicBlog = blogs.filter(blog => blog.id == req.params.id)
    return res.status(200).json({publicBlog});
})

route.delete("/blogs/:id" , (req,res)=>{
    
})

module.exports = route