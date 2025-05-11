const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
const mongoose = require("mongoose");
app.use(cors())
async function DbConnect(){
    try{
        await mongoose.connect("mongodb+srv://tanuja7897:5kqS7FI0cPzAtIcQ@cluster0.qzpiim2.mongodb.net/BlogDatabase")
        console.log("DB connected successfully")
    }catch(err){
        console.log("db connection failed");
    }
}

const UserSchema = new mongoose.Schema({
    name : String , 
    email : {
        type : String,
        unique : true
    } ,
    password : String     
})

const User = mongoose.model("User" , UserSchema);

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

app.post("/users" ,async (req,res)=>{
    let {name , email , password} = req.body
    try{
      
        if(!name || !email || !password){
            return res.status(400).json({
                success : false ,
                message : "please try again and ensure to enter all required fields! "
            })
        }
        //drawing error in new way finding from db 
        const finduser = await User.findOne({email})
        if(finduser){
            return res.status(400).json({
                message : "User already exist" 
            })
        }   
        const newUser = await User.create({
            name , 
            email , 
            password
        });
        res.status(200).json({
            success : true ,
            message : "Created successfully"
        })
    }catch(err){
        res.status(500).json({
            success : false ,
            message :"Error Occured while creating users",
            error : err.message
        })
    }
})

app.get("/users" , async(req , res)=>{
    try{
        const users = await User.find({}) //all users 
        res.status(200).json({
            success : true,
            message : "User fetched successfully",
            users
        })
    }catch(err){
        res.status(500).json({
            success : false ,
            message :"Error Occured while retriving users"
        })   
    }
})

app.get("/users/:id" , async(req , res)=>{
    try{
        let user = await User.findById(req.params.id);
        //can use also 
        //let user = await User.findOne({id = id})  first id is db id and second id is req se aai id
        //two things 
        //1. id = output as only stirng format so we should use this only
        //2. _id = output as object
        if(!user){
            return res.status(500).json({
                success : false ,
                message : "users not found",
            })   
        }
        return res.status(200).json({
            success : true ,
            message : "users retrived successfully",
            users : {user}
        })
    }catch(err){
        res.status(500).json({
            success : false ,
            message :"Error Occured while retriving users by id"
        })   
    }
})

app.patch("/users/:id" , async(req , res)=>{
    
    try{
        let {name , password , email} = req.body;
        await User.findByIdAndUpdate(req.params.id , {name , password , email}) //of{id : id} because key-val is same can use this also
        return res.status(200).json({
            success : true ,
            message : "updated successfully"
        })
    }catch(err){
        return res.status(500).json({
            success : false ,
            message : "error occur while updating user details"
        })
    }
})

app.delete("/users/:id" , async(req , res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success : true,
            message : "deletd successfully"
        })
    }catch(err){
        return res.json({
            success : false ,
            message : "error occur while deleting the user"
        })
    }
})
app.listen(3000 , ()=>{
    console.log("server started")
    DbConnect();
})