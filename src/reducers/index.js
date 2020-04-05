import currentUser from './currentUser';
import count from './counter';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  currentUser,
  count
})

export default rootReducer;