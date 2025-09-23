import React from 'react';

const CardProduct = ({ product, onAddToCart }) => {
	return (
		<div className="card-product">
			<img src={product.image} alt={product.name} className="card-product-img" />
			<div className="card-product-info">
				<h3 className="card-product-name">{product.name}</h3>
				<p className="card-product-price">{product.price.toLocaleString()}đ</p>
				<button className="card-product-add" onClick={() => onAddToCart(product)}>
					Thêm vào giỏ hàng
				</button>
			</div>
		</div>
	);
};

export default CardProduct;
