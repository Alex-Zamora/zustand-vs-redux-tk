import create from 'zustand';
import axios from 'axios';
import { Post, PostsState } from '.././interface';

interface PostStore extends PostsState {
  fetchPosts: () => Promise<void>;
  addNewPost: (post: { title: string; body: string }) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  status: 'idle',
  error: '',

  fetchPosts: async () => {
    set({ status: 'loading' });
    try {
      const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      set({ status: 'succeeded', posts: res.data });
    } catch (error: any) {
      set({ status: 'failed', error: error?.message || 'Failed to fetch posts' });
    }
  },

  addNewPost: (newPost) => {
    set((state) => ({
      posts: [{ id: Math.random(), userId: 1, ...newPost }, ...state.posts],
    }));
  },
}));

export default usePostStore;
