import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPostDetails } from '../redux/actions/postsActions';
import { selectPostDetails, selectIsLoading, selectError } from '../redux/postsSelectors';
import Loading from './Loading';

const PostDetails = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { subreddit, id } = useParams();
  //console.log(`subreddit: ${subreddit} id: ${id}`);

  useEffect(() => {
    dispatch(fetchPostDetails(subreddit, id));
  }, [dispatch, subreddit, id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!postDetails) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="post-details">
      {postDetails.url && (
        <img src={postDetails.thumbnail} alt={postDetails.title} className="post-image" />
      )}
      <h2>{postDetails.title}</h2>
      <p>Author: {postDetails.author}</p>
      <p>Subreddit: {postDetails.subreddit}</p>
      <p>Score: {postDetails.score}</p>
      <p>Comments: {postDetails.num_comments}</p>
      <div className="post-content">{postDetails.selftext}</div>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetails;