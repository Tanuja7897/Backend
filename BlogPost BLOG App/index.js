const express = require("express")
const app = express()
app.use(express.json())
let blogs = []

app.post("/blogs" , (req,res)=>{
    blogs.push({...req.body , id : blogs.length + 1});
    return res.status(200).json({"message" : "created successfully"})
})

//get if only draft == false
app.get("/blogs" , (req,res)=>{
    //showing only draft == false blogs means they are public
    let publicBlog = blogs.filter(blog => blog.draft == false)
    return res.status(200).json({publicBlog});
})

app.patch("/blogs/:id" , (req,res)=>{
    let {id} = req.params
    let idx = blogs.findIndex( blog => blog.id == id)
    console.log(idx)
    blogs[idx] = {...blogs[idx] , ...req.body}
    return res.status(200).json({"message" : "Blog updated successfully"})
})

//getting blogs throght id
app.get("/blogs/:id" , (req,res)=>{
    let publicBlog = blogs.filter(blog => blog.id == req.params.id)
    return res.status(200).json({publicBlog});
})

app.delete("/blogs/:id" , (req,res)=>{
    
})
app.listen(3000 , ()=>{
    console.log("server started")
})