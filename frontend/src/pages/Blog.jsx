import AppBar from '../components/AppBar'
import { useBlogs } from '../hooks'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleReadFullBlog = (id) => {
    navigate(`/full-blog?id=${id}`);
  };

  const { loading, blogData } = useBlogs();

  if (loading) {
    return (
      <div>
        <Loading/>
      </div>
    );
  }

  return (
    <>
      {/* <AppBar /> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { blogData.length > 0 ? (
            blogData.map((blog) => (
              <div key={blog.id} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.content.slice(0,100)}</p>
                <p className="text-gray-700"><span className='font-bold'>Author</span>: {blog.author.username}</p>
                <p>Published at {formatDate(blog.publishedAt)}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleReadFullBlog(blog.id)}
                  >
                    Read Full blog
                  </button>
                  {/* Assuming 'blog.image' is the image URL */}
                  <img src={blog.thumbnail} alt="Blog Image" className="w-1/3 rounded-lg" />

                  {/* image */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Blog;
