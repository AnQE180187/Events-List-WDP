import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        ward: '',
        paymentMethod: 'cod'
    });

    const [cartItems, setCartItems] = useState([
        { id: 'prd001', name: 'Áo Thun Thời Trang Unisex', price: 250000, quantity: 2 },
        { id: 'prd002', name: 'Quần Jeans Slim Fit', price: 500000, quantity: 1 },
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    }, [cartItems]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        console.log('Order submitted:', { formData, cartItems, total });
    };

    return (
        <div className="checkout-container">
            <div className="checkout-form-section">
                <h1>Thanh Toán</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Thông Tin Giao Hàng</h2>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ và Tên</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Số Điện Thoại</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Địa Chỉ</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">Tỉnh/Thành Phố</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="district">Quận/Huyện</label>
                                <input
                                    type="text"
                                    id="district"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ward">Phường/Xã</label>
                                <input
                                    type="text"
                                    id="ward"
                                    name="ward"
                                    value={formData.ward}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Phương Thức Thanh Toán</h2>
                        <div className="payment-methods">
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="cod"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={formData.paymentMethod === 'cod'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="cod">
                                    <span className="payment-icon">💵</span>
                                    Thanh toán khi nhận hàng (COD)
                                </label>
                            </div>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="bank"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={formData.paymentMethod === 'bank'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="bank">
                                    <span className="payment-icon">🏦</span>
                                    Chuyển khoản ngân hàng
                                </label>
                            </div>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="momo"
                                    name="paymentMethod"
                                    value="momo"
                                    checked={formData.paymentMethod === 'momo'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="momo">
                                    <span className="payment-icon">📱</span>
                                    Ví MoMo
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="checkout-summary">
                <h2>Đơn Hàng Của Bạn</h2>
                <div className="order-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="order-item">
                            <div className="item-info">
                                <span className="item-name">{item.name}</span>
                                <span className="item-quantity">x{item.quantity}</span>
                            </div>
                            <span className="item-price">
                                {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                            </span>
                        </div>
                    ))}
                </div>
                <div className="order-total">
                    <span>Tổng cộng:</span>
                    <span className="total-amount">{total.toLocaleString('vi-VN')} VNĐ</span>
                </div>
                <button type="submit" className="checkout-button" onClick={handleSubmit}>
                    Đặt Hàng
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
