const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello World!'); // Send a 200 OK response with "Hello World!" message
});
// app.post('/' , (req , res)=>{
//   console.log(req.body) // Log the request body to the console
//   return res.status(200).json({'message':'thod'})
// })
//we are senging body in fromat {messafe:'thod'} directly to express server but the output on console (console.log(req.body)) will be undefined because we have not used any middleware to parse the body of the request. and w have send the data in json format
// To fix this, we need to use a middleware to parse the request body before it reaches the route handler.
//so we first send the data to the middleware and then the middleware will parse the data and send it to the route handler.
//Middleware -> middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

//agr mai postman pe post request bhejti hu to vo nhi chlega sbse phle sbse pha middleware chlega then ..
app.use(express.json()); // only parse json data
function fun(req ,res , next ){
  console.log(req);  //agr yha pe req.body likhte hai to undefined aayega kyuki humne body ko parse nahi kiya hai and uske liye hme apne post method pe jana pdega vha hm next funtion ki help se jayenge
  console.log('hello');    //middleware
  next(); // Call the next middleware function in the stack which is fun2
}
function fun2(req , res ,next){
  req.tanu = 'tanu'; // Add a new property to the request object we can do it like this 
  console.log("fun2");
  next(); // Call the next middleware function in the stack which is the route handler post method
}
app.use(fun) 
app.use(fun2);
app.post('/' , (req , res)=>{
  console.log(req.body) // Log the request body to the console
  return res.status(200).json({'message':'thod'})
})

app.use((req, res, next) => {
  req.status(500).send('Not Found'); // if user want to access any unknown route.
});
//Error handling middleware
//Rout handle(post,get etc kisi bhi m error aye) me jo bhi error aayega wo sab yha pe handle hoga
app.use((err, req, res, next) => {
  //agr router handler me koi bhi error ayegi to bina koi line execute hue direct isi pe control ayega 
  console.error(err.stack); // Log the error stack to the console
  res.status(500).send('Something broke!'); // Send a 500 Internal Server Error response
});


//prefer to use try and catch block in the route handler instead of using error handling middleware
//like this 
app.get('/' , (req , res)=>{
  try{
    //some code
  }catch(err){
    console.error(err.stack); // Log the error stack to the console
    return res.status(500).send('Something broke!'); // Send a 500 Internal Server Error response
  }
})



//we can also write this syntax 
function detail(req , res , next){
  console.log('detail middleware')
  next(); 
}
app.get('/' , detail , (req,res)=>{

})



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});