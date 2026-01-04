import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    const handleSearch = async (e, newPage = 1) => {
        if (e) e.preventDefault();
        setLoading(true);
        setError(false);
        if (newPage === 1) setUsers([]); // Clear previous results on new search

        try {
            const data = await fetchUserData(username, location, minRepos, newPage);
            setUsers(prev => [...prev, ...data.items]); // Append new results for "Load More"
            setPage(newPage);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <form onSubmit={(e) => handleSearch(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        className="border p-2 rounded w-full"
                        type="number"
                        placeholder="Min Repositories"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full">
                    Search
                </button>
            </form>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {users.map(user => (
                    <div key={user.id} className="border p-4 rounded-lg flex items-center space-x-4 bg-gray-50 shadow">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                        <div>
                            <h3 className="font-bold text-lg">{user.login}</h3>
                            <p className="text-sm text-gray-600">Location: {user.location || 'Not specified'}</p>
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">View Full Profile</a>
                        </div>
                    </div>
                ))}
            </div>

            {users.length > 0 && !loading && (
                <button 
                    onClick={() => handleSearch(null, page + 1)}
                    className="mt-6 mx-auto block text-blue-600 font-semibold hover:underline"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default Search;
