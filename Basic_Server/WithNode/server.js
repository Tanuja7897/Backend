const http = require("http");
const fs = require("fs")
//create server
const server = http.createServer(function (request, response) {
    // console.log(request)
    // console.log(response)
    //jha response me kya dikhega yha mera server res dega
    // response.end("My first Server");
    //passing html to web 
    // response.end("<h1>Tanuja</h1>");
    filepath = __dirname + "/index.html"

    if (request.url == '/' || request.url == "/about") {
        let path = request.url.split('/')[1].toUpperCase(); //request.url gives url which user enters
        path = path == "" ? "Tanuja" : path;
        console.log(path) ;
        fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
            if (err) throw err;
            else {
                data = data.replace("[dynamic Content]" , path);   //replacing html content according to route
                response.end(data)
            }
        })
    }
    else{
        return response.end(JSON.stringify({message : "Not Found"}))
    }

})
//start server
server.listen(3000, () => {
    //jo bhi krna h server start hote hi like database connection
    console.log("server created")
})