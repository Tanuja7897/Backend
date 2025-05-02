const express = require('express');
const app = express();
app.use(express.json());
//temp db
let todo = []

app.get('/' , (req , res) =>{
    return res.status(200).json({"message" : 'kya hal hai'})
})

app.get('/todo' , (req , res)=>{
    //we can use map function also but this also works kyoki hmne pura array hi print krva liya h 
    //when we use map funtion then output indivisual {} obj ayega
    try{
        return res.status(200).json(todo);
    }catch(err){
        return res.status(500).json({"message" : "Please try again"});
    }
    
})

app.post('/todo' , (req, res) =>{
    try{
        todo.push({...req.body , ischecked : false , id : todo.length + 1})
        return res.status(200).json({"status" : "done"})

    }catch(err){
        return res.status(500).json({"message" : "Please try again"});    
    }
})

app.delete('/todo/:id' , (req,res)=>{
    try{
        //prefer
        todo = todo.filter(todo => todo.id != req.params.id);
        //or use this 
        //todo.spilce(Number(req.param.id)-1 , 1);
        return res.status(200).json({"message" : "deleted successfully"})
    }catch(err){
        return res.status(500).json({"message" : "Please try agagin"})
    }
})

app.put('/todo/:id' , (req , res)=>{
    try{
        // const idx  = req.params.id ;
        // console.log(todo[Number(idx)])
        const idx = todo.findIndex(todo => todo.id == req.params.id)
        todo[idx] = {...todo[idx] , ...req.body}
        return res.status(200).json({"message" : "updated successfully"})
    }catch(err){
        return res.status(500).json({"message" : "Please try agagin"})
    }
})
app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})