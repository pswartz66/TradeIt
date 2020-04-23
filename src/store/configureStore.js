// @flow
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import { createLogger } from 'redux-logger';
// import rootReducer from '../reducers/rootReducer';

// export default function configureStore() {
//   const logger = createLogger();
//   const enhancer = compose(
//     applyMiddleware(thunk, promise, logger)
//   )
//   return createStore(rootReducer, undefined, enhancer)
// }