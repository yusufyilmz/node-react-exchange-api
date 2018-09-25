import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';

class ExchangeLoader extends Component {

    render() {
        return this.props.loading && <div><Loader/> <p>Loading products...</p></div>
    }
}

const mapStateToProps = state => ({
    loading: state.product.loading,
})

export default connect(mapStateToProps, null)(ExchangeLoader)
