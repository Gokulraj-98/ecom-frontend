import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ searchQuery, setSearchQuery, cartCount, selectedCategory, setSelectedCategory }) => {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between  h-10 px-4" style={{ height: '50px', marginTop: '1px' }}> {/* Header height and padding */}
                {/* Logo */}
                <div className="text-xl font-bold" style={{ height: '50px', marginTop: '-60px' }}>MyShop</div>

                {/* Search Bar */}
                <div className="mx-4" style={{ flexBasis: '400px', flexShrink: 1, marginTop: '-50px' }}>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>

                {/* Dropdown for Category */}
                <div className="relative" style={{ height: '50px', marginTop: '-50px' }}>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border px-2 py-1 rounded-md"
                    >
                        <option value="">All Categories</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="perfume">Perfume</option>
                        <option value="men shoes">Men Shoes</option>
                        <option value="women shoes">women Shoes</option>
                        <option value="decors">Home decors</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>

                {/* Cart Icon */}
                <div className="relative" style={{ height: '50px', marginTop: '-40px' }}>
                    <button className="text-xl">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
