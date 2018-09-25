import React, { Component } from 'react';
import ProductPrice from 'components/ProductPrice';
import { connect } from 'react-redux';

class ProductPriceList extends React.Component {

  constructor(props) {
    super(props);

  }

  getPriceColor(price) {
    if(this.props.minimumPrice === this.props.maximumPrice) {
      //all prices are same
      return "white";
    }
    else if (price === this.props.minimumPrice) {
      return "red";
    }
    else if (price === this.props.maximumPrice) {
      return "green";
    }
    else {
      return "white";
    }
  }

  render() {
    return <div >
      {this.props.prices.map(product =>
        <ProductPrice key={product.exchange}
          product={product}
          priceColor={this.getPriceColor(product.price)}
        />
      )}
    </div>
  }
}

const mapStateToProps = state => ({
  prices: state.product.prices,
  minimumPrice: state.product.minimumPrice,
  maximumPrice: state.product.maximumPrice,
})


export default connect(mapStateToProps, null)(ProductPriceList)
