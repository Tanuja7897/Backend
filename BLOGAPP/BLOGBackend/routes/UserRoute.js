const express = require('express');
const {createUser , getAllUser, getById , update , deleteUser , Login} = require('../controller/userController');

const route = express.Router(); //good practice because app se bhi ye hm kr skte h but app k use kevl listen krne ke lite kr rhe h


route.post("/users" , createUser) 
//versoning 
// route.post("/api/v1/users" , createUser)
//age hm is trh krenge to hr ek route pe jake same cheej likhni pdegi
//repeated
//so we create a base for /api/v1 and then use..
//go to server.js 
//app.use("/api/v1/" , userRoute ) same for blog also

route.get("/login" , Login)

route.get("/users" , getAllUser)

route.get("/users/:id" ,getById)

route.patch("/users/:id" ,update)

route.delete("/users/:id" ,deleteUser)

module.exports = route
