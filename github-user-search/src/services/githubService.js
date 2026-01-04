import axios from 'axios';

// The function name must be fetchUserData as per the requirements
export const fetchUserData = async (username) => {
    // We use the GitHub API endpoint for a single user
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};
