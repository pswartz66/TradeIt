
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

