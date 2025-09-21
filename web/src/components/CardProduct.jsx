import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
  return (
    <div className="bg-dark border border-gray-800 rounded-lg shadow-lg overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-primary font-bold mt-2">{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;