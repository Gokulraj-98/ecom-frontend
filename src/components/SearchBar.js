import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
