import React from 'react'
import Avatar from 'react-avatar';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/auth.slice';
const AppBar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const isLogedIn=useSelector((state)=>state.auth.auth.status)
 const userName = useSelector((state) => state.auth.auth.userData? state.auth.auth.userData.username:"" );
  console.log(userName,"uswrname")
  console.log(isLogedIn,"LogedIn hai kya?")
  const handleLogout=()=>{
    localStorage.clear();
    dispatch(logout())

    navigate('/login')
  }
  return (
    <>
    <div className='border-b flex justify-between px-10'>
        <div>
            Medium
        </div>
        
        {isLogedIn?(<>
          <div>
        <button onClick={handleLogout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
        <Link to={'/publish'}>
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </Link>
        <Avatar className='w-10 h-10 rounded-full' name={userName}/>

        </div>
        </>):(null)}

    </div>
    </>
  )
}

export default AppBar