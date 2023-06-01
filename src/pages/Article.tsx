import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../articles/blogData.json';
import grayMatter from 'gray-matter';
import marked from 'marked';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogData.find((post) => post.id === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const markdownContent = require(`../articles/${blog.content}`);
  const { data, content } = grayMatter(markdownContent.default);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>Date: {data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default Article;