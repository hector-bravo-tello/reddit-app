import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

export const getHomePosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/r/home.json`);
    return response.data.data.children;
  } catch (error) {
    throw new Error('Failed to fetch home posts');
  }
};

export const getPopularPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/r/popular.json`);
    return response.data.data.children;
  } catch (error) {
    throw new Error('Failed to fetch popular posts');
  }
};

export const getPostsBySearch = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
    return response.data.data.children;
  } catch (error) {
    throw new Error('Failed to search posts');
  }
};

export const getPostDetails = async (subreddit, postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/r/${subreddit}/comments/${postId}.json`);
    const postDetails = response.data[0].data.children[0].data;
    const comments = response.data[1].data.children.map(child => child.data);
    return { postDetails, comments };
  } catch (error) {
    throw new Error('Failed to fetch post details');
  }
};