import React, { useState } from 'react';
import CardProduct from './components/CartProduct';
import { products } from './mockProducts';

const categories = ['Tất cả', ...Array.from(new Set(products.map(p => p.category)))];

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    const matchPrice = !maxPrice || product.price <= parseInt(maxPrice);
    return matchCategory && matchPrice;
  });

  const handleAddToCart = (product) => {
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="catalog-page">
      <div className="filter-bar">
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <input
          type="number"
          placeholder="Giá tối đa"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <CardProduct key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <style jsx>{`
        .catalog-page {
          padding: 16px;
        }
        .filter-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .card-product {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .card-product-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
          margin-bottom: 12px;
        }
        .card-product-info {
          text-align: center;
        }
        .card-product-name {
          font-size: 1.1rem;
          margin: 0 0 8px 0;
        }
        .card-product-price {
          color: #e53935;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .card-product-add {
          background: #1976d2;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .card-product-add:hover {
          background: #1565c0;
        }
        @media (max-width: 600px) {
          .product-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogPage;
