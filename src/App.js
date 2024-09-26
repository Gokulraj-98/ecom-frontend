import React, { useState } from 'react';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductList from './components/ProductList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Pass selectedCategory and setSelectedCategory to Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.length}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Pass selectedCategory to ProductList */}
      <ProductList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}  // Send selectedCategory to ProductList
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default App;
