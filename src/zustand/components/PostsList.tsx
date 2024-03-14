import { useEffect } from 'react';
import usePostStore from '../store';
import AddPost from './AddPost';

export const PostsList = () => {
  const { posts, status, error, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <AddPost />

      <h1>Posts</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
};
export default PostsList;
