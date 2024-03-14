import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { Post, PostsState } from '../../../interface';

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: '',
};

export const fetchPosts = createAsyncThunk<Post[], void>('posts/fetchPosts', async () => {
  try {
    const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer: (state, action) => {
        state.posts.unshift(action.payload);
      },
      prepare: ({ title, body }: { title: string; body: string }) => {
        return {
          payload: {
            id: nanoid(),
            userId: 1,
            title,
            body,
          },

          // These properties are required for the `prepare` method
          meta: undefined,
          error: undefined,
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllPosts = (state: RootState) => state.posts.posts;
export const getPostStatus = (state: RootState) => state.posts.status;
export const getError = (state: RootState) => state.posts.error;

export const { addNewPost } = postsSlice.actions;

export default postsSlice.reducer;
