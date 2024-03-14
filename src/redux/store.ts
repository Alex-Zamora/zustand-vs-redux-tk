import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postSlice';
import { PostsState } from '../interface';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = {
  posts: PostsState;
};

export type AppDispatch = typeof store.dispatch;
