import * as actionTypes from 'constants/actionTypes';

const initialState = {
    items: [],
    prices: [],
    minimumPrice: null,
    maximumPrice: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return { ...state, items: action.payload, error: null, loading: false };

        case actionTypes.GET_PRODUCT_PRICES:
            var productPrices = action.payload;
            var minimumPrice = productPrices.reduce((min, b) => Math.min(min, b.price), productPrices[0].price);
            var maximumPrice = productPrices.reduce((max, b) => Math.max(max, b.price), productPrices[0].price);
            //find minimum and maximum price from list
            return { ...state, prices: productPrices, minimumPrice, maximumPrice, error: null, loading: false };

        case actionTypes.RESET_PRODUCT_PRICES:
            return { ...state, prices: [], error: null, loading: false };

        case actionTypes.FETCHING_COMPONENTS:
            return { ...state, loading: true };

        case actionTypes.ERROR_OCCURED:
            return { ...state, error: action.payload, loading: false };

        default:
            return { ...state };
    }
}
