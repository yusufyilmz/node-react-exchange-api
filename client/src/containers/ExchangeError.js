import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExchangeError extends Component {

    render() {
        console.log(this.props.error)
        if (this.props.error) {
            return <div className="alert alert-danger">
                <strong>{this.props.error.error}</strong> <label>{this.props.error.message}</label>
            </div>
        }
        else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({
    error: state.product.error,
})

export default connect(mapStateToProps, null)(ExchangeError)
