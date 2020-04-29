
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  console.log(store.getState());

  return store;
}

export default configureStore;


// const configureStore = createStore(rootReducer, INITIAL_STATE);

// export default configureStore;