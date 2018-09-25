import React from 'react'


const ProductPrice = ({ product, priceColor }) =>
    <div className="product row" >
        <div className="product-detail">
            <h5 className= "product-name">
                <span >{product.exchange}</span>
            </h5>
            <p className="price-container">
                <span style={{'backgroundColor': priceColor}}>{product.price}</span>
            </p>
        </div>
    </div>;

export default ProductPrice;
