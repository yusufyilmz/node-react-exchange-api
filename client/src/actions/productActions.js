import * as actionTypes from 'constants/actionTypes'

export const getProductPrice = (productId) => (dispatch, getState) => {

    dispatch(resetProductPrices());
    dispatch(fetchingComponents());

    fetch(`${process.env.REACT_APP_API_URL.trim()}/products/${productId}/prices`)
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: actionTypes.GET_PRODUCT_PRICES,
                payload: items
            });
        })
        .catch(error => {
            dispatch(errorOccured(error))
        })
}


export const getProducts = () => (dispatch, getState) => {

    dispatch(fetchingComponents());

    fetch(`${process.env.REACT_APP_API_URL.trim()}/products`)
        .then(handleError)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: actionTypes.GET_PRODUCTS,
                payload: items
            });
        })
        .catch(error => {
            dispatch(errorOccured(error))
        })
}


const handleError = (response) => {

    if (!response.ok) {
        return response.json().then(err => { throw err; });
    }
    return response
}

const errorOccured = (error) => (dispatch) => {
    dispatch({
        type: actionTypes.ERROR_OCCURED,
        payload: error
    });
}


const resetProductPrices = () => (dispatch) => {
    dispatch({
        type: actionTypes.RESET_PRODUCT_PRICES,
    });
}


const fetchingComponents = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCHING_COMPONENTS,
    });
}