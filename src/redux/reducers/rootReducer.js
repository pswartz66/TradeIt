
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
// import login, * as fromLogin from './loginReducer'
// import applyFilter from './searchOptions'
import modalOpts from './modalOpts'

const rootReducer = combineReducers({
  // applyFilter,
  modalOpts
});

export default rootReducer;
