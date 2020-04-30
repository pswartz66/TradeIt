
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import filterOptions from './modalFilter'

const rootReducer = combineReducers({
  filterOptions
});

export default rootReducer;
