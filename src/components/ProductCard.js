import React from 'react';

const ProductCard = ({ product, addToCart, isInCart, onCardClick }) => {
    const originalPrice = (product.price * (1 + product.discountPercentage / 100)).toFixed(2);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer" onClick={onCardClick}>
            {/* Standardized Thumbnail Size */}
            <div className="h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover" // Image will still be clickable
                    src={product.thumbnail}
                    alt={product.title}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                <div>
                    <span className="text-green-500 font-bold">${product.price}</span>
                    {product.discountPercentage > 0 && (
                        <span className="text-gray-500 ml-2 line-through">${originalPrice}</span>
                    )}
                </div>
                <div
                    className={`text-xs px-2 py-1 rounded-full ${product.stockQuantity > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}
                >
                    {product.stockQuantity > 0 ? `In Stock (${product.stockQuantity})` : 'Out of Stock'}
                </div>
            </div>
            <div className="px-6 pt-4 pb-4">
                <button
                    className={`font-bold py-2 px-4 rounded w-full ${isInCart ? 'bg-red-500' : 'bg-blue-500'} text-white`}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the card click event
                        addToCart(product);
                    }}
                    disabled={product.stockQuantity === 0}
                >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
