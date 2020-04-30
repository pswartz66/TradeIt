
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import modalFilter from './modalFilter'

const rootReducer = combineReducers({
  modalFilter
});

export default rootReducer;
