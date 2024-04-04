import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomePosts, fetchPopularPosts } from '../redux/actions/postsActions';
import { selectFilteredPosts, selectIsLoading, selectError } from '../redux/postsSelectors';
import Post from './Post';
import FilterBar from './FilterBar';
import Loading from './Loading';

const PostList = ({url}) => {
  const dispatch = useDispatch();
  //const { items, isLoading, error } = useSelector((state) => state.posts);
  const filteredPosts = useSelector(selectFilteredPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (url === 'home') { dispatch(fetchHomePosts()); }
    if (url === 'popular') { dispatch(fetchPopularPosts()); }
  }, [dispatch, url]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FilterBar />
      <div className='post-list'>
        {filteredPosts.map((post) => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </div>
    </div>
  );
}; 

export default PostList;