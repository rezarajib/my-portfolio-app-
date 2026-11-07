import { axiosClient } from './axiosClient';

const GITHUB_USERNAME = 'rezarajib'; 

export const fetchGithubRepos = async () => {
  try {
    const response = await axiosClient.get(`/users/${GITHUB_USERNAME}/repos?sort=updated`);
    return response.data;
  } catch (error) {
    console.error("API Error details:", error);
    throw error;
  }
};