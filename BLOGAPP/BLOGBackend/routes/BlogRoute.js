const express = require('express');
const { createBlog, getBlog, getByIdBlog, updateBlog, deleteBlog } = require('../controller/blogController');
const route = express.Router(); 

route.post("/blogs" , createBlog)

//get if only draft == false
route.get("/blogs" , getBlog)

route.patch("/blogs/:id" , updateBlog)

//getting blogs throght id
route.get("/blogs/:id" , getByIdBlog)

route.delete("/blogs/:id" , deleteBlog)

module.exports = route