const http = require("http");
const server = http.createServer(function(req , res){
    //kis type ki request hai ? usually get request
    console.log(req.method)
    //for testing other method like put , delete , update etc we need frontend or we can use frontend or...additionaly see in server.js file 
    if(req.method == "GET"){
        res.end("get request")
    }
    else if(req.method == "POST"){
        res.end("post request")
    }
    else if(req.method == "PUT"){
        res.end("put request")
    }
    else if(req.method == "UPDATE"){
        res.end("update request")
    }
    else if(req.method == "DELETE"){
        res.end("delete request")
    }
});
server.listen(3000 , ()=>{
    console.log("server stared")
})
