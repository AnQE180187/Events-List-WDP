import React, { useState, useEffect } from 'react';
import './CartPage.css';

const CartPage = () => {
    // Yêu cầu 2: Dữ liệu giỏ hàng mock
    const [cartItems, setCartItems] = useState([
        { id: 'prd001', name: 'Áo Thun Thời Trang Unisex', price: 250000, quantity: 2 },
        { id: 'prd002', name: 'Quần Jeans Slim Fit', price: 500000, quantity: 1 },
    ]);

    // Yêu cầu 3: Tính tổng giá trị giỏ hàng
    const [total, setTotal] = useState(0);

    // useEffect sẽ chạy mỗi khi `cartItems` thay đổi
    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    }, [cartItems]);

    return (
        <div className="cart-page-container">
            <h1>Giỏ Hàng Của Bạn</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Giỏ hàng của bạn đang trống. 🛒</p>
            ) : (
                <div className="cart-items-list">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">{item.price.toLocaleString('vi-VN')} VNĐ</p>
                            <p className="item-quantity">Số lượng: {item.quantity}</p>
                            <p className="item-subtotal">Tổng: {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                    ))}
                </div>
            )}
            
            <div className="cart-summary">
                <h2>Tổng Cộng: <span id="cart-total">{total.toLocaleString('vi-VN')} VNĐ</span></h2>
                <button 
                    className="checkout-button"
                    onClick={() => window.location.href = '/checkout'}
                >
                    Tiến Hành Thanh Toán
                </button>
            </div>
        </div>
    );
};

export default CartPage;