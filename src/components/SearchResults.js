import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchPosts } from '../redux/actions/postsActions';
import { selectFilteredPosts, selectIsLoading, selectError } from '../redux/postsSelectors';
import Post from './Post';
import FilterBar from './FilterBar';
import Loading from './Loading';

const SearchResults = () => {
  const dispatch = useDispatch();
  const filteredPosts = useSelector(selectFilteredPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    dispatch(searchPosts(searchQuery));
  }, [dispatch, searchQuery]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <FilterBar />
      <div className="search-results">
        {filteredPosts.length === 0 ? (
          <div>No posts found.</div>
        ) : (
          filteredPosts.map((post, index) => (
            <React.Fragment key={post.data.id}>
              <Post post={post.data} />
              {index < filteredPosts.length - 1 && <hr className="post-divider" />}
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;