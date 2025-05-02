//the connection betwwen backend and froneend is done throught api
//Application Programming Interface
//intially api was made through SOAP -- Simple object access protocol
//Simple Object Access Protocol (SOAP) is a protocol for exchanging structured information in the implementation of web services.
// It uses XML to encode its messages and relies on application layer protocols like HTTP and SMTP for message negotiation and transmission.
//now jb data XMl ke through jata tha to ye bhut heavy hota tha 
//to remove this rest was introuduce
//REST -> Representational State Transfer
//rest refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems.
//rest ke talk JSON ke through hoti h jo lightweight hota h 
//but rest also gives JSON , XML , HTML whichever you want to use..
//it supports hight speed and low latency communication between client and server
//Restfull Api is a web service that follows the REST architecture(rest ke rule(principles) follow hoke ke apis create ki jati h) and uses HTTP methods to perform CRUD operations on resources.
//rest princliples -> 




const express = require(express)
const app = express()
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

//let we are creating a simple todo app and we want to add card update card see cards and modify card
// so how we we will do that 
// app.get('/getTODO', (req, res) => {})
// app.post("/add TODO" , ()=>{}) 
// app.put("/update TODO" , ()=>{})
// app.delete("/delete TODO" , ()=>{})

//now express says "action mt do kevl Resource k name do"
//action  --> btana ki kya kr rhe hai hm like like getBlog
//insted of this we will use only BLOGS because app.get deke phle hi bta diya ki hm get hi kr rhe hai
//so we will use only resource name and not action name
// app.get('/TODO', (req, res) => {})
// app.post("/TODO" , ()=>{}) 
// app.put("/TODO/:id" , (req , res)=>{
// // const id = req.params}) //req.param is used to get the id
// app.delete("/TODO" , ()=>{})

//request.query is used to get the query params from the url
//query params starts with ? and then & is used to separate the params
//example : http://localhost:3000/TODO?name=abc&age=20
//so to get the name and age we will use req.query.name and req.query.age

//CURD -> Create, Update, Read, Delete
//Create -> POST
//Read -> GET
//Update -> PUT/PATCH
//Delete -> DELETE

//Headers -> Headers are used to pass additional information with the request or response
//Header in closole tab -> on header tab we have 3 sectins -> General, Request Headers, Response Headers
//console.log(request.headers)

//iska output hoga ->
// { host: 'localhost:3000', connection: 'keep-alive', //ye TCP  connection ban rhe
//   chace-control: 'max-age=0', //ye browser ko batata h ki ye request ke liye cache kaise handle karna h kitni der yad rkhna h
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/ 100.0.4896.127 Safari/537.36', //ye browser ka naam aur version batata h
//   'accept-language': 'en-US,en;q=0.9', //browser ki language preference
//   'accept-encoding': 'gzip, deflate, br', //data compression ke liye...ye browser ko batata h ki ye request ke liye kaunsa encoding use karna h
//   'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', //ye browser ko batata h ki kya accept karna h like html, xml, image etc   
//   'upgrade-insecure-requests': '1', //ye browser ko batata h ki insecure request ko upgrade karna h ya nahi
//   'cookie': 'connect.sid=s%3A7f1a2b2c2d2e2f2g2h2i2j2k2l2m2n2o.1234567890abcdefgHIJKLMNOPQRSTUVWXYZ; //ye cookie h jo browser ke through server ko send hoti h
//   'referer': 'http://localhost:3000/', //ye browser ko batata h ki ye request kis page se aayi h
//   'origin': 'http://localhost:3000' } //ye browser ko batata h ki ye request kis origin se aayi h

//heade client and server dono hi send kr skte h
//header ko samjhne ke liye humein ye samjhna hoga ki jab bhi koi request server ko jaati h to uske sath kuch additional information bhi jaati h jo ki header kehlati h
//ye header request ke sath jaati h aur response ke sath bhi jaati h
//ye header client aur server dono hi send kr skte h





