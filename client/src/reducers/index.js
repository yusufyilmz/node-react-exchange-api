import { combineReducers } from 'redux'
import product from 'reducers/productReducer'

const rootReducer = combineReducers({
  product,
})

export default rootReducer
