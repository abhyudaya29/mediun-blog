import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Welcome To Medium Blog</h1>
              <p className="mt-4 text-gray-600">This is a summary of the blog post. It gives a brief overview of the content to entice readers to click and read more.</p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Here goes the main content of the blog post. It can be several paragraphs long.</p>
                <p>Another paragraph of the blog post content, giving more information and details to the reader.</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Author: Abhyudaya</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Link to={'/signup'}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
