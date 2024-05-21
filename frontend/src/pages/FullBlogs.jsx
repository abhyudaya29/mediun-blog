import React from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
import { useBlogId } from '../hooks';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
const FullBlogs = () => {
    const [searchParams] = useSearchParams(); 
    const id = searchParams.get('id');

    const { loading, blogRenderData } = useBlogId({ id });
    console.log(blogRenderData,">>br")

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="container mx-auto p-4">
            {blogRenderData && (
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">{blogRenderData.title}</h2>
                    <p className="text-gray-700">{blogRenderData.content}</p>
                    
                    <p>Published at {formatDate(blogRenderData.publishedAt)}</p>
                    <img src={blogRenderData.thumbnail} alt="Blog Image" className="w-1/3 rounded-lg mt-10" />

                </div>
                
            )}
            <Link to={'/blogs'}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">More Blogs</button>
            </Link>
        </div>
    );
};




export default FullBlogs;
