import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [userData, setUserData] = useState({
    name:"" , 
    email :"" , 
    password :""})
  //for blog
  const [blog , setBlog] = useState([])
  async function handleSubmit(){
    let data = await fetch(
      'http://localhost:3000/api/v1/users', //versoning
      {
        method :'POST',
        body : JSON.stringify(userData),
        headers:{
          "Content-Type" : "application/json"
        }
      }
    )
    //ye resut backend se arha h

    let res = await data.json()
    alert(res.message);
  }
  async function handleBlog(){
    let data = await fetch('http://localhost:3000/api/v1/blogs', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    let res = await data.json();
    setBlog(res);
    console.log(res);
  }
  useEffect(()=>{
    handleBlog()
  },[])
  return (
    
    <>
      <h1>Sign UP</h1>
      <input type="Name" placeholder='Name' onChange={(e) => setUserData((prev) => ({...prev , name:e.target.value}))}/>
      <br /><br />
      <input type="email" placeholder='email' onChange={(e) => setUserData((prev) => ({...prev , email:e.target.value}))}/>
      <br /> <br />
      <input type="Password" placeholder='Password' onChange={(e) => setUserData((prev) => ({...prev , password:e.target.value}))}/>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
