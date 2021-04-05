import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { cartReducer } from '../cart/reducer';
import { OffersReducer } from '../offers/reducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const reducers = combineReducers({ data: OffersReducer, cart: cartReducer });

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
