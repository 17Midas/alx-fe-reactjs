// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    'posts', 
    fetchPosts,
    {
      // Cache data for 5 minutes (default is 5 mins, but we are making it explicit)
      cacheTime: 1000 * 60 * 5, 
      
      // Data is considered fresh for 1 minute
      staleTime: 1000 * 60 * 1, 
      
      // Refetch automatically when the window is focused
      refetchOnWindowFocus: true,
      
      // Keep previous data while fetching new data (useful for pagination/updates)
      keepPreviousData: true
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
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
