import React from 'react'
import Avatar from 'react-avatar';
import { Link, useNavigate } from 'react-router-dom';
const AppBar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <>
    <div className='border-b flex justify-between px-10'>
        <div>
            Medium
        </div>
        
        <div>
        <button onClick={handleLogout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
        <Link to={'/publish'}>
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </Link>
        <Avatar className='w-10 h-10 rounded-full' name="abhyudaya" />

        </div>

    </div>
    </>
  )
}

export default AppBar