import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { ToastIcon } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const BACKEND_URL=import.meta.env.VITE_APP_BACKEND_URL
const Publish = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate=useNavigate()
  const token=useSelector((state)=>state.auth.auth.token)
  console.log(token,">>token for publish")

  // const[error,setError]=useState(null)
  // console.log(error,"error for use state")
  const publishPost=async()=>{
    try {
      const response=await axios.post(`${BACKEND_URL}/blog/create-blog`,{
        title,
        content
    },{
        headers:{
          Authorization: `Bearer ${token}`,
        }
    });
    console.log(response,"post data")
    toast.success("Blog posted Successfully")
    navigate('/blogs')
      
    } catch (errors) {
      console.log(errors,"Error in posting blog")
      toast.error(errors.response.data.message)

      
    }
    
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the content"
          rows="5"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() =>publishPost()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Publish;
