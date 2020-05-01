
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import filterOptions from './modalFilter'
import searchQueries from './searchQuery'

const rootReducer = combineReducers({
  filterOptions,
  searchQueries
});

export default rootReducer;
