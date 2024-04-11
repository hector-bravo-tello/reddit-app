import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure,
         searchPostsStart, searchPostsSuccess, searchPostsFailure,
         fetchPostDetailsStart, fetchPostDetailsSuccess, fetchPostDetailsFailure } from '../reducers/postsReducer';
import { getHomePosts, getPopularPosts, getPostsBySearch, getPostDetails } from '../../api/redditService';

export const fetchHomePosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const posts = await getHomePosts();
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const fetchPopularPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const posts = await getPopularPosts();
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const searchPosts = (query) => async (dispatch) => {
  try {
    dispatch(searchPostsStart());
    const posts = await getPostsBySearch(query);
    dispatch(searchPostsSuccess(posts));
  } catch (error) {
    dispatch(searchPostsFailure(error.message));
  }
};

export const fetchPostDetails = (subreddit, postId) => async (dispatch) => {
  try {
    dispatch(fetchPostDetailsStart());
    const { postDetails, comments } = await getPostDetails(subreddit, postId);
    const postWithImage = {
      ...postDetails,
      imageUrl: postDetails.url,
    };
    //dispatch(fetchPostDetailsSuccess(postWithImage));
    dispatch(fetchPostDetailsSuccess({ ...postWithImage, comments }));
  } catch (error) {
    dispatch(fetchPostDetailsFailure(error.message));
  }
};
