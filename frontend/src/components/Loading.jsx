import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loading() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
              <Skeleton height={30} width="80%" className="mb-4" />
              <Skeleton count={4} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Loading;
