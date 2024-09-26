import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal'; // Import the modal component

const ProductList = ({ searchQuery, selectedCategory, cart, setCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://ecom-backend-wooi.onrender.com/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.response ? error.response.data : error.message);
            }
        };

        fetchProducts();
    }, []);


    const filteredProducts = products.filter((product) => {
        // Check if searchQuery matches title or description
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if selectedCategory matches product category
        const matchesCategory = selectedCategory
            ? product.category.toLowerCase() === selectedCategory.toLowerCase() // Ensure category matches exactly
            : true;

        return matchesSearch && matchesCategory;
    });
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isInCart = prevCart.some(item => item._id === product._id);
            if (isInCart) {
                // Remove from cart
                return prevCart.filter(item => item._id !== product._id);
            } else {
                // Add to cart
                return [...prevCart, product];
            }
        });
    };
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product._id}>
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                            onCardClick={() => openModal(product)} // Pass the click handler
                            isInCart={cart.some(item => item._id === product._id)} // Check if the product is in the cart
                        />
                    </div>
                ))}
                {filteredProducts.length === 0 && (
                    <div className="col-span-full text-center">
                        <p className="text-gray-600">No products found.</p>
                    </div>
                )}
            </div>
            {isModalOpen && selectedProduct && (
                <ProductModal product={selectedProduct} onClose={closeModal} />
            )}
        </div>
    );

};

export default ProductList;
