import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { OffersReducer } from '../offers/reducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({ data: OffersReducer });

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
