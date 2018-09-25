const moneedaService = require('../services/moneedaService');
const { findCommonElement, isParameterValid } = require('../utils');
const EXCHANGETYPES = process.env.EXCHANGETYPES.split(',').map(item => item.trim());

const getProducts = async (req, res) => {

    try {

        let productList = [];
        for (const key of EXCHANGETYPES) {
            const exchangeProducts = await moneedaService.getProducts(key);

            if (productList.length !== 0) {
                productList = findCommonElement(exchangeProducts, productList);
            }
            else {
                productList = exchangeProducts;
            }
        }

        res.send({ productList });
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
}

const getProductPrice = async (req, res) => {

    var productId = req.params.productId;

    if (!isParameterValid(productId)) {
        return res.status(404).send({ message: "invalid productId" });
    }

    try {
        const priceList = [];
        for (const key of EXCHANGETYPES) {
            const productPrice = await moneedaService.getProductPrice(key, productId);
            productPrice.exchange = key;
            priceList.push(productPrice);
        }

        res.send(priceList);

    } catch (err) {
        console.log(err)
        res.status(400).send({ message: err.message });
    }
}


module.exports = {
    getProducts,
    getProductPrice
}