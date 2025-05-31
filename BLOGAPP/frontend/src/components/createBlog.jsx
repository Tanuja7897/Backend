//protected route only those can access who has singin token

import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Signup from '../pages/signup'
function createBlog(){
    const [blogData, setBlogData] = useState({
            title: "",
            description: ""
        })
    let user = JSON.parse(localStorage.getItem("User")).token
    
    if(!user){
        return <Navigate to={Signup}/>
    }
    async function handleSubmit() {
        let data = await fetch(
            'http://localhost:3000/api/v1/blogs', //versoning
            {
                method: 'POST',
                body: JSON.stringify(blogData),
                headers: {
                    "Content-Type": "application/json",
                    //passing token throught header...
                    Authorization : "this is token"
                }
            }
        )
        //ye resut backend se arha h

        let res = await data.json()
        alert(res.message);
    }
    return(<>
            <h1>Create Blog</h1>
            <input type="text" placeholder='Title' onChange={(e) => setBlogData((prev) => ({ ...prev, title: e.target.value }))} />
            <br /><br />
            <input type="text" placeholder='description' onChange={(e) => setBlogData((prev) => ({ ...prev, description: e.target.value }))} />
            <br /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </>)
}
export default createBlog