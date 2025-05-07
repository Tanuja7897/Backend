//MongoDB provides two methods to connect to a database: the MongoClient(GUi) and the MongoDB shell.
// The MongoClient is a graphical user interface that allows you to interact with your MongoDB database visually. It provides a user-friendly way to manage your databases, collections, and documents. You can perform various operations such as creating, reading, updating, and deleting data without writing any code. The MongoClient is ideal for users who prefer a visual approach to database management.
// The MongoDB shell, on the other hand, is a command-line interface that allows you to interact with your MongoDB database using JavaScript commands. It provides a powerful way to perform complex queries and operations on your data. The shell is ideal for users who are comfortable with coding and want to automate tasks or perform advanced operations. You can use the shell to write scripts, run queries, and manage your database programmatically. In summary, the MongoClient is a graphical tool for visual database management, while the MongoDB shell is a command-line interface for coding and automation.
//to connect to backend and database there is an ODM(object data modeling) called mongoose which is used to connect to the database and perform CRUD operations on the data. It is a library that provides a schema-based solution to model your application data. Mongoose allows you to define schemas for your data, which helps enforce data validation and structure. It also provides a powerful query language and middleware support for handling complex operations. Mongoose is widely used in Node.js applications to interact with MongoDB databases. It simplifies the process of connecting to the database and performing CRUD operations, making it easier for developers to work with MongoDB in their applications.
//installation ->npm i mongoose
//it provides a method mongoose.connect() to connect to the database and perform CRUD operations on the data. 
//connect methods accepts a paramenter called uri(uniform resource identifier) which is a string that specifies the location of the database. basically it is the ip or url of localc host or cloud url
//mongodb://localhost:27017/ is the default url for local host and 27017 is the default port number for mongodb.
//mongodb atlas -> used in the time of deployment of the application. because localhost may not be run to ther computers and may be mongoose not be installed to the system ..it is a way to provide global url

const mongoose = require("mongoose");
const app = require("express")();
async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/myFirstDatabase")
        console.log("DB connected successfully")
    }catch(err){
        console.log(err)
    }
}
//schema
const userSchema = new mongoose.Schema({ //necessary and good practice to new user here
    name : String,
    email : {
        type : String ,
        unique : true  //ek email se 2 entry is not possible
    },
    password : String
})
//model   mongoose.model("name of the collection" , "schema name")  //user is the name of the collection and userSchema is the schema name 
//my first database is the name of the database and user is the name of the collection in that database inside user collection there is defined userschema
//user is created automatically by --> users
const User = mongoose.model("User" , userSchema)

async function curdUser(){
    //create operation ----->
    let temp = await User.create({
        name : "Tanuja" , 
        email:"u@gmail.com" , 
        password:"123"
    });

    //another way to do the same 
    // let newUser = new User({
    //     name : "Tanuja" , 
    //     email:"tanu@gmail.com" , 
    //     password:"123"
    // });
    // await User.save()

    //find user ---->
    //1. find all user
    const newUser = await User.find()
    //2 . findBy id
    //const newUser = await User.findById("xrtwfx6tygwycux")

    //3 . on the basis of something or some property you find user
    //const newUser = await User.findOne({name : "tanuja"}) //returns very first entry with tanuja

    //delete operation ------>
    // const user =await User.findByIdAndDelete("681b13a5c13b7e38e55a5985")

    //update operation-------->
    const user = await User.findByIdAndUpdate("681b13bbab680d14f8a9b0cd" , {name : "Ritesh"} , {new : true})
    //new true se jo bhi update kiya h vo console pe dikh jayega
    console.log(user)
}


//schema -> blueprint  , template ,sclaten --> defines the shape of the document in that collection(user ka data kaise dikhega?)
//schema types -> string , number , date , boolean , array , object , buffer , null
//models -> ek aise cheej hai jiske throgh hm interact kr skte h apne collection se
//or models ke sath hm apne database se data get kr skte h , delete kr skte and etc
//models->models are fancy constructors compiled from schema definitions. An instance of a model is called a document. //schema se compile hoke bnte h
//models are responsible for creating and reading documents from the underlying MongoDB database.
app.listen(3000 ,()=>{
    console.log("server started")
    connectDB()
    curdUser();
})

