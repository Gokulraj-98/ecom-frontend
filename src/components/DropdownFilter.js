import React from 'react';

const DropdownFilter = ({ selectedCategory, setSelectedCategory, categories }) => {
    return (
        <div className="mb-4">
            <select
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownFilter;
