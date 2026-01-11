import React from 'react';
import { useQuery } from 'react-query';

// Define the fetch function
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook
  // 'posts' is the unique key for this query
  // fetchPosts is the function that returns the promise
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  // Handle Loading State
  if (isLoading) return <div>Loading...</div>;

  // Handle Error State
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Refetch button as requested in Step 3 */}
      <button onClick={() => refetch()}>Refetch Posts</button>
      
      {data.map(post => (
        <div key={post.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
