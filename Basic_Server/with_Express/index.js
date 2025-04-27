// Steps
//  1.npm init
//give package name = server
// enter enter ask entrypoint give your file name server.js
// enter neter ...

                        //OR
//npm init -y automaticallly  create package.json file   

//them npm install express
//our express is also depedent on some packags that thing is kept is package-lock.json

// const express = require("express")
// //create instace of express
// const app = express();
// //now we will use this instace
// app.listen(3000 , ()=>{
//     console.log("sever chl gya")
// })

//now it will diplay some error but chlega unlike node js 
//isko solve krne ke liye hme phle path dena pdega
// so first aquire the path 
//ab ye mera server hai and browser koi request krega then hmara server ko request milegai and vo us request ko handle krege
//let request mili get type ki ....to browser response me kuch dega usko handler me rkhte h
//Systax -- > app.requesttype(path , handler)
const express = require("express");
const { request } = require("http");
const app = express();
const path = require("path")
const fs = require("fs")
// app.get("/" ,(request , response)=>{
//     response.send("hello") //response me ye jayega  //yha end ke place pe send use krte h
// })


//hmara browser kevl get request kr skta h aur sari request ke liye hme postman download kena h
//now we can test another request also in postman
// app.post("/" ,(request , response)=>{
//     response.send("hello i am post request") 
// })
//it will used for api testing 

//now ab hme agr koi file seend krni h to sendfile method hota h

// app.get("/" , (request ,response)=>{
//     //read asoulte vs relative path
//     // response.sendFile(__dirname + "/index.html") 
//     //we can directly write path name  " /" handled by path itself
//     //join khud se  /  lga dega  preferable
//     response.sendFile(path.join(__dirname , "index.html"))
// })
// app.get("/about" , (request , response)=>{
//     response.sendFile(path.join(__dirname , "index.html"))
// })


//now we create dynamic data 
function dynamicData (req , res , route){
    fs.readFile((path.join(__dirname , "index.html")) , {encoding:"utf-8"} , (err , data)=>{
        if(err){
            throw new err ;
        }
        else{
            data = data.replace("[path]" , route = "" ? "tanuja" : route)
            res.end(data);
        }
    })
}
// app.get("/" , (request , response)=>{
//     dynamicData(request , response , "");        
// })
// app.get("/about" , (request , response)=>{
//     dynamicData(request , response , "about");        
// })
//or we can do this

app.get(["/" , "/about"] , (request , response) => {
    let path = request.url.split("/")[1].toUpperCase();
    dynamicData(request , response , path)
})
app.listen(3000 , ()=>{
    console.log("sever chl gya")
})