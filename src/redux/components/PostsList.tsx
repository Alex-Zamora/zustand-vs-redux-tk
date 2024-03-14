import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  getAllPosts,
  getError,
  getPostStatus,
} from '../features/posts/postSlice';
import { useEffect } from 'react';
import AddPost from './AddPost';

export const PostsList = () => {
  const dispatch = useDispatch(),
    posts = useSelector(getAllPosts),
    status = useSelector(getPostStatus),
    error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
