import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = require('../articles/blogData.json');

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.slug}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
