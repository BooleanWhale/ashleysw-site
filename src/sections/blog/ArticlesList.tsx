import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../articles/blogData.json';

const BlogList: React.FC = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
