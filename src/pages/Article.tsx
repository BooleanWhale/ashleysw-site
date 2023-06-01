import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../articles/blogData.json';
import ReactMarkdown from 'react-markdown';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogData.find((post) => post.id === id);


  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const markdownContent = require(`../articles/${blog.content}`).default;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>Date: {blog.date}</p>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );  
};

export default Article;
