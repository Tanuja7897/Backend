const { isUtf8 } = require('buffer');
const express = require('express');
const app = express();
app.use(express.json());
const fs  = require("fs");
const { dirname } = require('path');
let path = __dirname+"/todo.json"
//temp db
let todo = []

app.get('/' , (req , res) =>{
    return res.status(200).json({"message" : 'kya hal hai'})
})

app.get('/todo' , (req , res)=>{
    //we can use map function also but this also works kyoki hmne pura array hi print krva liya h 
    //when we use map funtion then output indivisual {} obj ayega
    try{
        fs.readFile(path, {encoding : "utf-8"},(err , todo)=>{
            todo = todo ? JSON.parse(todo) : []
            return res.status(200).json({todo : todo}); //json.parse because we are sending data in form of JSON, not string
        })
    }catch(err){
        return res.status(500).json({"message" : "Please try again"});
    }
    
})

app.post('/todo' , (req, res) =>{
    try{
        fs.readFile(path , {encoding : "utf-8"} , (err , todo)=>{
            todo = todo ? JSON.parse(todo) : []
            todo.push({...req.body , ischecked : false , id : todo.length + 1})
            fs.writeFile(path , JSON.stringify(todo) , {encoding : "utf-8"} , (err)=>{
                if(err)
                {
                    return res.status(500).json({"message" : "Please try again"});   
                }
                else{
                    return res.status(200).json({"status" : "done"})
                }
            })
    })
    }catch(err){
        return res.status(500).json({"message" : "Please try again"});     
    }
    
})

app.delete('/todo/:id' , (req,res)=>{
    try{
            fs.readFile(path , {encoding : "utf-8"} , (err , todo)=>{
            //prefer
            todo = todo ? JSON.parse(todo) : []
            filtertodo = todo.filter(todo => todo.id != req.params.id);
            //or use this 
            //todo.spilce(Number(req.param.id)-1 , 1); not good one because id can be anything
            fs.writeFile(path , JSON.stringify(filtertodo) , {encoding : "utf-8"} , (err)=>{
                if(err)
                {
                    return res.status(500).json({"message" : "Please try again"});   
                }
                else{
                    return res.status(200).json({"status" : "done"})
                }
            })
        })
    }catch(err){
        return res.status(500).json({"message" : "Please try agagin"})
    }
})

app.put('/todo/:id' , (req , res)=>{
    try{
        fs.readFile(path , {encoding : "utf-8"} , (err , todo)=>{
            todo = todo ? JSON.parse(todo) : []
            // const idx  = req.params.id ;
            // console.log(todo[Number(idx)])
            const idx = todo.findIndex(todo => todo.id == req.params.id)
            todo[idx] = {...todo[idx] , ...req.body}
            fs.writeFile(path , JSON.stringify(todo) , {encoding : "utf-8"} , (err)=>{
                if(err)
                {
                    return res.status(500).json({"message" : "Please try again"});   
                }
                else{
                    return res.status(200).json({"status" : "done"})
                }
            })
        })
    }catch(err){
        return res.status(500).json({"message" : "Please try agagin"})
    }
})
app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})