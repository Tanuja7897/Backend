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
//now we read response status
//the response status code indicate wether a http req has been successfully completed it is the group of 5 classes
//read docs .
//Informational responses (100 – 199)   1xx
// Successful responses (200 – 299)      2xx
// Redirection messages (300 – 399)      3xx
// Client error responses (400 – 499)    4xx
// Server error responses (500 – 599)    5xx
//200 -> OK
//201 -> created
//400 ->bad request (client ke gdbd ki)
//404 -> not found
//500 ->Internal server error (server side)
//5001 -> not implemented 
app.get("/" , (request , response)=>{
    response.status(404).send("get page")
})

//Headers 
