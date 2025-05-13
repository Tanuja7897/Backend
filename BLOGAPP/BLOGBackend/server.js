//note  - > when you are importing all files are reading aap unko use kro y n kro but file read hogi
const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
const DbConnect = require("./config/DBConnect")
const UserRoute = require("./routes/UserRoute")
const BlogRoute  = require("./routes/BlogRoute")
app.use(cors())

//connecting routes = using middleware 
app.use("/api/v1" , UserRoute)  //we can also do this app.use(UserRote) but we have given this / due to versoning
app.use("/api/v1" , BlogRoute)

app.listen(3000 , ()=>{
    console.log("server started")
    DbConnect();
})