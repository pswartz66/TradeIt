
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import filterOptions from './modalFilter'
import searchQueries from './searchQuery'
import selectImages from './selectImage'
import listForms from './listingForms'

const rootReducer = combineReducers({
  filterOptions,
  searchQueries,
  selectImages,
  listForms
});

export default rootReducer;
