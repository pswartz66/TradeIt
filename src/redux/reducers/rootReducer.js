
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import filterOptions from './modalFilter'
import searchQueries from './searchQuery'
import selectImages from './selectImage'
import listForms from './listingForms'
import dbSet from './dbSetup'
import homeQueries from './homeBodyQueries';

const rootReducer = combineReducers({
  filterOptions,
  searchQueries,
  selectImages,
  listForms,
  dbSet,
  homeQueries
});

export default rootReducer;
