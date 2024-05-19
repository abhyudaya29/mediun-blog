import { useState,useEffect } from "react"
import axios from "axios";
const BACKEND_URL=import.meta.env.VITE_APP_BACKEND_URL
export const useBlogs=()=>{
    const[loading,setLoading]=useState(true);
    const[blogData,setBlogData]=useState([])
    console.log(blogData,":blog data")
    const fetchBlogs=async()=>{
        setLoading(true)
        try {
        const response=await axios.get(`${BACKEND_URL}/blog/bulk`);
        const blog=response.data.data
        setBlogData(blog)
        console.log(response,">>response");
        console.log(blog,">>nlog data")
        
          
        } catch (error) {
          console.log(error,">>error in fetching blog")
          throw new error.message
          
        }
        setLoading(false)
      }
      useEffect(()=>{
        fetchBlogs()
      },[])

    return {
        loading,
        blogData
    }
}

export const useBlogId= ({id})=>{

    const[loading,setLoading]=useState(false);
    const[blogRenderData,setBlogRenderData]=useState([]);
    console.log(blogRenderData,">>blog data")
    const fetchFullBlog=async ()=>{
        // setLoading(true)
        

    try {
        
        const response=await axios.get(`${BACKEND_URL}/blog/get-blog?id=${id}`)
        const blogData=response.data.data
        setBlogRenderData(blogData)

    } catch (error) {
        console.log(error,">>error occured in blog ")
        throw new Error.message
        
    }
    }
    // setLoading(false)

    useEffect(()=>{
        fetchFullBlog()
    },[id])
    return{
        loading,
        blogRenderData
    }
}