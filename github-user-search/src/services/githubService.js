import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
    // Construct the query string for GitHub's Search API
    // Example: q=user:octocat+location:sanfrancisco+repos:>10
    let query = "";
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );
    return response.data;
};
