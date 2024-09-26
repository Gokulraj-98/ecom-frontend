// ProductModal.js
import React from 'react';

const ProductModal = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <div className="h-48 overflow-hidden mb-4">
                    <img
                        className="w-full h-full object-cover"
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-green-500 font-bold">${product.price}</span>
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
