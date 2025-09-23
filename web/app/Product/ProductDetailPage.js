import React, { useState } from 'react';
import './ProductDetailPage.css'; // Dành cho CSS

const ProductDetailPage = () => {
    // Dữ liệu sản phẩm mẫu (thường lấy từ API)
    const [product] = useState({
        id: 'prd001',
        name: 'Áo Thun Thời Trang Unisex',
        price: 250000,
        description: 'Một chiếc áo thun cotton 100% chất lượng cao, thoáng mát, phù hợp cho mọi hoạt động hàng ngày. Mua Ngay!',
        image: 'https://via.placeholder.com/400',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Trắng', 'Đen', 'Xanh']
    });

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    // Hàm xử lý khi click nút "Add to Cart"
    const handleAddToCart = () => {
        alert(`Đã thêm "${product.name}" (${selectedSize}, ${selectedColor}) vào giỏ hàng!`);
    };

    return (
        <div className="product-container">
            <div className="product-image-section">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details-section">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">{product.price.toLocaleString('vi-VN')} VNĐ</p>
                <p className="product-description">{product.description}</p>
                <div className="product-options">
                    <div>
                        <label>Size: </label>
                        <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
                            {product.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Màu: </label>
                        <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
                            {product.colors.map(color => (
                                <option key={color} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;