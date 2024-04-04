export const selectPosts = (state) => state.posts.items;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.error;
export const selectSearchQuery = (state) => state.posts.searchQuery;
export const selectSelectedFilter = (state) => state.posts.selectedFilter;

export const selectFilteredPosts = (state) => {
  const posts = selectPosts(state);
  const searchQuery = selectSearchQuery(state);
  const selectedFilter = selectSelectedFilter(state);

  let filteredPosts = posts;

  if (searchQuery) {
    filteredPosts = filteredPosts.filter((post) =>
      post.data.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedFilter === 'few') {
    filteredPosts = filteredPosts.filter((post) => post.data.num_comments <= 10);
  } else if (selectedFilter === 'many') {
    filteredPosts = filteredPosts.filter((post) => post.data.num_comments > 10);
  }

  return filteredPosts;
};

export const selectPostDetails = (state) => state.posts.postDetails;