
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import filterOptions from './modalFilter'
import searchQueries from './searchQuery'
import selectImages from './selectImage'

const rootReducer = combineReducers({
  filterOptions,
  searchQueries,
  selectImages
});

export default rootReducer;
