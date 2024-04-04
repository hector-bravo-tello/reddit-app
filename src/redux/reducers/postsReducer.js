import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    selectedFilter: 'all',
    postDetails: null,
  },
  reducers: {
    // fetch states
    fetchPostsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // search states
    searchPostsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    searchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    searchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // post details states
    fetchPostDetailsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.postDetails = action.payload;
    },
    fetchPostDetailsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // search and filter states
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  searchPostsStart,
  searchPostsSuccess,
  searchPostsFailure,
  fetchPostDetailsStart,
  fetchPostDetailsSuccess,
  fetchPostDetailsFailure,
  setSearchQuery,
  setSelectedFilter,
} = postsSlice.actions;

export default postsSlice.reducer;