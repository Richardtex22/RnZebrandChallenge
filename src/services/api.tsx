import axios from 'axios';

const baseURL = 'https://api.github.com/users?page=1&per_page=100';

export const getUsers = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    __DEV__ && console.error('Error fetching users - ', error);
    return error as string;
  }
};

export const getUserRepos = async (username: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );
    return response.data.map((repo: any) => {
      const {description, id, html_url, language, name} = repo;
      return {
        description,
        id,
        repoName: name,
        repoUrl: html_url,
        language,
      };
    });
  } catch (error) {
    __DEV__ && console.error('Error fetching repos - ', error);
  }
};
