// command npm init -y 
//         npm i express
const express = require("express")
const app = express()
app.get("/" , (request , response)=>{
    response.send("get page")
})
app.post("/" , (request , response)=>{
    response.send("post page")
})

app.put("/" , (request , response)=>{
    response.send("put page")
})

app.patch("/" , (request , response)=>{
    response.send("patch page")
})

app.delete("/" , (request , response)=>{
    response.send("delete page")
})

//listen sbse bad me execute hota h chahe kitni bhi lines iske bad ho
app.listen(3000,()=>{
    console.log("started")
})


//The above was method - -> get put post delete etc 
//now we read status
