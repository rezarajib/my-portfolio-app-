import { useQuery } from '@tanstack/react-query';
import { fetchGithubRepos } from '../api/githubApi';

export const useGithubProjects = () => {
  return useQuery({
    queryKey: ['github-projects'],
    queryFn: fetchGithubRepos,
  });
};