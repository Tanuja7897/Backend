import './App.css'
import { Route ,Routes } from 'react-router-dom'
import Blog from './components/blog'
import CreateBlog from './components/createBlog'
import Signin from './pages/signin'
import Signup from './pages/signup'
function App() {
  return(<>
    <Routes>
      <Route path='/' element={<Blog/>}></Route>
      <Route path='signin' element={<Signin/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='blog' element={<Blog/>}></Route>
      <Route path='create-blog' element={<CreateBlog/>}></Route>
      <Route path="*" element={<p> Not Found </p>}></Route>
    </Routes>
  </>)
}

export default App
