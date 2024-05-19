import React from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
import { useBlogId } from '../hooks';
import Loading from '../components/Loading';

const FullBlogs = () => {
    const [searchParams] = useSearchParams(); 
    const id = searchParams.get('id');

    const { loading, blogRenderData } = useBlogId({ id });

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
                </div>
            )}
        </div>
    );
};




export default FullBlogs;
