
import { Routes,Route } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import Blog from './pages/Blog'
import SignUp from './pages/SignUp'
import FullBlogs from './pages/FullBlogs'
import Publish from './components/Publish'
import AppBar from './components/AppBar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Component/> */}
      <AppBar/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Login' element={<SignIn/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/full-blog' element={<FullBlogs/>}/>
        <Route path='/publish' element={<Publish/>}/>
        
      </Routes>
    </div>
    </>
  )
}

export default App
