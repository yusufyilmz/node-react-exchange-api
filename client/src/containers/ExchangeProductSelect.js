import React, { Component } from "react";
import FilterableSelectBox from 'components/FilterableSelectBox';
import * as actions from 'actions';
import { connect } from 'react-redux';

class ExchangeProductSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    handleSelect(item) {
        this.props.getProductPrice(item);
    }


    render() {
        if (this.props.products.productList) {
            return <div className="row">
                <FilterableSelectBox
                    options={this.props.products.productList}
                    placeholder={'Please select a product from List'}
                    onSelect={this.handleSelect.bind(this)}
                />
            </div>
        }
        return <div />;
    }
}

const mapStateToProps = state => ({
    products: state.product.items
})


export default connect(mapStateToProps, actions)(ExchangeProductSelect)
