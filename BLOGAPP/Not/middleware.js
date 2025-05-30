//middleware
//create a folder called middleware 
//inside it create auth.js
//we want ki koi bhi user jbtk register na ho tbtk vo blog ko creare na kr sake
//for that no doubt we have created some restriction already in BLOG controller
//but they are safe route
//we do not want any user can even access the route
//so we use middleware layer
//after bypassing the middleware layer only user can access the route

//jaise hi post request send hogi before hitting createblog url i just simply call verifyUser for authenticity
//route.post("/blogs" ,verifyUser, createBlog)
