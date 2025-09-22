import React, { useState } from 'react';
import './ProductDetailPage.css'; // Dành cho CSS

const ProductDetailPage = () => {
    // Dữ liệu sản phẩm mẫu (thường lấy từ API)
    const [product] = useState({
        id: 'prd001',
        name: 'Áo Thun Thời Trang Unisex',
        price: 250000,
        description: 'Một chiếc áo thun cotton 100% chất lượng cao, thoáng mát, phù hợp cho mọi hoạt động hàng ngày.',
        image: 'https://via.placeholder.com/400'
    });

    // Hàm xử lý khi click nút "Add to Cart"
    const handleAddToCart = () => {
        // Yêu cầu 1: Hiển thị alert mock
        alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
        
        // Logic thực tế: Thêm sản phẩm vào giỏ hàng bằng cách cập nhật state hoặc context
        // Ví dụ: addToCart(product);
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
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;