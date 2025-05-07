const express = require("express") 
const app = express()
app.use(express.json())
let users = []
app.post("/users" ,(req,res)=>{
    let {name , email , password} = req.body
    try{
        if(!name || !email || !password){
            return res.status(400).json({
                success : false ,
                message : "please try again and ensure to enter all required fields! "
            })
        }  
        users.push({...req.body , id:users.length +1 });
        res.status(200).json({
            success : true ,
            message : "Created successfully"
        })
    }catch(err){
        res.status(500).json({
            success : false ,
            message :"Error Occured while creating users"
        })
    }
})

app.get("/users" , (req , res)=>{
    try{
        res.status(200).json({
            success : true ,
            message : "users retrived successfully",
            users :{users}
        })
    }catch(err){
        res.status(500).json({
            success : false ,
            message :"Error Occured while retriving users"
        })   
    }
})

app.get("/users/:id" , (req , res)=>{
    try{
        let user = users.filter(user => user.id == req.params.id)
        if(!user.length){
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

app.patch("/users/:id" , (req , res)=>{
    let idx = users.findIndex(user => user.id == req.params.id)
    try{
        users[idx] = {...users[idx], ...req.body}
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

app.delete("/users/:id" , (req , res)=>{
    try{
        users = users.filter(user => user.id!=req.params.id)
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
})