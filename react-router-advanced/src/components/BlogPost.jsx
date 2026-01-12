import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Matches the ":id" in the route path
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Viewing blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
