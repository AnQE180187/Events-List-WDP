'use client';

import React, { useState } from 'react';
import './CheckoutStyles.css';

const CheckoutPage = () => {
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
    const [formData, setFormData] = useState({
        // Shipping Information
        fullName: '',
        phone: '',
        address: '',
        
        // Payment Information
        paymentMethod: 'cod',
    });

    const [cartItems] = useState([
        { id: 'prd001', name: 'Áo Thun Thời Trang Unisex', price: 250000, quantity: 2 },
        { id: 'prd002', name: 'Quần Jeans Slim Fit', price: 500000, quantity: 1 },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the order to your backend
        console.log('Order submitted:', formData);
        // Navigate to success page or show confirmation
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="checkout-step">
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
                                className="form-input"
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
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Địa Chỉ</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                className="form-input textarea"
                                rows="3"
                            />
                        </div>
                        <div className="button-group">
                            <button 
                                type="button" 
                                className="next-button"
                                onClick={handleNextStep}
                            >
                                Tiếp Tục Thanh Toán
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="checkout-step">
                        <h2>Phương Thức Thanh Toán</h2>
                        <div className="payment-methods">
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={formData.paymentMethod === 'cod'}
                                    onChange={handleInputChange}
                                />
                                <span className="payment-icon">💵</span>
                                <span className="payment-label">Thanh toán khi nhận hàng (COD)</span>
                            </label>
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={formData.paymentMethod === 'bank'}
                                    onChange={handleInputChange}
                                />
                                <span className="payment-icon">🏦</span>
                                <span className="payment-label">Chuyển khoản ngân hàng</span>
                            </label>
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="momo"
                                    checked={formData.paymentMethod === 'momo'}
                                    onChange={handleInputChange}
                                />
                                <span className="payment-icon">📱</span>
                                <span className="payment-label">Ví MoMo</span>
                            </label>
                        </div>
                        <div className="button-group">
                            <button 
                                type="button" 
                                className="back-button"
                                onClick={handlePrevStep}
                            >
                                Quay Lại
                            </button>
                            <button 
                                type="submit" 
                                className="submit-button"
                                onClick={handleSubmit}
                            >
                                Đặt Hàng
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="checkout-container">
            <div className="checkout-main">
                <div className="checkout-header">
                    <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
                        <span className="step-number">1</span>
                        <span className="step-text">Thông Tin Giao Hàng</span>
                    </div>
                    <div className="step-divider" />
                    <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
                        <span className="step-number">2</span>
                        <span className="step-text">Thanh Toán</span>
                    </div>
                </div>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    {renderStep()}
                </form>
            </div>
            
            <div className="order-summary">
                <h3>Đơn Hàng Của Bạn</h3>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <span className="item-quantity">x{item.quantity}</span>
                            </div>
                            <span className="item-price">
                                {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                            </span>
                        </div>
                    ))}
                </div>
                <div className="total-section">
                    <div className="total-row">
                        <span>Tạm tính:</span>
                        <span>{total.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                    <div className="total-row">
                        <span>Phí vận chuyển:</span>
                        <span>0 VNĐ</span>
                    </div>
                    <div className="total-row grand-total">
                        <span>Tổng cộng:</span>
                        <span>{total.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
