const axios = require('axios');
const { createRequestConfig } = require('../utils');

const getProducts = async (exchangeType) => {
    try {
        const url = `https://api.moneeda.com/api/exchanges/${exchangeType}/products`;
        const response = await axios.get(url, createRequestConfig());
        return response.data.map((product) => {
            return product.id
        });

    } catch (e) {
        console.log(e.response.status)
        console.log(e.response.statusCode)
        throw new Error(`Unable to get products, Detail: ${e.response.data.message}`);
    }
};


const getProductPrice = async (exchangeType, productId) => {
    try {

        const url = `https://api.moneeda.com/api/exchanges/${exchangeType}/ticker?product=${productId}`;
        const response = await axios.get(url, createRequestConfig());
        return response.data;

    } catch (e) {
        console.log(e.response.status)
        console.log(e.response.statusCode)
        throw new Error(`Unable to get product Price, Detail: ${e.response.data.message}`);
    }
};

module.exports = {
    getProducts,
    getProductPrice
}