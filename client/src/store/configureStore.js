
import { createStore, applyMiddleware } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import rootReducer from 'reducers';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}