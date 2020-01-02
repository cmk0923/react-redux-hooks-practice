import currentUser from './currentUser';
import counter from './counter'
import todos from './todos'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  currentUser,
  counter,
  todos
})

export default rootReducer;