import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../features/posts/postSlice';

const AddPost = () => {
  const dispatch = useDispatch(),
    [post, setPost] = useState({ title: '', body: '' });

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const canSave = post.title && post.body;

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        dispatch(addNewPost(post));
        setPost({ title: '', body: '' });
      } catch (err) {
        console.log('Failed to save the post', err);
      }
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={onInputChange}
        />
        <br />
        <label htmlFor="body">Content:</label>
        <textarea id="body" name="body" value={post.body} onChange={onInputChange} />
        <br />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPost;
