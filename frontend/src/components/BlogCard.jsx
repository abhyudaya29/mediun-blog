/* eslint-disable react/prop-types */
import React from 'react'

const BlogCard = ({authorName,title,content,publishDate}) => {
  return (
    <>
    <div>
        <p>{authorName}</p>
        <p>{title}</p>
        <p>{content}</p>
        <p>{publishDate}</p>
    </div>
    </>
  )
}

export default BlogCard